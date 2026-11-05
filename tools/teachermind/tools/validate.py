#!/usr/bin/env python3
"""Validate the game data and check how the stars can be balanced.

Usage (from the repository root):
    python3 tools/validate.py              # structure + text + glossary + UI checks
    python3 tools/validate.py --simulate   # also explore every possible playthrough

Only the Python standard library is used.
"""
import itertools
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
errors, warnings = [], []


def load(path):
    try:
        return json.loads(Path(path).read_text(encoding="utf-8"))
    except Exception as exc:  # noqa: BLE001
        errors.append(f"{path}: cannot read JSON ({exc})")
        return {}


def err(msg):
    errors.append(msg)


def warn(msg):
    warnings.append(msg)


config = load(ROOT / "data/config.json")
story_cfg = config["stories"][config["story"]]
story_dir = ROOT / story_cfg["path"]
story = load(story_dir / "story.json")
scenes = story.get("scenes", {})
chars = story.get("characters", {})
protagonists = [c for c, v in chars.items() if v.get("type") == "protagonist"]
MAX_STARS = config["maxStars"]
THRESHOLD = config["purposeThreshold"]
TERM_RE = re.compile(r"\[\[([^\]|]+)(?:\|([^\]]+))?\]\]")
referenced_flags = set()   # flags that appear in some condition (the only ones that matter for balance)
set_flags = set()


# ---------- structure ----------
def check_cond(c, where):
    if not isinstance(c, dict):
        err(f"{where}: condition must be an object")
        return
    for k, v in c.items():
        if k in ("all", "any"):
            for sub in v:
                check_cond(sub, where)
        elif k == "not":
            check_cond(v, where)
        elif k == "flag":
            referenced_flags.add(v)
        elif k == "count":
            referenced_flags.update(v["flags"])
        elif k == "stars":
            if v.get("char") not in protagonists:
                err(f"{where}: unknown character in stars condition: {v.get('char')}")
        elif k == "found":
            pass
        else:
            err(f"{where}: unknown condition key '{k}'")


def needed_text_keys():
    keys = {"story.title", "story.subtitle", "story.blurb", "story.note"}
    for cid, c in chars.items():
        if c.get("type") != "narrator":
            keys.add(f"char.{cid}.name")
        if c.get("type") == "protagonist":
            keys |= {f"char.{cid}.end_{b}" for b in ("high", "mid", "low")}
            for r in c.get("results", []):
                keys.add(r["key"])
                check_cond(r.get("if"), f"char.{cid}.results")
    for e in story["endings"]:
        keys |= {f"ending.{e['id']}.title", f"ending.{e['id']}.text"}
        check_cond(e.get("when"), f"ending {e['id']}")
    for sid, sc in scenes.items():
        keys.add(f"{sid}.title")
        set_flags.update(sc.get("setFlags", []))
        if sc.get("note"):
            keys.add(f"{sid}.note")
        if sc.get("prompt"):
            keys.add(f"{sid}.prompt")
        panels = sc.get("panels", [])
        if not 1 <= len(panels) <= 6:
            err(f"{sid}: needs 1 to 6 panels (has {len(panels)})")
        for p in panels:
            keys.add(f"{sid}.{p['id']}")
            if p.get("caption"):
                keys.add(f"{sid}.{p['id']}.cap")
        for ln in sc.get("lines", []):
            keys.add(f"{sid}.{ln['id']}")
            if ln["s"] not in chars:
                err(f"{sid}.{ln['id']}: unknown speaker {ln['s']}")
            if "p" in ln and ln["p"] >= len(panels):
                err(f"{sid}.{ln['id']}: panel index {ln['p']} out of range")
            if "if" in ln:
                check_cond(ln["if"], f"{sid}.{ln['id']}")
        for ch in sc.get("choices", []):
            keys.add(f"{sid}.{ch['id']}")
            set_flags.update(ch.get("flags", []))
            if ch["actor"] not in chars:
                err(f"{sid}.{ch['id']}: unknown actor {ch['actor']}")
            if "requires" in ch:
                check_cond(ch["requires"], f"{sid}.{ch['id']}")
            for r in ch.get("reaction", []):
                keys.add(f"{sid}.{ch['id']}.{r['id']}")
                if r["s"] not in chars:
                    err(f"{sid}.{ch['id']}.{r['id']}: unknown speaker {r['s']}")
                if "if" in r:
                    check_cond(r["if"], f"{sid}.{ch['id']}.{r['id']}")
            for ef in ch.get("effects", []):
                if ef["char"] not in protagonists:
                    err(f"{sid}.{ch['id']}: effect on non-protagonist {ef['char']}")
            nxt = ch.get("next")
            if nxt and nxt != "@ending" and nxt not in scenes:
                err(f"{sid}.{ch['id']}: next scene '{nxt}' does not exist")
        pick = sc.get("pick", {"min": 1, "max": 1})
        if sc.get("choices") and pick["max"] > 1:
            for ch in sc["choices"]:
                if ch.get("next"):
                    warn(f"{sid}.{ch['id']}: 'next' is ignored when pick.max > 1")
        nxt = sc.get("next")
        targets = [nxt] if isinstance(nxt, str) else [x["to"] for x in (nxt or [])]
        for x in ([] if isinstance(nxt, str) or not nxt else nxt):
            check_cond(x.get("if"), f"{sid}.next")
        for t in targets:
            if t != "@ending" and t not in scenes:
                err(f"{sid}: next scene '{t}' does not exist")
        if not targets and not all(ch.get("next") for ch in sc.get("choices", [])):
            err(f"{sid}: no way to leave this scene (set 'next')")
    return keys


