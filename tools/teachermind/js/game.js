/* Tulevaisuuden tähdet — story game engine.
 *
 * No dependencies. All content lives in JSON files under data/:
 *   data/config.json                          settings, languages, list of stories (minigames)
 *   data/i18n/<lang>.json                     interface strings
 *   data/glossary/glossary.<lang>.json        simple explanations for marked words
 *   data/stories/<id>/story.json              language-neutral structure (scenes, choices, effects)
 *   data/stories/<id>/text.<lang>.json        all dialogue and captions in one language
 *
 * See README.md for the data format.
 */
"use strict";

(() => {
  // ---------------------------------------------------------------- helpers
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* storage blocked: the game still works */ }
  }
  function storageRemove(key) {
    try { window.localStorage.removeItem(key); } catch (e) { /* ignore */ }
  }
  async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
    return res.json();
  }

  // ---------------------------------------------------------------- globals
  let config, story, storyBase, currentId = null;
  let only = null;            // teacher's choice of selectable scenes (array of scene ids) or null = all
  let guideFor = null;        // story id whose teacher guide is shown
  let uiStrings = {}, uiFallback = {};
  let glossary = {}, glossaryFallback = {};
  let textMap = {}, textFallback = {};
  let prefs = { ui: null, text: null, theme: null, size: "md" };
  let state = null;           // saved progress (see freshState)
  let rendered = { scene: null, feedCount: 0 };
  let lastGain = {};          // character id -> number of stars just gained (for the animation)
  let glossOpener = null;

  const KEY_PREFS = () => `${config.storageKey}:prefs`;
  const KEY_PROGRESS = () => `${config.storageKey}:progress:${story.id}`;

  // ---------------------------------------------------------------- i18n
  function t(key, vars) {
    let s = key in uiStrings ? uiStrings[key] : (key in uiFallback ? uiFallback[key] : key);
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return s;
  }

  // Story text: a missing key stays visible so authors notice it.
  function txt(key) {
    if (key in textMap) return textMap[key];
    if (key in textFallback) return textFallback[key];
    return `⟦${key}⟧`;
  }

  function applyStaticI18n() {
    // Rule: data-i18n goes on leaf elements only (textContent would delete children).
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria")));
    });
    document.documentElement.lang = prefs.ui;
    updateThemeButton();
  }

  // ---------------------------------------------------------------- teacher guide
  // One guide per story: config.stories.<id>.teacher is a path template with {lang}.
  // Fallback order: interface language, English, Finnish.
  async function loadTeacherGuide(id) {
    const tpl = config.stories[id].teacher;
    const langs = [prefs.ui, config.defaultUiLanguage, "fi"].filter((l, i, a) => l && a.indexOf(l) === i);
    for (const l of langs) {
      try { return await fetchJSON(tpl.replace("{lang}", l)); } catch (e) { /* try the next language */ }
    }
    throw new Error(`no teacher guide for ${id}`);
  }

  function renderTeacherGuide(guide) {
    $("#teacherTitle").textContent = guide.title;
    const box = $("#teacherContent");
    box.replaceChildren();
    const add = (tag, text, parent = box) => {
      const node = document.createElement(tag);
      node.textContent = text;
      parent.appendChild(node);
      return node;
    };
    if (guide.intro) add("p", guide.intro);
    (guide.sections || []).forEach((sec) => {
      add("h3", sec.h);
      (sec.blocks || []).forEach((b) => {
        if (typeof b === "string") add("p", b);
        else if (b.h) add("h4", b.h);
        else if (b.p) add("p", b.p);
        else if (b.ul) {
          const ul = document.createElement("ul");
          b.ul.forEach((li) => add("li", li, ul));
          box.appendChild(ul);
        } else if (b.table) {
          const wrap = el("div", "table-wrap");
          const table = document.createElement("table");
          const thead = document.createElement("thead");
          const hr = document.createElement("tr");
          b.table.head.forEach((c) => add("th", c, hr));
          thead.appendChild(hr);
          table.appendChild(thead);
          const tbody = document.createElement("tbody");
          b.table.rows.forEach((r) => {
            const tr = document.createElement("tr");
            r.forEach((c) => add("td", c, tr));
            tbody.appendChild(tr);
          });
          table.appendChild(tbody);
          wrap.appendChild(table);
          box.appendChild(wrap);
        }
      });
    });
  }

  // Without an open story the dialog lists the guides of all stories.
  function renderGuideIndex() {
    $("#teacherTitle").textContent = t("teachers");
    const box = $("#teacherContent");
    box.replaceChildren();
    box.appendChild(el("p", "", t("teacherPick")));
    const ul = el("ul", "guide-index");
    Object.keys(config.stories).filter((id) => config.stories[id].teacher).forEach((id) => {
      const li = el("li");
      const b = el("button", "btn");
      b.type = "button";
      b.textContent = t(`menu.${id}.title`);
      b.addEventListener("click", () => { guideFor = id; showGuide(); });
      li.appendChild(b);
      ul.appendChild(li);
    });
    box.appendChild(ul);
  }

  async function showGuide() {
    if (!guideFor) { renderGuideIndex(); return; }
    try {
      renderTeacherGuide(await loadTeacherGuide(guideFor));
    } catch (e) {
      showLoadError(new Error(t("teacherLoadError")));
      renderGuideIndex();
    }
    $("#dlgTeachers").scrollTop = 0;
  }

  async function openTeacherGuide() {
    guideFor = currentId && config.stories[currentId].teacher ? currentId : null;
    await showGuide();
    const dlg = $("#dlgTeachers");
    if (!dlg.open) dlg.showModal();
  }

  // ---------------------------------------------------------------- theme / size
  function isDark() { return document.documentElement.getAttribute("data-theme") === "dark"; }

  function initTheme() {
    const theme = prefs.theme ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-size", prefs.size || "md");
    updateThemeButton();
    updateSizeButtons();
  }
  function updateThemeButton() {
    const label = $("#btnThemeLabel");
    if (label) label.textContent = isDark() ? t("themeToLight") : t("themeToDark");
  }
  function toggleTheme() {
    const next = isDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    prefs.theme = next;
    savePrefs();
    updateThemeButton();
    // Nothing is drawn with hard-coded colours in JS, so no further re-render is needed.
  }
  function setSize(size) {
    prefs.size = size;
    document.documentElement.setAttribute("data-size", size);
    savePrefs();
    updateSizeButtons();
  }
  function updateSizeButtons() {
    document.querySelectorAll("#sizeToggle .seg-btn").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.size === prefs.size));
    });
  }

  function savePrefs() { storageSet(KEY_PREFS(), JSON.stringify(prefs)); }
  function loadPrefs() {
    try {
      const saved = JSON.parse(storageGet(KEY_PREFS()) || "{}");
      Object.assign(prefs, saved);
    } catch (e) { /* ignore corrupt prefs */ }
  }

  // ---------------------------------------------------------------- loading
  const uiCodes = () => config.uiLanguages.map((l) => l.code);

  function pickInitialUiLanguage() {
    if (prefs.ui && uiCodes().includes(prefs.ui)) return prefs.ui;
    const nav = (navigator.languages || [navigator.language || ""]).map((l) => l.slice(0, 2).toLowerCase());
    return nav.find((c) => uiCodes().includes(c)) || config.defaultUiLanguage;
  }

  async function loadUiLanguage(lang) {
    const path = (p) => p.replace("{lang}", lang);
    const [ui, gl] = await Promise.all([
      fetchJSON(path(config.i18nPath)),
      fetchJSON(path(config.glossaryPath)).catch(() => ({}))
    ]);
    uiStrings = ui;
    glossary = gl;
    prefs.ui = lang;
    savePrefs();
  }

  async function loadTextLanguage(lang) {
    textMap = await fetchJSON(`${storyBase}/text.${lang}.json`);
    prefs.text = lang;
    savePrefs();
  }

  async function boot() {
    config = await fetchJSON("data/config.json");
    loadPrefs();
    initTheme();

    const uiLang = pickInitialUiLanguage();
    // English is the fallback for missing interface strings and glossary entries.
    const fallbackLang = config.defaultUiLanguage;
    const [fbUi, fbGl] = await Promise.all([
      fetchJSON(config.i18nPath.replace("{lang}", fallbackLang)),
      fetchJSON(config.glossaryPath.replace("{lang}", fallbackLang)).catch(() => ({}))
    ]);
    uiFallback = fbUi;
    glossaryFallback = fbGl;
    await loadUiLanguage(uiLang);
    buildLanguageButtons();
    applyStaticI18n();

    const ids = Object.keys(config.stories);
    const wanted = new URLSearchParams(location.search).get("story");
    if (wanted && config.stories[wanted]) await openStory(wanted);
    else if (ids.length === 1) await openStory(ids[0]);
    else showMenu();
  }

  // Open one story (minigame): load its files, its saved progress and the teacher's scene selection.
  async function openStory(id) {
    const cfg = config.stories[id];
    storyBase = cfg.path;
    const loaded = await fetchJSON(`${storyBase}/story.json`);
    textFallback = await fetchJSON(`${storyBase}/text.${cfg.defaultTextLanguage}.json`);
    const codes = cfg.textLanguages.map((l) => l.code);
    const textLang = codes.includes(prefs.text) ? prefs.text : cfg.defaultTextLanguage;
    story = loaded;
    currentId = id;
    await loadTextLanguage(textLang);
    buildTextLanguageSelect(cfg);
    loadProgress();
    loadOnly();
    buildSelectable();
    closeGloss();
    lastGain = {};
    rendered = { scene: null, feedCount: 0 };
    applyStaticI18n();
    renderAll(true);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function showMenu() {
    story = null;
    state = null;
    currentId = null;
    closeGloss();
    buildSelectable();
    renderAll(true);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  // Saved progress of any story without loading it (for the menu cards).
  function peekProgress(id) {
    try {
      const s = JSON.parse(storageGet(`${config.storageKey}:progress:${id}`) || "null");
      if (!s || !s.started) return null;
      const stars = Object.values(s.stars || {}).reduce((a, n) => a + (Number(n) || 0), 0);
      return { finished: !!s.ending, stars };
    } catch (e) { return null; }
  }

  function renderMenu() {
    $("#menuTitle").textContent = t("menuTitle");
    $("#menuIntro").textContent = t("menuIntro");
    const list = $("#menuCards");
    list.replaceChildren();
    Object.keys(config.stories).forEach((id) => {
      const cfg = config.stories[id];
      const li = el("li", "menu-card");
      const b = el("button", "menu-btn");
      b.type = "button";
      b.appendChild(el("span", "menu-icon", cfg.icon || "★"));
      const body = el("span", "menu-body");
      body.appendChild(el("span", "menu-name", t(`menu.${id}.title`)));
      const aud = el("span", "menu-aud");
      aud.appendChild(el("strong", "", `${t("menuAudience")}: `));
      aud.appendChild(document.createTextNode(t(`menu.${id}.audience`)));
      body.appendChild(aud);
      body.appendChild(el("span", "menu-desc", t(`menu.${id}.desc`)));
      const prog = peekProgress(id);
      body.appendChild(el("span", `menu-state${prog ? " on" : ""}`,
        prog ? (prog.finished ? `✓ ${t("menuFinished")}` : `▸ ${t("menuInProgress")}`) + ` · ★ ${prog.stars}` : t("menuPlay") + " ▸"));
      b.appendChild(body);
      b.addEventListener("click", () => { openStory(id).catch(showLoadError); });
      li.appendChild(b);
      list.appendChild(li);
    });
  }

  // ---- teacher's choice of which selectable scenes (checkpoints) are available
  function loadOnly() {
    only = null;
    const fromUrl = new URLSearchParams(location.search).get("only");
    const wanted = fromUrl ? fromUrl.split(",").map((x) => x.trim()).filter(Boolean)
                           : ((prefs.only || {})[currentId] || null);
    if (!wanted || !wanted.length) return;
    // a token may be a full scene id or a short prefix such as "r05"
    const ids = selectableIds().filter((id) => wanted.some((w) => id === w || id.startsWith(`${w}_`)));
    only = ids.length ? ids : null;
  }
  function selectableIds() {
    return story ? Object.keys(story.scenes).filter((id) => story.scenes[id].selectable) : [];
  }
  function isAllowed(sceneId) {
    const sc = story.scenes[sceneId];
    return !sc || !sc.selectable || !only || only.includes(sceneId);
  }
  function buildSelectable() {
    const field = $("#fieldSelect");
    const box = $("#selectList");
    box.replaceChildren();
    const ids = selectableIds();
    field.hidden = !ids.length;
    ids.forEach((id) => {
      const lab = el("label", "check");
      const cb = el("input");
      cb.type = "checkbox";
      cb.value = id;
      cb.checked = !only || only.includes(id);
      cb.addEventListener("change", () => {
        const on = [...box.querySelectorAll("input:checked")].map((x) => x.value);
        prefs.only = prefs.only || {};
        if (on.length === ids.length || on.length === 0) delete prefs.only[currentId];
        else prefs.only[currentId] = on;
        savePrefs();
        only = on.length && on.length < ids.length ? on : null;
        if (state && state.scene) renderActions(false);
      });
      lab.appendChild(cb);
      lab.appendChild(el("span", "", txt(`${id}.title`)));
      box.appendChild(lab);
    });
  }

  // ---------------------------------------------------------------- state
  function protagonists() {
    return Object.keys(story.characters).filter((id) => story.characters[id].type === "protagonist");
  }

  // Per-story star settings. A story may set maxStars, purposeThreshold (null = no "found a direction" idea)
  // and a per-character max.
  const maxOf = (id) => {
    const c = story.characters[id] || {};
    return c.max !== undefined ? c.max : (story.maxStars !== undefined ? story.maxStars : config.maxStars);
  };
  const thresholdOf = () => (story.purposeThreshold === undefined ? config.purposeThreshold : story.purposeThreshold);
  const purposeOn = () => thresholdOf() !== null && thresholdOf() !== undefined;
  const totalMax = () => protagonists().reduce((a, id) => a + maxOf(id), 0);
  const totalStars = () => protagonists().reduce((a, id) => a + (state.stars[id] || 0), 0);

  function freshState(keepEndings) {
    const stars = {};
    protagonists().forEach((id) => { stars[id] = 0; });
    return {
      v: 1,
      sv: story.version,
      started: false,
      scene: null,
      feed: [],
      queue: [],
      picks: [],
      nextTarget: null,
      stars,
      flags: {},
      ending: null,
      endingsSeen: keepEndings ? (state && state.endingsSeen) || [] : []
    };
  }

  function saveProgress() { storageSet(KEY_PROGRESS(), JSON.stringify(state)); }

  function loadProgress() {
    state = freshState(false);
    try {
      const saved = JSON.parse(storageGet(KEY_PROGRESS()) || "null");
      if (saved && saved.v === 1 && saved.sv === story.version &&
          (saved.scene === null || story.scenes[saved.scene])) {
        // keep only known characters so editing the story file never breaks a saved game
        protagonists().forEach((id) => { if (typeof saved.stars[id] !== "number") saved.stars[id] = 0; });
        state = saved;
      }
    } catch (e) { /* corrupt save: start fresh */ }
  }

  function foundCount(st = state) {
    if (!purposeOn()) return 0;
    return protagonists().filter((id) => (st.stars[id] || 0) >= thresholdOf()).length;
  }

  // Conditions: {flag}, {stars:{char,gte,lte}}, {found:{gte,lte}}, {all:[]}, {any:[]}, {not:{}}
  function cond(c, st = state) {
    if (!c) return true;
    if (c.all) return c.all.every((x) => cond(x, st));
    if (c.any) return c.any.some((x) => cond(x, st));
    if (c.not) return !cond(c.not, st);
    if (c.flag) return !!st.flags[c.flag];
    if (c.stars) {
      const v = st.stars[c.stars.char] || 0;
      return (c.stars.gte === undefined || v >= c.stars.gte) &&
             (c.stars.lte === undefined || v <= c.stars.lte);
    }
    if (c.count) {   // how many of the listed flags are set, e.g. threads already played
      const n = c.count.flags.filter((f) => st.flags[f]).length;
      return (c.count.gte === undefined || n >= c.count.gte) &&
             (c.count.lte === undefined || n <= c.count.lte);
    }
    if (c.found) {
      const n = foundCount(st);
      return (c.found.gte === undefined || n >= c.found.gte) &&
             (c.found.lte === undefined || n <= c.found.lte);
    }
    return true;
  }

  const scene = () => story.scenes[state.scene];
  const pickRule = (sc) => Object.assign({ min: 1, max: 1 }, sc.pick || {});

  // ---------------------------------------------------------------- engine
  function startStory() {
    state = freshState(true);
    state.started = true;
    enterScene(story.start);
  }

  function enterScene(id) {
    const sc = story.scenes[id];
    state.scene = id;
    rendered.scene = null;   // force a full redraw, even when re-entering the same scene
    state.feed = [];
    state.picks = [];
    state.nextTarget = null;
    state.activePanel = null;
    (sc.setFlags || []).forEach((f) => { state.flags[f] = true; });
    state.queue = (sc.lines || [])
      .filter((ln) => cond(ln.if))
      .map((ln) => ({ s: ln.s, k: `${id}.${ln.id}`, p: ln.p }));
    revealNext(false);
    renderAll(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function applyGain(item) {
    const { char, n } = item.gain;
    state.stars[char] = clamp((state.stars[char] || 0) + n, 0, maxOf(char));
    lastGain[char] = (lastGain[char] || 0) + n;
  }

  // Move the next queued item into the feed. Star gains are consumed together with the line before them.
  function revealNext(draw = true) {
    const item = state.queue.shift();
    if (!item) return;
    state.feed.push(item);
    if (item.p !== undefined && item.p !== null) state.activePanel = item.p;
    while (state.queue.length && state.queue[0].gain) {
      const g = state.queue.shift();
      state.feed.push(g);
      applyGain(g);
    }
    saveProgress();
    if (draw) renderAll(false, true);
  }

  function pickChoice(choiceId) {
    const sc = scene();
    const ch = sc.choices.find((c) => c.id === choiceId);
    if (!ch || state.picks.includes(choiceId)) return;
    state.picks.push(choiceId);
    (ch.flags || []).forEach((f) => { state.flags[f] = true; });
    if (pickRule(sc).max === 1 && ch.next) state.nextTarget = ch.next;

    const base = `${state.scene}.${ch.id}`;
    state.queue.push({ s: ch.actor, k: base, choice: true });
    (ch.reaction || []).filter((r) => cond(r.if)).forEach((r) => {
      state.queue.push({ s: r.s, k: `${base}.${r.id}`, p: r.p });
    });
    (ch.effects || []).forEach((ef) => {
      // "once": the star is given only the first time this key is used (so a choice can be revisited safely)
      if (ef.once) {
        if (state.flags[ef.once]) return;
        state.flags[ef.once] = true;
      }
      state.queue.push({ gain: { char: ef.char, n: ef.stars, label: ef.label ? `${base}.${ef.label}` : null } });
    });
    revealNext();
  }

  function goNext() {
    const sc = scene();
    let target = state.nextTarget || sc.next;
    if (Array.isArray(target)) {
      const hit = target.find((x) => cond(x.if));
      target = hit ? hit.to : null;
    }
    if (!target || target === "@ending") return finishStory();
    enterScene(target);
  }

  function finishStory() {
    const ending = story.endings.find((e) => cond(e.when));
    state.ending = ending ? ending.id : null;
    state.scene = null;
    if (state.ending && !state.endingsSeen.includes(state.ending)) state.endingsSeen.push(state.ending);
    saveProgress();
    renderAll(true);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function restartStory() {
    const seen = state.endingsSeen;
    state = freshState(false);
    state.endingsSeen = seen;
    lastGain = {};
    state.started = true;
    enterScene(story.start);
  }

  function clearEverything() {
    storageRemove(KEY_PROGRESS());
    state = freshState(false);
    lastGain = {};
    saveProgress();
    renderAll(true);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  // ---------------------------------------------------------------- rich text + glossary
  const TERM_RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;  // [[key|surface form]] or [[key]]

  function richText(raw) {
    const frag = document.createDocumentFragment();
    let last = 0, m;
    TERM_RE.lastIndex = 0;
    while ((m = TERM_RE.exec(raw)) !== null) {
      if (m.index > last) frag.appendChild(document.createTextNode(raw.slice(last, m.index)));
      const key = m[1].trim();
      const surface = (m[2] || m[1]).trim();
      const btn = el("button", "gloss", surface);
      btn.type = "button";
      btn.dataset.term = key;
      btn.setAttribute("aria-haspopup", "dialog");
      frag.appendChild(btn);
      last = m.index + m[0].length;
    }
    if (last < raw.length) frag.appendChild(document.createTextNode(raw.slice(last)));
    return frag;
  }

  function openGloss(btn) {
    const key = btn.dataset.term;
    const pop = $("#glossPop");
    glossOpener = btn;
    $("#glossWord").textContent = btn.textContent;
    const base = $("#glossBase");
    if (btn.textContent.toLowerCase() !== key.toLowerCase()) {
      base.textContent = `${t("glossaryBase")}: ${key}`;
      base.hidden = false;
    } else {
      base.hidden = true;
    }
    $("#glossText").textContent = glossary[key] || glossaryFallback[key] || t("glossaryMissing");
    pop.hidden = false;
    $("#glossClose").focus({ preventScroll: true });
  }

  function closeGloss() {
    const pop = $("#glossPop");
    if (pop.hidden) return;
    pop.hidden = true;
    if (glossOpener && document.contains(glossOpener)) glossOpener.focus({ preventScroll: true });
    glossOpener = null;
  }

  // ---------------------------------------------------------------- rendering: shared bits
  function avatar(id, extraClass) {
    const c = story.characters[id];
    const node = el("span", `avatar ${c.type === "npc" ? "avatar-npc" : ""} ${extraClass || ""}`);
    node.style.setProperty("--c", c.color);
    node.setAttribute("aria-hidden", "true");
    if (c.portrait) {
      const img = el("img");
      img.src = c.portrait;
      img.alt = "";
      img.addEventListener("error", () => { img.remove(); node.textContent = c.initial; });
      node.appendChild(img);
    } else {
      node.textContent = c.initial;
    }
    return node;
  }

  const SVG_NS = "http://www.w3.org/2000/svg";
  function starIcon(filled, popping) {
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("class", `star ${filled ? "on" : "off"}${popping ? " pop" : ""}`);
    svg.setAttribute("aria-hidden", "true");
    const poly = document.createElementNS(SVG_NS, "polygon");
    poly.setAttribute("points", "12,2.5 14.9,9 22,9.7 16.7,14.4 18.3,21.4 12,17.8 5.7,21.4 7.3,14.4 2,9.7 9.1,9");
    svg.appendChild(poly);
    return svg;
  }

  function starRow(id, popCount) {
    const n = state.stars[id] || 0;
    const row = el("span", "stars");
    for (let i = 0; i < maxOf(id); i++) {
      row.appendChild(starIcon(i < n, popCount > 0 && i >= n - popCount && i < n));
    }
    return row;
  }

  // ---------------------------------------------------------------- rendering: party bar
  function renderParty() {
    const list = $("#party");
    list.replaceChildren();
    protagonists().forEach((id) => {
      const n = state.stars[id] || 0;
      const found = purposeOn() && n >= thresholdOf();
      const li = el("li", `member${found ? " found" : ""}${lastGain[id] > 0 ? " glow" : ""}`);
      li.appendChild(el("span", "visually-hidden",
        t("starsLabel", { name: txt(`char.${id}.name`), n, max: maxOf(id) }) +
        (found ? `. ${t("purposeFound")}` : "")));
      li.appendChild(avatar(id));
      const info = el("span", "member-info");
      info.setAttribute("aria-hidden", "true");
      info.appendChild(el("span", "member-name", txt(`char.${id}.name`)));
      info.appendChild(starRow(id, lastGain[id] || 0));
      li.appendChild(info);
      if (found) {
        const badge = el("span", "badge", "✓");
        badge.title = t("purposeFound");
        badge.setAttribute("aria-hidden", "true");
        li.appendChild(badge);
      }
      list.appendChild(li);
    });
    lastGain = {};
  }

  // ---------------------------------------------------------------- rendering: panels
  function renderPanels() {
    const sc = scene();
    const box = $("#panels");
    box.replaceChildren();
    const panels = sc.panels || [];
    box.className = `panels n-${panels.length}`;
    panels.forEach((p, i) => {
      const fig = el("figure", `panel tone-${p.tone || 1}`);
      fig.dataset.index = String(i);
      const alt = txt(`${state.scene}.${p.id}`);
      if (p.image) {
        const img = el("img", "panel-img");
        img.src = p.image;
        img.alt = alt;
        img.loading = "lazy";
        if (p.pos) img.style.objectPosition = p.pos;
        img.addEventListener("error", () => {
          img.replaceWith(placeholder(p, alt));
        });
        fig.appendChild(img);
      } else {
        fig.appendChild(placeholder(p, alt));
      }
      if (p.caption) fig.appendChild(el("figcaption", "panel-cap", txt(`${state.scene}.${p.id}.cap`)));
      box.appendChild(fig);
    });
    updateActivePanel();
  }

  function placeholder(p, alt) {
    const ph = el("div", "ph");
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", alt);
    ph.appendChild(el("span", "ph-emoji", p.emoji || "🖼️"));
    ph.appendChild(el("span", "ph-text", alt));
    ph.appendChild(el("span", "ph-tag", t("placeholderLabel")));
    return ph;
  }

  function updateActivePanel() {
    document.querySelectorAll("#panels .panel").forEach((fig) => {
      fig.classList.toggle("active", Number(fig.dataset.index) === state.activePanel);
    });
  }

  // ---------------------------------------------------------------- rendering: feed
  function feedItem(item, isNew) {
    if (item.gain) {
      const p = el("p", `gain${isNew ? " new" : ""}`);
      p.appendChild(el("span", "gain-star", "★"));
      p.appendChild(document.createTextNode(" " + t("gainStar", { name: txt(`char.${item.gain.char}.name`), n: item.gain.n })));
      if (item.gain.label) p.appendChild(el("span", "gain-label", txt(item.gain.label)));
      return p;
    }
    const isNarrator = item.s === "narrator";
    const wrap = el("div", `line ${isNarrator ? "narr" : "say"}${item.choice ? " chosen" : ""}${isNew ? " new" : ""}`);
    if (!isNarrator) {
      wrap.style.setProperty("--c", story.characters[item.s].color);
      wrap.appendChild(avatar(item.s));
    }
    const body = el("div", "bubble");
    if (!isNarrator) body.appendChild(el("span", "who", txt(`char.${item.s}.name`)));
    const p = el("p", "said");
    p.appendChild(richText(txt(item.k)));
    body.appendChild(p);
    wrap.appendChild(body);
    return wrap;
  }

  function renderFeed(full) {
    const feed = $("#feed");
    if (full) {
      feed.replaceChildren();
      rendered.feedCount = 0;
    }
    for (let i = rendered.feedCount; i < state.feed.length; i++) {
      feed.appendChild(feedItem(state.feed[i], !full));
    }
    const grew = state.feed.length > rendered.feedCount;
    rendered.feedCount = state.feed.length;
    return grew;
  }

  // ---------------------------------------------------------------- rendering: actions
  function renderActions(focus) {
    const box = $("#actions");
    box.replaceChildren();
    const sc = scene();
    let primary = null;

    if (state.queue.length) {
      primary = el("button", "btn btn-primary btn-big", `${t("next")} ▸`);
      primary.type = "button";
      primary.addEventListener("click", () => revealNext());
      box.appendChild(primary);
    } else {
      const rule = pickRule(sc);
      const choices = sc.choices || [];
      const available = choices.filter((c) => !state.picks.includes(c.id) && cond(c.requires) &&
                                              !(c.next && !isAllowed(c.next)));
      const canPickMore = available.length > 0 && state.picks.length < rule.max;
      const mustPick = state.picks.length < Math.min(rule.min, state.picks.length + available.length);

      if (canPickMore) {
        const many = rule.max > 1;
        const head = el("div", "choose-head");
        head.appendChild(el("p", "choose-prompt",
          sc.prompt ? txt(`${state.scene}.prompt`) : (many ? t("chooseMany", { max: rule.max }) : t("choosePrompt"))));
        if (many) head.appendChild(el("p", "choose-count", t("pickedCount", { n: state.picks.length, max: rule.max })));
        box.appendChild(head);

        const list = el("div", "choices");
        available.forEach((c, idx) => {
          const b = el("button", "choice");
          b.type = "button";
          b.style.setProperty("--c", story.characters[c.actor].color);
          b.appendChild(avatar(c.actor));
          const label = el("span", "choice-label");
          label.appendChild(el("span", "choice-who", txt(`char.${c.actor}.name`)));
          label.appendChild(el("span", "choice-text", txt(`${state.scene}.${c.id}`)));
          b.appendChild(label);
          b.addEventListener("click", () => pickChoice(c.id));
          list.appendChild(b);
          if (idx === 0) primary = b;
        });
        box.appendChild(list);
      }

      if (!mustPick) {
        const go = el("button", `btn ${canPickMore ? "" : "btn-primary btn-big"}`, `${t("nextScene")} ▸`);
        go.type = "button";
        go.addEventListener("click", goNext);
        box.appendChild(go);
        if (!canPickMore) primary = go;
      }
    }

    if (focus && primary) primary.focus({ preventScroll: true });
  }

  // ---------------------------------------------------------------- rendering: screens
  function renderStart() {
    $("#startSubtitle").textContent = txt("story.subtitle");
    $("#startTitle").textContent = txt("story.title");
    $("#startBlurb").textContent = txt("story.blurb");
    $("#startNote").textContent = txt("story.note");
    $("#startNote").hidden = !(("story.note" in textMap) || ("story.note" in textFallback));
    const v = story.howto || "";   // "" = classic wording, "C" = collect-the-stars wording
    [1, 2, 3].forEach((i) => { $(`#howTo${i}`).textContent = t(`howTo${v}${i}`); });
    const rules = story.startRules || [];
    $("#startRules").hidden = !rules.length;
    if (rules.length) {
      $("#startRulesTitle").textContent = txt(story.startRulesTitle);
      const ul = $("#startRulesList");
      ul.replaceChildren();
      rules.forEach((k) => { const li = el("li"); li.appendChild(richText(txt(k))); ul.appendChild(li); });
    }
    $("#btnStartLabel").textContent = state.started ? t("continueGame") : t("startGame");
  }

  function renderEnding() {
    const id = state.ending;
    $("#endingTitle").textContent = txt(`ending.${id}.title`);
    $("#endingText").textContent = txt(`ending.${id}.text`);
    $("#endingFound").textContent = purposeOn()
      ? t("foundCount", { n: foundCount(), total: protagonists().length })
      : t("starsCollected", { n: totalStars(), total: totalMax() });
    $("#endingResultsHead").textContent = t(purposeOn() ? "endingResults" : "endingResultsC");
    $("#endingResultsHead").hidden = !!story.hideResults;
    $("#endingResultsList").hidden = !!story.hideResults;

    const list = $("#endingResultsList");
    list.replaceChildren();
    if (!story.hideResults) protagonists().forEach((cid) => {
      const n = state.stars[cid] || 0;
      const band = purposeOn()
        ? (n >= thresholdOf() ? "high" : (n >= 2 ? "mid" : "low"))
        : (n >= maxOf(cid) ? "high" : (n > 0 ? "mid" : "low"));
      const li = el("li", `result ${band === "high" ? "found" : ""}`);
      li.style.setProperty("--c", story.characters[cid].color);
      li.appendChild(avatar(cid));
      const body = el("div", "result-body");
      const head = el("div", "result-head");
      head.appendChild(el("strong", "", txt(`char.${cid}.name`)));
      head.appendChild(starRow(cid, 0));
      if (band === "high" && purposeOn()) head.appendChild(el("span", "tag", t("purposeFound")));
      body.appendChild(head);
      body.appendChild(el("p", "", txt(resultKey(cid, band))));
      li.appendChild(body);
      list.appendChild(li);
    });

    const multi = story.endings.length > 1;
    $("#endingsSeenLabel").hidden = !multi;
    $("#endingsList").hidden = !multi;
    $("#endingsSeenLabel").textContent = t("endingsSeen", { n: state.endingsSeen.length, total: story.endings.length });
    const seen = $("#endingsList");
    seen.replaceChildren();
    story.endings.forEach((e) => {
      const known = state.endingsSeen.includes(e.id);
      const li = el("li", `ending-chip${known ? " known" : ""}${e.id === id ? " current" : ""}`);
      li.textContent = known ? txt(`ending.${e.id}.title`) : `🔒 ${t("endingLocked")}`;
      seen.appendChild(li);
    });
  }

  // Ending text for one character: the first matching variant in story.json "results", else the default key.
  function resultKey(cid, band) {
    const rules = story.characters[cid].results || [];
    const hit = rules.find((r) => r.band === band && cond(r.if));
    return hit ? hit.key : `char.${cid}.end_${band}`;
  }

  function showOnly(name) {
    ["Menu", "Start", "Scene", "Ending"].forEach((n) => { $(`#screen${n}`).hidden = n !== name; });
  }

  // Full redraw (language change, start-up) or incremental update after one step.
  function renderAll(full, scrollToNew) {
    $("#btnMenu").hidden = !story || Object.keys(config.stories).length < 2;
    if (!story) {                      // game menu: no story is open
      $("#partyWrap").hidden = true;
      $("#btnRestart").hidden = true;
      rendered.scene = null;
      showOnly("Menu");
      renderMenu();
      return;
    }
    const inScene = state.started && state.scene && story.scenes[state.scene];
    const inEnding = state.started && !state.scene && state.ending;

    $("#partyWrap").hidden = !(inScene || inEnding);
    $("#btnRestart").hidden = !state.started;

    if (inScene) {
      showOnly("Scene");
      const sceneChanged = rendered.scene !== state.scene;
      if (sceneChanged || full) {
        $("#sceneTitle").textContent = txt(`${state.scene}.title`);
        const note = $("#sceneNote");
        const sc = scene();
        note.hidden = !sc.note;
        if (sc.note) {
          note.replaceChildren(el("strong", "", `${t("contentNote")}: `), document.createTextNode(txt(`${state.scene}.note`)));
        }
        renderPanels();
        renderFeed(true);
        rendered.scene = state.scene;
      } else {
        updateActivePanel();
        const grew = renderFeed(false);
        if (grew && scrollToNew) {
          const last = $("#feed").lastElementChild;
          if (last) last.scrollIntoView({ block: "nearest", behavior: prefersReducedMotion() ? "auto" : "smooth" });
        }
      }
      renderParty();
      renderActions(!full);
    } else if (inEnding) {
      rendered.scene = null;
      showOnly("Ending");
      renderParty();
      renderEnding();
    } else {
      rendered.scene = null;
      showOnly("Start");
      renderStart();
    }
  }

  // ---------------------------------------------------------------- UI wiring
  function buildLanguageButtons() {
    const box = $("#langToggle");
    box.replaceChildren();
    config.uiLanguages.forEach((l) => {
      const b = el("button", "lang-btn", l.short);
      b.type = "button";
      b.lang = l.code;
      b.title = l.label;
      b.dataset.lang = l.code;
      b.addEventListener("click", () => changeUiLanguage(l.code));
      box.appendChild(b);
    });
    updateLanguageButtons();
  }
  function updateLanguageButtons() {
    document.querySelectorAll("#langToggle .lang-btn").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === prefs.ui));
    });
  }

  async function changeUiLanguage(lang) {
    if (lang === prefs.ui) return;
    try {
      await loadUiLanguage(lang);
    } catch (e) {
      showLoadError(e);
      return;
    }
    applyStaticI18n();
    updateLanguageButtons();
    closeGloss();
    renderAll(true);   // re-render dynamic content (party labels, buttons, notes)
    if ($("#dlgTeachers").open) showGuide();
  }

  function buildTextLanguageSelect(storyCfg) {
    const field = $("#fieldTextLang");
    const sel = $("#selTextLang");
    sel.replaceChildren();
    storyCfg.textLanguages.forEach((l) => {
      const o = el("option", "", l.label);
      o.value = l.code;
      sel.appendChild(o);
    });
    sel.value = prefs.text;
    field.hidden = storyCfg.textLanguages.length < 2;   // only shown when another story language exists
    sel.onchange = async () => {
      try { await loadTextLanguage(sel.value); } catch (e) { showLoadError(e); return; }
      closeGloss();
      renderAll(true);
    };
  }

  function confirmDialog(titleKey, bodyKey) {
    return new Promise((resolve) => {
      const dlg = $("#dlgConfirm");
      $("#dlgConfirmTitle").textContent = t(titleKey);
      $("#dlgConfirmBody").textContent = t(bodyKey);
      dlg.returnValue = "";
      dlg.addEventListener("close", () => resolve(dlg.returnValue === "confirm"), { once: true });
      dlg.showModal();
    });
  }

  async function askRestart() {
    if (await confirmDialog("confirmRestartTitle", "confirmRestartBody")) restartStory();
  }
  async function askClear() {
    if (await confirmDialog("confirmClearTitle", "confirmClearBody")) clearEverything();
  }

  function showLoadError(err) {
    const box = $("#loadError");
    box.hidden = false;
    box.textContent = `${t("loadError")} ${location.protocol === "file:" ? t("loadErrorFile") : ""}`;
    console.error(err);
  }

  function wire() {
    $("#btnTheme").addEventListener("click", toggleTheme);
    $("#btnSettings").addEventListener("click", () => { updateSizeButtons(); $("#dlgSettings").showModal(); });
    $("#btnRestart").addEventListener("click", askRestart);
    $("#btnMenu").addEventListener("click", showMenu);
    $("#btnTeachers").addEventListener("click", openTeacherGuide);
    $("#btnTeacherClose").addEventListener("click", () => $("#dlgTeachers").close());
    $("#btnTeacherPrint").addEventListener("click", () => window.print());
    $("#btnClearSettings").addEventListener("click", () => { $("#dlgSettings").close(); askClear(); });
    $("#btnClearEnding").addEventListener("click", askClear);
    $("#btnTryAgain").addEventListener("click", restartStory);
    $("#btnStart").addEventListener("click", () => {
      if (state.started) { renderAll(true); return; }
      startStory();
    });
    document.querySelectorAll("#sizeToggle .seg-btn").forEach((b) => {
      b.addEventListener("click", () => setSize(b.dataset.size));
    });

    // glossary: one delegated listener for every marked word
    $("#feed").addEventListener("click", (ev) => {
      const btn = ev.target.closest("button.gloss");
      if (btn) openGloss(btn);
    });
    $("#glossClose").addEventListener("click", closeGloss);
    document.addEventListener("keydown", (ev) => { if (ev.key === "Escape") closeGloss(); });
    document.addEventListener("click", (ev) => {
      const pop = $("#glossPop");
      if (!pop.hidden && !pop.contains(ev.target) && !ev.target.closest("button.gloss")) closeGloss();
    });
  }

  wire();
  boot().catch(showLoadError);
})();
