#!/usr/bin/env python3
"""Validate the game data and check how the stars can be balanced.

Usage (from the repository root):
    python3 tools/validate.py              # structure + text + glossary + UI checks
    python3 tools/validate.py --simulate   # also enumerate every possible playthrough

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
            pass
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
    for e in story["endings"]:
        keys |= {f"ending.{e['id']}.title", f"ending.{e['id']}.text"}
    for sid, sc in scenes.items():
        keys.add(f"{sid}.title")
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
            if ch["actor"] not in chars:
                err(f"{sid}.{ch['id']}: unknown actor {ch['actor']}")
            if "requires" in ch:
                check_cond(ch["requires"], f"{sid}.{ch['id']}")
            for r in ch.get("reaction", []):
                keys.add(f"{sid}.{ch['id']}.{r['id']}")
                if r["s"] not in chars:
                    err(f"{sid}.{ch['id']}.{r['id']}: unknown speaker {r['s']}")
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

# ---------- simulation ----------
def cond(c, st):
    if not c:
        return True
    if "all" in c:
        return all(cond(x, st) for x in c["all"])
    if "any" in c:
        return any(cond(x, st) for x in c["any"])
    if "not" in c:
        return not cond(c["not"], st)
    if "flag" in c:
        return c["flag"] in st["flags"]
    if "stars" in c:
        v = st["stars"][c["stars"]["char"]]
        return v >= c["stars"].get("gte", -99) and v <= c["stars"].get("lte", 99)
    if "found" in c:
        n = sum(1 for x in protagonists if st["stars"][x] >= THRESHOLD)
        return n >= c["found"].get("gte", -99) and n <= c["found"].get("lte", 99)
    return True


def simulate():
    """Enumerate every playthrough (every route and every set of picks)."""
    results = set()  # distinct final star vectors

    def play(scene_id, st, route):
        if scene_id == "@ending":
            vec = tuple(st["stars"][c] for c in protagonists)
            results.add(vec)
            return
        sc = scenes[scene_id]
        choices = sc.get("choices", [])
        pick = sc.get("pick", {"min": 1, "max": 1})
        avail = [c for c in choices if cond(c.get("requires"), st)]
        if not choices:
            sets = [()]
        else:
            lo, hi = min(pick["min"], len(avail)), min(pick["max"], len(avail))
            sets = [s for n in range(lo, hi + 1) for s in itertools.combinations(avail, n)]
            sets = sets or [()]
        for chosen in sets:
            st2 = {"stars": dict(st["stars"]), "flags": set(st["flags"])}
            nxt = sc.get("next")
            for c in chosen:  # effects apply in order; 'requires' were checked at scene entry
                st2["flags"] |= set(c.get("flags", []))
                for ef in c.get("effects", []):
                    st2["stars"][ef["char"]] = max(0, min(MAX_STARS, st2["stars"][ef["char"]] + ef["stars"]))
                if pick["max"] == 1 and c.get("next"):
                    nxt = c["next"]
            if isinstance(nxt, list):
                nxt = next((x["to"] for x in nxt if cond(x.get("if"), st2)), None)
            play(nxt or "@ending", st2, route)

    start_state = {"stars": {c: 0 for c in protagonists}, "flags": set()}
    play(story["start"], start_state, [])
    return results


if "--simulate" in sys.argv and not errors:
    res = simulate()
    total = len(res)
    by_found = {}
    for vec in res:
        n = sum(1 for v in vec if v >= THRESHOLD)
        by_found[n] = by_found.get(n, 0) + 1
    print(f"\nDistinct final star combinations reachable: {total}")
    print("Characters found / number of distinct outcomes:")
    for n in sorted(by_found):
        print(f"  {n} found: {by_found[n]}")
    best = max(res, key=lambda v: (sum(1 for x in v if x >= THRESHOLD), sum(v)))
    print("Best reachable outcome:", dict(zip(protagonists, best)))
    print(f"All {len(protagonists)} reaching {THRESHOLD}+ stars is "
          f"{'POSSIBLE' if by_found.get(len(protagonists)) else 'IMPOSSIBLE'}")

print()
for w in warnings:
    print("warning:", w)
for e in errors:
    print("ERROR:  ", e)
print(f"\n{len(errors)} error(s), {len(warnings)} warning(s)")
if __name__ == "__main__":
    sys.exit(1 if errors else 0)