def reachable():
    seen, todo = set(), [story["start"]]
    while todo:
        s = todo.pop()
        if s in seen or s == "@ending":
            continue
        seen.add(s)
        sc = scenes[s]
        nxt = sc.get("next")
        todo += [nxt] if isinstance(nxt, str) else [x["to"] for x in (nxt or [])]
        todo += [c["next"] for c in sc.get("choices", []) if c.get("next")]
    return seen


keys = needed_text_keys()
for sid in set(scenes) - reachable():
    warn(f"scene '{sid}' is not reachable from the start")
for f in sorted(referenced_flags - set_flags):
    warn(f"flag '{f}' is tested in a condition but never set")

# ---------- story texts ----------
glossary_terms = set()
for lang in [x["code"] for x in story_cfg["textLanguages"]]:
    text = load(story_dir / f"text.{lang}.json")
    for k in sorted(keys - set(text)):
        err(f"text.{lang}.json: missing key {k}")
    for k in sorted(set(text) - keys):
        warn(f"text.{lang}.json: unused key {k}")
    for k, v in text.items():
        for m in TERM_RE.finditer(v):
            glossary_terms.add(m.group(1))  # [[key|surface form]] or [[key]]
        if v.count("[[") != v.count("]]"):
            err(f"text.{lang}.json: unbalanced [[ ]] in {k}")

# ---------- glossary ----------
for lang in [x["code"] for x in config["uiLanguages"]]:
    gl = load(ROOT / config["glossaryPath"].format(lang=lang))
    for t in sorted(glossary_terms - set(gl)):
        err(f"glossary.{lang}.json: missing term '{t}'")
    for t in sorted(set(gl) - glossary_terms):
        warn(f"glossary.{lang}.json: unused term '{t}'")

# ---------- UI strings ----------
ui = {x["code"]: load(ROOT / config["i18nPath"].format(lang=x["code"])) for x in config["uiLanguages"]}
base = ui[config["defaultUiLanguage"]]
for lang, d in ui.items():
    for k in sorted(set(base) - set(d)):
        err(f"i18n/{lang}.json: missing key {k}")
    for k in sorted(set(d) - set(base)):
        warn(f"i18n/{lang}.json: extra key {k}")
    for k, v in d.items():
        if k in base and sorted(re.findall(r"\{\w+\}", v)) != sorted(re.findall(r"\{\w+\}", base[k])):
            err(f"i18n/{lang}.json: placeholders differ from English in {k}")


# ---------- teacher guide: same sections and block shapes in every UI language ----------
def teacher_shape(g):
    return [[("h" if "h" in b else "ul" if "ul" in b else "p", len(b.get("ul", [])))
             if isinstance(b, dict) else ("p", 0) for b in sec.get("blocks", [])] for sec in g.get("sections", [])]

if config.get("teacherPath"):
    guides = {x["code"]: load(ROOT / config["teacherPath"].format(lang=x["code"])) for x in config["uiLanguages"]}
    ref = teacher_shape(guides[config["defaultUiLanguage"]])
    for lang, g in guides.items():
        if teacher_shape(g) != ref:
            err(f"teacher.{lang}.json: structure differs from English (sections, blocks or list lengths)")


# ---------- simulation ----------
def cond(c, st):
    """st = (stars tuple in protagonists order, frozenset of flags)"""
    if not c:
        return True
    stars, flags = st
    if "all" in c:
        return all(cond(x, st) for x in c["all"])
    if "any" in c:
        return any(cond(x, st) for x in c["any"])
    if "not" in c:
        return not cond(c["not"], st)
    if "flag" in c:
        return c["flag"] in flags
    if "count" in c:
        n = sum(1 for f in c["count"]["flags"] if f in flags)
        return n >= c["count"].get("gte", -99) and n <= c["count"].get("lte", 99)
    if "stars" in c:
        v = stars[protagonists.index(c["stars"]["char"])]
        return v >= c["stars"].get("gte", -99) and v <= c["stars"].get("lte", 99)
    if "found" in c:
        n = sum(1 for v in stars if v >= THRESHOLD)
        return n >= c["found"].get("gte", -99) and n <= c["found"].get("lte", 99)
    return True


def apply_choice(ch, st):
    stars, flags = list(st[0]), set(st[1])
    flags |= {f for f in ch.get("flags", []) if f in referenced_flags}
    for ef in ch.get("effects", []):
        i = protagonists.index(ef["char"])
        stars[i] = max(0, min(MAX_STARS, stars[i] + ef["stars"]))
    return tuple(stars), frozenset(flags)


