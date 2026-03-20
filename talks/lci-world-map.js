/**
 * lci-world-map.js
 * Interactive world map for LCI Education AI survey synthesis.
 * 
 * Usage:
 *   <div id="lci-map-root"></div>
 *   <script src="lci-world-map.js"></script>
 *   <script>LCIMap.init('lci-map-root', SURVEY_DATA);</script>
 *
 * SURVEY_DATA shape: same DATA object from lci-ai-survey-synthesis.html
 */

const LCIMap = (() => {

  /* ── Brand tokens (mirror aqpc.css variables) ─────────────────────────── */
  const T = {
    blue:      '#00587c',
    blueDark:  '#00354a',
    blueMid:   '#337996',
    blueLight: '#e0ebef',
    red:       '#eb2d37',
    cream:     '#f8f5e9',
    creamDark: '#e5e2d6',
    charcoal:  '#07181e',
    ch400:     '#576266',
    ch300:     '#6d7478',
    ch200:     '#9ca3a5',
    gold:      '#cc9f11',
    green:     '#5b8000',
    white:     '#fff',
    radius:    '12px',
    ease:      'cubic-bezier(.4,.14,.3,1)',
  };

  const STANCE_COLORS = {
    'Creative partner': T.red,
    'Accelerator':      T.gold,
    'Complementary':    T.blueMid,
  };

  /* ── Geographic pin positions (equirectangular, % of 1920×960) ──────── */
  const PINS = {
    LCV: { x: 12.97, y: 31.46 },   // Vancouver
    LAS: { x: 28.96, y: 31.98 },   // Montréal
    LCM: { x: 20.10, y: 48.85 },   // Monterrey
    LCR: { x: 23.91, y: 56.04 },   // San José (Veritas)
    BGT: { x: 27.19, y: 59.69 },   // Bogotá
    MCA: { x: 53.80, y: 47.40 },   // Casablanca
    LCH: { x: 55.10, y: 44.90 },   // Rabat
    LCB: { x: 56.15, y: 38.54 },   // Barcelona
    TUN: { x: 57.03, y: 43.44 },   // Tunis
    JKA: { x: 81.25, y: 69.69 },   // Jakarta
    LCA: { x: 85.83, y: 85.52 },   // Melbourne
  };

  /* ── CSS injected once ─────────────────────────────────────────────────── */
  const CSS = `
.lci-map-wrap {
  font-family: 'Modern Gothic', system-ui, -apple-system, sans-serif;
  font-size: 10px;
}
.lci-map-container {
  position: relative;
  width: 100%;
  border-radius: ${T.radius};
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(7,24,30,.15);
  background: ${T.charcoal};
}
.lci-map-img {
  width: 100%;
  display: block;
  aspect-ratio: 2 / 1;
  object-fit: cover;
}
.lci-pin {
  position: absolute;
  transform: translate(-50%, -100%);
  cursor: pointer;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  transition: transform .2s ${T.ease};
}
.lci-pin:hover { transform: translate(-50%, -110%) scale(1.15); z-index: 20; }
.lci-pin.active { transform: translate(-50%, -110%) scale(1.2); z-index: 30; }
.lci-pin[data-pos="below"]  { transform: translate(-50%, -50%); }
.lci-pin[data-pos="above"]  { transform: translate(-50%, -50%); }
.lci-pin[data-pos="right"]  { transform: translate(-50%, -50%); }
.lci-pin[data-pos="left"]   { transform: translate(-50%, -50%); }
.lci-pin[data-pos="below"]:hover  { transform: translate(-50%, -60%) scale(1.15); }
.lci-pin[data-pos="above"]:hover  { transform: translate(-50%, -60%) scale(1.15); }
.lci-pin[data-pos="right"]:hover  { transform: translate(-50%, -60%) scale(1.15); }
.lci-pin[data-pos="left"]:hover   { transform: translate(-50%, -60%) scale(1.15); }
.lci-pin-dot {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  border: 2.5px solid ${T.white};
  box-shadow: 0 2px 8px rgba(0,0,0,.4);
  transition: all .2s;
}
.lci-pin-label {
  background: rgba(7,24,30,.82);
  color: ${T.white};
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: .03em;
  padding: .25rem .7rem;
  border-radius: 3px;
  white-space: nowrap;
  margin-top: .3rem;
  pointer-events: none;
  backdrop-filter: blur(4px);
}

/* ── Overlay popup ── */
.lci-popup-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(7,24,30,.55);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(3px);
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s ${T.ease};
}
.lci-popup-backdrop.open {
  opacity: 1;
  pointer-events: all;
}
.lci-popup {
  background: ${T.white};
  border-radius: ${T.radius};
  max-width: 56rem;
  width: 100%;
  box-shadow: 0 24px 64px rgba(0,0,0,.35);
  overflow: hidden;
  transform: translateY(2rem) scale(.97);
  transition: transform .3s ${T.ease};
}
.lci-popup-backdrop.open .lci-popup {
  transform: translateY(0) scale(1);
}
.lci-popup-header {
  padding: 2.4rem 2.4rem 0;
  border-bottom: 1px solid ${T.creamDark};
  padding-bottom: 1.6rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;
}
.lci-popup-title {
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: -.03em;
  color: ${T.charcoal};
  line-height: 1;
}
.lci-popup-sub {
  font-size: 1.25rem;
  color: ${T.ch300};
  margin-top: .4rem;
}
.lci-popup-close {
  background: none;
  border: none;
  font-size: 2.2rem;
  color: ${T.ch200};
  cursor: pointer;
  line-height: 1;
  flex-shrink: 0;
  padding: .2rem;
}
.lci-popup-close:hover { color: ${T.charcoal}; }
.lci-popup-body {
  padding: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
}
@media(max-width: 500px) { .lci-popup-body { grid-template-columns: 1fr; } }
.lci-popup-section h4 {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: .09em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.lci-stance-bar-row {
  display: flex;
  align-items: center;
  gap: .8rem;
  margin-bottom: .6rem;
}
.lci-stance-bar-lbl {
  font-size: 1.25rem;
  color: ${T.charcoal};
  min-width: 13rem;
}
.lci-stance-bar-track {
  flex: 1;
  background: ${T.creamDark};
  border-radius: 3px;
  height: .8rem;
}
.lci-stance-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width .6s ${T.ease};
}
.lci-stance-bar-n {
  font-size: 1.1rem;
  color: ${T.ch300};
  width: 1.6rem;
  text-align: right;
  flex-shrink: 0;
}
.lci-stat-big {
  font-size: 3.2rem;
  font-weight: 700;
  letter-spacing: -.04em;
  line-height: 1;
}
.lci-stat-lbl {
  font-size: 1.2rem;
  color: ${T.ch400};
  margin-top: .3rem;
  letter-spacing: .03em;
}
.lci-b1-list {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.lci-b1-item {
  font-size: 1.3rem;
  color: ${T.ch400};
  display: flex;
  align-items: flex-start;
  gap: .6rem;
  line-height: 1.4;
}
.lci-b1-arrow {
  color: var(--popup-color, ${T.blue});
  flex-shrink: 0;
  font-style: normal;
}
.lci-popup-footer {
  background: ${T.cream};
  padding: 1.4rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: .8rem;
  border-top: 1px solid ${T.creamDark};
}
.lci-badge {
  display: inline-block;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: .35rem 1rem;
  border-radius: 2rem;
}
.lci-nav-btns {
  display: flex;
  gap: .6rem;
}
.lci-nav-btn {
  background: ${T.white};
  border: 1.5px solid ${T.creamDark};
  color: ${T.charcoal};
  font-family: inherit;
  font-size: 1.25rem;
  padding: .6rem 1.4rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s;
}
.lci-nav-btn:hover {
  background: var(--popup-color, ${T.blue});
  border-color: var(--popup-color, ${T.blue});
  color: ${T.white};
}

/* ── Global synthesis strip ── */
.lci-synthesis {
  background: ${T.charcoal};
  border-radius: 0 0 ${T.radius} ${T.radius};
  padding: 2rem 2.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 1.6rem;
}
.lci-synth-item {
  display: flex;
  flex-direction: column;
  gap: .3rem;
}
.lci-synth-val {
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -.04em;
  color: ${T.cream};
  line-height: 1;
}
.lci-synth-lbl {
  font-size: 1.1rem;
  color: rgba(248,245,233,.5);
  letter-spacing: .05em;
  text-transform: uppercase;
  line-height: 1.3;
}
.lci-synth-bar {
  width: 100%;
  height: .4rem;
  background: rgba(255,255,255,.12);
  border-radius: 2px;
  margin-top: .6rem;
}
.lci-synth-bar-fill {
  height: 100%;
  border-radius: 2px;
  background: ${T.blueMid};
  transition: width .8s ${T.ease};
}

/* ── Pulse animation for pins ── */
@keyframes lci-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(255,255,255,.5); }
  70%  { box-shadow: 0 0 0 6px rgba(255,255,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
}
.lci-pin-dot.pulse { animation: lci-pulse 2s infinite; }
`;

  /* ── Helper: inject CSS once ──────────────────────────────────────────── */
  let _cssInjected = false;
  function injectCSS() {
    if (_cssInjected) return;
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    _cssInjected = true;
  }

  /* ── Compute network-wide synthesis stats ─────────────────────────────── */
  function synthStats(data) {
    const institutions = Object.values(data);
    const totalN = institutions.reduce((s, d) => s + d.n, 0);
    const avgTools = (institutions.reduce((s, d) => s + d.avg_tools * d.n, 0) / totalN).toFixed(1);
    const hybridPct = Math.round(institutions.reduce((s, d) => s + d.hybrid_pct * d.n, 0) / totalN);
    let creativeN = 0;
    institutions.forEach(d => { creativeN += (d.stances['Creative partner'] || 0); });
    const creativePct = Math.round(creativeN / totalN * 100);
    const toolMax = Math.max(...institutions.map(d => d.avg_tools));
    const toolMin = Math.min(...institutions.map(d => d.avg_tools));
    return { totalN, avgTools, hybridPct, creativePct, toolMax, toolMin };
  }

  /* ── Build synthesis strip ─────────────────────────────────────────────── */
  function buildSynthesis(container, data) {
    const s = synthStats(data);
    const strip = document.createElement('div');
    strip.className = 'lci-synthesis';
    const items = [
      { val: Object.keys(data).length, lbl: 'institutions', pct: null, color: T.blueMid },
      { val: s.totalN,                 lbl: 'respondents',  pct: null, color: T.blueMid },
      { val: s.creativePct + '%',      lbl: 'Creative partner stance', pct: s.creativePct, color: T.red },
      { val: s.avgTools,               lbl: 'avg tools / respondent',  pct: Math.round(s.avgTools / s.toolMax * 100), color: T.gold },
      { val: s.hybridPct + '%',        lbl: 'cite hybrid-role employability', pct: s.hybridPct, color: T.green },
    ];
    strip.innerHTML = items.map(item => `
      <div class="lci-synth-item">
        <div class="lci-synth-val">${item.val}</div>
        <div class="lci-synth-lbl">${item.lbl}</div>
        ${item.pct !== null ? `<div class="lci-synth-bar"><div class="lci-synth-bar-fill" style="width:${item.pct}%;background:${item.color};"></div></div>` : ''}
      </div>`).join('');
    container.appendChild(strip);
  }

  /* ── Build popup DOM (reused, updated per institution) ─────────────────── */
  function buildPopupDOM() {
    const backdrop = document.createElement('div');
    backdrop.className = 'lci-popup-backdrop';
    backdrop.innerHTML = `
      <div class="lci-popup" role="dialog" aria-modal="true">
        <div class="lci-popup-header">
          <div>
            <div class="lci-popup-title" id="_lci-popup-title"></div>
            <div class="lci-popup-sub"   id="_lci-popup-sub"></div>
          </div>
          <button class="lci-popup-close" id="_lci-popup-close" aria-label="Close">×</button>
        </div>
        <div class="lci-popup-body">
          <div class="lci-popup-section">
            <h4 id="_lci-popup-stance-h" style="color:var(--popup-color)">AI stance</h4>
            <div id="_lci-popup-stances"></div>
          </div>
          <div class="lci-popup-section">
            <h4 style="color:var(--popup-color)">Integration depth</h4>
            <div style="margin-bottom:1.6rem;">
              <div class="lci-stat-big" id="_lci-popup-tools" style="color:var(--popup-color)"></div>
              <div class="lci-stat-lbl">avg. AI tools per respondent</div>
            </div>
            <div>
              <div class="lci-stat-big" id="_lci-popup-hybrid" style="color:var(--popup-color)"></div>
              <div class="lci-stat-lbl">cite hybrid-role employability</div>
            </div>
          </div>
          <div class="lci-popup-section" style="grid-column:1/-1">
            <h4 style="color:var(--popup-color)">Where AI is applied</h4>
            <div class="lci-b1-list" id="_lci-popup-b1"></div>
          </div>
        </div>
        <div class="lci-popup-footer">
          <span class="lci-badge" id="_lci-popup-badge"></span>
          <div class="lci-nav-btns">
            <button class="lci-nav-btn" id="_lci-popup-prev">← Prev</button>
            <button class="lci-nav-btn" id="_lci-popup-next">Next →</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(backdrop);
    return backdrop;
  }

  /* ── Main init ─────────────────────────────────────────────────────────── */
  function init(rootId, data) {
    injectCSS();

    const root = document.getElementById(rootId);
    if (!root) { console.error('LCIMap: root element not found:', rootId); return; }
    root.className = 'lci-map-wrap';

    const MAP_URL = 'https://dam.lcieducation.com/LCI-Education/World-Map/WFP207900_Map_Monde/Links/LCI_MAPPEMONDE_WFP207900_MHR_RGB.psd?vh=d72ce1&w=1920&q=80&aspect_ratio=2%3A1';
    const codes = Object.keys(data).filter(c => PINS[c]);

    /* Map container */
    const mapContainer = document.createElement('div');
    mapContainer.className = 'lci-map-container';

    const img = document.createElement('img');
    img.className = 'lci-map-img';
    img.src = MAP_URL;
    img.alt = 'LCI Education world map';
    img.draggable = false;
    mapContainer.appendChild(img);

    /* Pins */
    codes.forEach(code => {
      const d = data[code];
      const pin = PINS[code];
      const color = d.color || T.blue;
      const el = document.createElement('div');
      el.className = 'lci-pin';
      el.style.left  = pin.x + '%';
      el.style.top   = pin.y + '%';
      el.dataset.code = code;
      el.setAttribute('aria-label', d.label);
      const CITY_NAMES = {
          TUN:'Tunis', LAS:'Montréal', LCH:'Rabat', MCA:'Casablanca',
          LCB:'Barcelona', BGT:'Bogotá', JKA:'Jakarta', LCV:'Vancouver',
          LCM:'Monterrey', LCR:'San José', LCA:'Melbourne'
      };
      const LABEL_POS = {
          LAS:'right', LCM:'right',
          LCR:'left',  MCA:'below', JKA:'left',
          LCB:'above', LCA:'above',
          TUN:'right',
      };
      const cityName = CITY_NAMES[code] || d.label.replace('LaSalle ','').replace('Collège ','').replace('LCI ','');
      const pos = LABEL_POS[code] || 'below';
      const dot = '<div class="lci-pin-dot pulse" style="background:' + color + ';"></div>';
      const lbl = '<div class="lci-pin-label">' + cityName + '</div>';
      if (pos === 'below') {
        el.style.flexDirection = 'column';
        el.style.alignItems = 'center';
        el.innerHTML = dot + lbl;
        el.dataset.pos = pos;
      } else if (pos === 'above') {
        el.style.flexDirection = 'column-reverse';
        el.style.alignItems = 'center';
        el.innerHTML = dot + lbl;
        el.dataset.pos = pos;
      } else if (pos === 'right') {
        el.style.flexDirection = 'row';
        el.style.alignItems = 'center';
        el.style.gap = '.4rem';
        el.innerHTML = dot + lbl;
        el.dataset.pos = pos;
      } else if (pos === 'left') {
        el.style.flexDirection = 'row-reverse';
        el.style.alignItems = 'center';
        el.style.gap = '.4rem';
        el.innerHTML = dot + lbl;
        el.dataset.pos = pos;
      }
      el.addEventListener('click', (e) => { e.stopPropagation(); openPopup(code); });
      mapContainer.appendChild(el);
    });

    root.appendChild(mapContainer);
    buildSynthesis(root, data);

    /* Popup */
    const backdrop = buildPopupDOM();
    let currentCode = null;

    function openPopup(code) {
      const d = data[code];
      const color = d.color || T.blue;
      currentCode = code;

      backdrop.querySelector('.lci-popup').style.setProperty('--popup-color', color);
      document.getElementById('_lci-popup-title').textContent = d.label;
      document.getElementById('_lci-popup-sub').textContent   = `${d.n} respondent${d.n !== 1 ? 's' : ''}`;
      document.getElementById('_lci-popup-tools').textContent = d.avg_tools;
      document.getElementById('_lci-popup-hybrid').textContent = d.hybrid_pct + '%';

      /* Stance bars */
      const total = Object.values(d.stances).reduce((a, b) => a + b, 0);
      document.getElementById('_lci-popup-stances').innerHTML = Object.entries(d.stances).map(([s, n]) => `
        <div class="lci-stance-bar-row">
          <div class="lci-stance-bar-lbl">${s}</div>
          <div class="lci-stance-bar-track">
            <div class="lci-stance-bar-fill" style="width:${Math.round(n/total*100)}%;background:${STANCE_COLORS[s]||color}"></div>
          </div>
          <div class="lci-stance-bar-n">${n}</div>
        </div>`).join('');

      /* B1 */
      document.getElementById('_lci-popup-b1').innerHTML = d.top_b1.map(b =>
        `<div class="lci-b1-item"><i class="lci-b1-arrow">→</i>${b}</div>`).join('');

      /* Badge */
      const badgeBg    = d.dominant === 'Creative partner' ? '#fdecea' : d.dominant === 'Accelerator' ? '#fff8e6' : T.blueLight;
      const badgeColor = d.dominant === 'Creative partner' ? T.red     : d.dominant === 'Accelerator' ? T.gold    : T.blue;
      const badge = document.getElementById('_lci-popup-badge');
      badge.textContent = d.dominant;
      badge.style.background = badgeBg;
      badge.style.color      = badgeColor;

      /* Highlight pin */
      document.querySelectorAll('.lci-pin').forEach(p => p.classList.toggle('active', p.dataset.code === code));

      backdrop.classList.add('open');
    }

    function closePopup() {
      backdrop.classList.remove('open');
      document.querySelectorAll('.lci-pin').forEach(p => p.classList.remove('active'));
      currentCode = null;
    }

    function navigate(dir) {
      const idx = codes.indexOf(currentCode);
      const next = (idx + dir + codes.length) % codes.length;
      openPopup(codes[next]);
    }

    document.getElementById('_lci-popup-close').addEventListener('click', closePopup);
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closePopup(); });
    document.getElementById('_lci-popup-prev').addEventListener('click', () => navigate(-1));
    document.getElementById('_lci-popup-next').addEventListener('click', () => navigate(+1));
    document.addEventListener('keydown', e => {
      if (!backdrop.classList.contains('open')) return;
      if (e.key === 'Escape')     closePopup();
      if (e.key === 'ArrowRight') navigate(+1);
      if (e.key === 'ArrowLeft')  navigate(-1);
    });
  }

  return { init };
})();
