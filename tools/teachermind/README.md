# Tulevaisuuden tähdet — story game demo

Interactive story for young learners of Finnish. The story text is Finnish; the interface is available in English, Spanish, French, Finnish and Swedish. No dependencies, no build step, no backend.

## Run

- **GitHub Pages:** push the folder, enable Pages for the branch. Done.
- **Locally:** `python3 -m http.server` in this folder, then open http://localhost:8000 (opening `index.html` directly does not work because browsers block `fetch()` on `file://`).
- **Check your edits:** `python3 tools/validate.py` (missing text keys, missing glossary terms, broken links between scenes). Add `--simulate` to see how many star outcomes are reachable and whether everyone can find a direction.

## Files

```
index.html  css/style.css  js/game.js
images/panels/      comic panels (see below)
images/characters/  optional portraits
data/config.json                              languages, star scale, threshold, which story
data/i18n/<lang>.json                         interface strings (en, es, fr, fi, sv)
data/glossary/glossary.<lang>.json            simple explanations of marked words, in the UI language
data/stories/ojanpenkka/story.json            structure: characters, scenes, choices, effects, endings
data/stories/ojanpenkka/text.fi.json          all dialogue and captions
tools/validate.py
```

## Game rules (in `data/config.json`)

- Each of the 5 protagonists has 0–5 stars (`maxStars`).
- A character has "found a direction" at `purposeThreshold` stars (currently 4).
- Endings are chosen from how many characters found a direction (`endings` in `story.json`, first match wins).
- Progress is saved in the browser (localStorage). "Restart" keeps the list of endings found; "Clear saved progress" erases everything.

## Story structure (three threads)

`s00_intro` → `s10_hub` (the mall map). From the hub the player picks a thread: **A** (ditch, `s01`–`s07`), **B** (empty shop unit, `b01`–`b07`) or **C** (café, `c01`–`c05`). Each thread ends with `setFlags: ["doneX"]` and returns to the hub. Then `s90_evening` (shared finale) and the ending.

- By default the group has time for **two** threads per run. To allow all three, remove the `{"not": {"count": {"flags": [...], "gte": 2}}}` conditions on the three hub choices in `s10_hub` and the `gte 2` in the hub lines.
- `count` condition: `{"count": {"flags": ["doneA","doneB","doneC"], "gte": 2}}` — how many of the listed flags are set.
- `setFlags` on a scene sets flags when the scene is entered.
- Per-character `results` in `story.json` choose a variant of the ending text depending on flags (first match wins; falls back to `char.<id>.end_<band>`).
- `story.json` has `version`; changing it invalidates old saved progress.
- Balance check: `python3 tools/validate.py --simulate --sample 20000` (random playthroughs; plain `--simulate` is exact but slow).

## Teacher guide

The "For teachers" button in the header opens a printable guide. Its content is in `data/teacher/teacher.<lang>.json` (one file per interface language; path set by `teacherPath` in `config.json`). Format: `title`, `intro`, and `sections` of `{h, blocks}` where a block is `{h}` (sub-heading), `{ul: [...]}` or a paragraph string. `tools/validate.py` checks that all languages have the same structure. The guide was drafted with AI help: check the Finnish-education facts against your local system.

## Editing the story

**Text** lives only in `text.fi.json`. Keys follow the structure of `story.json`:

| What | Key |
|---|---|
| Scene title / content note / choice prompt | `<scene>.title` / `<scene>.note` / `<scene>.prompt` |
| Panel description (alt text, also the brief for the illustrator) | `<scene>.<panelId>` |
| Panel caption (only if `"caption": true`) | `<scene>.<panelId>.cap` |
| Line of dialogue | `<scene>.<lineId>` |
| Text of a choice (said by the actor) | `<scene>.<choiceId>` |
| Reaction after a choice | `<scene>.<choiceId>.<reactionId>` |
| Character name / result texts | `char.<id>.name`, `char.<id>.end_high`, `.end_mid`, `.end_low` |
| Ending | `ending.<id>.title`, `ending.<id>.text` |

**Difficult words:** write `[[key|surface form]]` in the text, e.g. `[[pantti|pantin]]`, or `[[VPK]]` when the form is the same. Then add `key` to every `glossary.<lang>.json`. Tapping the word shows the explanation in the interface language.

**Structure (`story.json`):**

- A scene has 1–6 `panels`, `lines` (shown one by one), `choices`, a `pick` rule (`min`/`max` choices the player may make, so several characters can react in the same scene) and `next` (a scene id, `"@ending"`, or a list of `{ "if": …, "to": … }`).
- A choice has an `actor`, optional `effects` (`{ "char": "amira", "stars": 1 }`), `flags` it sets, `requires` (a condition), a `reaction` and, when `pick.max` is 1, its own `next`.
- Conditions: `{"flag": "x"}`, `{"stars": {"char": "amira", "gte": 2}}`, `{"found": {"gte": 3}}`, `{"all": […]}`, `{"any": […]}`, `{"not": …}`. They work on lines, choices and `next`.

**Another story language** (e.g. English dialogue for other students): add `text.en.json` with the same keys and list it under `textLanguages` in `data/config.json`. A language selector then appears in Settings. Missing keys fall back to Finnish.

**Another interface language:** add `data/i18n/xx.json` and `data/glossary/glossary.xx.json`, then add it to `uiLanguages` in `config.json`.

## Illustrations

Until a panel has an image, the game shows a placeholder with the panel's description. To use an illustration, put the file in `images/panels/` and set `"image": "images/panels/s01_p1.png"` on that panel in `story.json`. Suggested naming: `<scene>_<panelId>.png`, about 1200 × 900 px (4:3); wide panels (the first panel of 1- and 3-panel scenes) look best at 16:6. Portraits go in `images/characters/` (square) and are set with `"portrait"` on the character.

## Review needed

The Finnish dialogue, the career facts (e.g. how one becomes a rescue worker) and the Swedish, Spanish and French interface strings and glossary definitions were drafted by an AI assistant and should be read by native speakers and by the course teachers.