def scene_exits(sc, st):
    """All (state, chosen_next) in which the player can leave the scene.
    Mirrors the engine: choices are offered live, in any order, until pick.max is reached
    or nothing is left; the player may stop once pick.min picks are made."""
    choices = sc.get("choices", [])
    rule = {"min": 1, "max": 1, **sc.get("pick", {})}
    exits, seen = set(), set()
    stack = [(st, frozenset(), None)]
    while stack:
        node = stack.pop()
        if node in seen:
            continue
        seen.add(node)
        cur, picked, chosen_next = node
        avail = [c for c in choices if c["id"] not in picked and cond(c.get("requires"), cur)]
        can_stop = len(picked) >= min(rule["min"], len(picked) + len(avail))
        if not choices or can_stop or len(picked) >= rule["max"]:
            exits.add((cur, chosen_next))
        if len(picked) < rule["max"]:
            for c in avail:
                nxt = c.get("next") if rule["max"] == 1 else None
                stack.append((apply_choice(c, cur), picked | {c["id"]}, nxt or chosen_next))
    return exits


def simulate():
    """Explore every reachable (scene, stars, flags) state once. Returns the set of final states."""
    start = (tuple(0 for _ in protagonists), frozenset())
    finals, seen = set(), set()
    stack = [(story["start"], start)]
    while stack:
        sid, st = stack.pop()
        if (sid, st) in seen:
            continue
        seen.add((sid, st))
        sc = scenes[sid]
        flags = frozenset(st[1] | {f for f in sc.get("setFlags", []) if f in referenced_flags})
        st = (st[0], flags)
        for cur, chosen_next in scene_exits(sc, st):
            nxt = chosen_next or sc.get("next")
            if isinstance(nxt, list):
                nxt = next((x["to"] for x in nxt if cond(x.get("if"), cur)), None)
            if not nxt or nxt == "@ending":
                finals.add(cur)
            else:
                stack.append((nxt, cur))
    return finals


def sample(n, seed=1):
    """Random playthroughs (the exact search explodes with three threads). Returns final states."""
    import random
    rnd = random.Random(seed)
    finals = set()
    for _ in range(n):
        sid, cur = story["start"], (tuple(0 for _ in protagonists), frozenset())
        while True:
            sc = scenes[sid]
            cur = (cur[0], frozenset(cur[1] | {f for f in sc.get("setFlags", []) if f in referenced_flags}))
            cur, chosen = rnd.choice(list(scene_exits(sc, cur)))
            nxt = chosen or sc.get("next")
            if isinstance(nxt, list):
                nxt = next((x["to"] for x in nxt if cond(x.get("if"), cur)), None)
            if not nxt or nxt == "@ending":
                finals.add(cur)
                break
            sid = nxt
    return finals


def found_of(stars):
    return sum(1 for v in stars if v >= THRESHOLD)


if "--simulate" in sys.argv and not errors:
    finals = sample(int(sys.argv[sys.argv.index("--sample") + 1])) if "--sample" in sys.argv else simulate()
    by_found = {}
    for stars, _ in finals:
        by_found.setdefault(found_of(stars), set()).add(stars)
    outcomes = {s for s, _ in finals}
    print(f"\nDistinct final star combinations reachable: {len(outcomes)}")
    print(f"Characters that found a direction (>= {THRESHOLD} stars) / number of distinct outcomes:")
    for n in sorted(by_found):
        print(f"  {n} found: {len(by_found[n])}")
    best = max(outcomes, key=lambda v: (found_of(v), sum(v)))
    print("Best reachable outcome:", dict(zip(protagonists, best)))
    print(f"All {len(protagonists)} reaching {THRESHOLD}+ stars is "
          f"{'POSSIBLE' if by_found.get(len(protagonists)) else 'IMPOSSIBLE'}")

    # which combinations of threads (done* flags) can reach what?
    done = sorted(f for f in referenced_flags if re.fullmatch(r"done[A-Z]", f))
    if done:
        print("\nBy threads played (best number of characters that found a direction, and how many outcomes reach 5):")
        combos = {}
        for stars, flags in finals:
            key = tuple(f[-1] for f in done if f in flags)
            c = combos.setdefault(key, {"best": 0, "all": 0, "n": set()})
            c["best"] = max(c["best"], found_of(stars))
            c["n"].add(stars)
            if found_of(stars) == len(protagonists):
                c["all"] += 1
        for key, c in sorted(combos.items()):
            print(f"  threads {'+'.join(key) or '-'}: best {c['best']} found, {len(c['n'])} outcomes, "
                  f"{c['all']} with everyone")

print()
for w in warnings:
    print("warning:", w)
for e in errors:
    print("ERROR:  ", e)
print(f"\n{len(errors)} error(s), {len(warnings)} warning(s)")
if __name__ == "__main__":
    sys.exit(1 if errors else 0)
