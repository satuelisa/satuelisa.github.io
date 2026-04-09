// saltise.js — standalone data and logic for saltise2026.html
// All data extracted from the LCI AI scale; no dependency on aqpc.js

// ── Scale data (EN) ───────────────────────────────────────────────────────────
const SCALE_EN = [
    { n:0, name:'No AI', fr:'No AI', color:'var(--l0)',
      def:'Task is completed entirely without AI assistance in a controlled environment.',
      obj:'Measures core skills, knowledge, and independent capability.',
      req:'Students must not use AI at any stage of this assessment.' },
    { n:1, name:'AI Planning', fr:'AI Planning', color:'var(--l1)',
      def:'AI may assist only with early brainstorming, outlining, and initial thinking.',
      obj:'Supports ideation while ensuring all outputs remain human-generated.',
      req:'The final submission must show students\' own development and refinement of ideas.' },
    { n:2, name:'AI Collaboration', fr:'AI Collaboration', color:'var(--l2)',
      def:'AI may assist with drafting, refinement, feedback, or idea generation.',
      obj:'Builds students\' ability to evaluate, adapt, and improve AI inputs.',
      req:'Students must critically revise and personalise any AI-generated content.' },
    { n:3, name:'Full AI', fr:'Full AI', color:'var(--l3)',
      def:'AI may be used extensively as directed to complete components of the task.',
      obj:'Assesses students\' ability to manage, direct, and evaluate AI systems.',
      req:'Students must demonstrate strategic direction and critical oversight of AI outputs.' },
    { n:4, name:'AI Exploration', fr:'AI Exploration', color:'var(--l4)',
      def:'AI is used creatively and innovatively; assessments may be co-designed with educators.',
      obj:'Encourages experimentation, problem-solving, and innovation in AI-enabled environments.',
      req:'Students use AI to generate novel insights, solutions, or approaches in collaboration with the instructor.' }
  ];

const ICONS_EN = {
  0: 'img/AI_0_circle.png',
  1: 'img/AI_1_circle.png',
  2: 'img/AI_2_circle.png',
  3: 'img/AI_3_circle.png',
  4: 'img/AI_4_circle.png',
};

// ── Lessons data (EN) ─────────────────────────────────────────────────────────
const LESSONS_EN = {
    issues: {
      label: 'Issues identified',
      groups: [
        { icon:'🤖', title:"Full delegation to AI without understanding", body:"The most frequently cited issue. Students submit work generated entirely by AI without reviewing, understanding, or adapting it. Symptoms: formal or generic language inconsistent with the student's usual level, inability to orally defend the submitted work, typical AI phrasing, inconsistency between written output and in-class exchanges.", programs:"Fashion Design, Fashion Marketing, Management, Hospitality, Networking, Programming" },
        { icon:'💻', title:"Inability to verify understanding in digital contexts", body:"In technical programmes where exams are conducted on computer or remotely, AI can instantly generate the expected answer. Some assessments predate the generative AI era and contain no rules about its use.", programs:"Computer Networking, Video Games, Programming, TEE-TES, Pre-university" },
        { icon:'❓', title:"Ambiguous rules and lack of explicit guidelines", body:"No clear, shared rules about what is permitted — neither at the department nor the course level. This creates inequity between students and puts instructors in a difficult position. The absence of guidelines fosters over-reliance.", programs:"Management, Video Games, Networking, Programming, Fashion Marketing" },
        { icon:'📱', title:"Physical or digital circumvention during exams", body:"Even in in-person, closed-book evaluations: phone use during bathroom breaks, memorising AI-generated text, note sheets prepared entirely by AI and copied verbatim, hidden devices.", programs:"General Education (French), Pre-university, TEE-TES (hyflex)" },
        { icon:'🎨', title:"Issues specific to creative and visual production", body:"Moodboards composed mostly of AI-generated images, unverifiable references, incoherence between visual research and final output. Free tools have significant functional limitations for professional use.", programs:"Fashion Design, Fashion Marketing" },
      ]
    },
    solutions: {
      label: 'Solutions proposed',
      groups: [
        { icon:'📋', title:"Making the process visible and traceable", body:"Assessing the learning journey rather than only the final product.", items:["Staged submissions (drafts, modules delivered progressively)","Progress journal with active reading annotations and screenshots","Coaching model with weekly validation by the instructor","Shared document so the instructor can follow progress in real time","Require sourcing of images (date, platform, prompt)"], programs:"Fashion Design, Management, Hospitality, TEE-TES, Networking" },
        { icon:'🗣️', title:"Adding a mandatory spoken component", body:"Live conversation is unanimously recognised as the best tool for verifying genuine understanding.", items:["Oral defence with targeted questions","Presentation before an external jury","Individual interview to validate answers submitted online","Spontaneous questions from the instructor during the work period","Individual time-limited video recording"], programs:"Management, Fashion Design, Hospitality, Networking, Programming, TEE-TES" },
        { icon:'🔄', title:"Integrating AI into the assessment rather than excluding it", body:"Making AI an object of examination rather than a means to cheat.", items:["Submitting the AI conversation as an exam attachment","Generating an AI output, producing your own version, and comparing","Comparing your own analysis to one generated by AI","Using AI in class under supervision to explore a topic","Requiring an AI use declaration"], programs:"Video Games, Programming, Management, English Gen Ed, Networking" },
        { icon:'✏️', title:"Redesigning the task to reduce substitutability", body:"Modifying the task itself so it is less easily completed by AI.", items:["Providing an unknown excerpt on the day of the exam","Requiring analysis applied to a specific situation rather than a general question","Anchoring the task in the student's own real project","Converting the notes sheet to keywords only, approved in advance","Using images as evaluation prompts, inaccessible to AI"], programs:"English Gen Ed, French Gen Ed, Pre-university, TEE-TES, Hospitality" },
        { icon:'📐', title:"Clarifying and harmonising rules of use", body:"Need for clear, consistent institutional guidelines explicitly communicated to students.", items:["Systematically stating the permitted AI use level in each assessment","Harmonising practices within the same department","Developing a shared rubric for evaluating authenticity","Training instructors and students in ethical, critical AI use"], programs:"Management, Fashion Marketing, Networking, Fashion Design" },
      ]
    },
    observations: {
      label: 'Cross-cutting observations',
      groups: [
        { icon:'💡', title:"Cross-disciplinary convergence", body:"The same three responses emerged independently in almost every programme: make the process visible, add an oral component, redesign the task to reduce substitutability. This convergence was not coordinated — it arose from independent reflection in each team." },
        { icon:'🔁', title:"From prohibition to scaffolding", body:"Technical teams (Video Games, Programming, Networking) explicitly moved away from blanket prohibition toward critical scaffolding. Having students submit their AI conversations as part of the exam is particularly significant." },
        { icon:'🌐', title:"Online courses structurally challenging", body:"It is technically impossible to prevent AI access during a remote computer-based exam. Proposed solutions (individual interviews, video recordings, tasks anchored in non-public content) are pertinent but teacher-time intensive." },
        { icon:'🎓', title:"Training remains a transversal issue", body:"The absence of systematic training — for instructors as well as students — is mentioned across several programmes. Instructors ask to be equipped before they can effectively scaffold AI use in their courses." },
      ]
    }
  };

// ── Viz data: per-session level distribution ──────────────────────────────────
// Aggregated from course_level + eval_levels across all courses per session
const VIZ_PROGS = [
  { key:'420.BR', name:'Networking',
    data:{1:[12,0,3,6,0],2:[5,0,2,5,0],3:[5,0,1,4,0],4:[7,0,2,6,0],5:[4,0,2,3,0],6:[5,0,3,5,0]} },
  { key:'420.BP', name:'Programming',
    data:{1:[16,2,0,0,0],2:[9,3,0,0,0],3:[12,2,2,0,0],4:[7,0,3,0,0],5:[13,0,5,0,0],6:[2,0,1,0,0]} },
  { key:'420.BX', name:'Gamedev',
    data:{1:[2,0,2,0,0],2:[0,1,0,0,0],3:[0,1,1,0,0],4:[0,0,2,1,0],5:[0,0,1,0,2],6:[0,1,0,0,0]} },
  { key:'574.CX', name:'UX/UI',
    data:{1:[0,5,12,5,4],2:[0,2,6,3,6],3:[2,2,9,4,1],4:[0,5,8,2,2],5:[0,0,3,11,0],6:[2,4,11,3,2]} },
];

const LEVEL_NAMES = ['No AI','AI Planning','AI Collaboration','Full AI','AI Exploration'];
const LEVEL_COLORS = ['#eb2d37','#cc9f11','#5b8000','#337996','#7b4fa6'];
// Text colour for labels on each level segment (dark where background is too light)
const LEVEL_TEXT   = ['#07181e','#07181e','#ffffff','#ffffff','#ffffff'];

// ── Navigation ────────────────────────────────────────────────────────────────
function sShow(id) {
  document.querySelectorAll('.s-sec').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.s-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const tab = document.getElementById('sn-' + id.replace('s-',''));
  if (tab) tab.classList.add('active');
  if (id === 's-data' && !sSvizDone) { sSvizDone = true; sRenderViz(); }
  if (id === 's-scale') sRenderScale();
  window.scrollTo({top:0, behavior:'smooth'});
}

// ── Scale section ─────────────────────────────────────────────────────────────
let sOpenScale = null;

function sRenderScale() {
  const grid = document.getElementById('s-scale-grid');
  if (!grid) return;
  grid.innerHTML = SCALE_EN.map(lv => `
    <div class="s-scale-card ${sOpenScale === lv.n ? 'open' : ''}" style="--lc:${lv.color}" onclick="sToggleScale(${lv.n})">
      <img class="s-card-icon" src="${ICONS_EN[lv.n]}" alt="Level ${lv.n}">
      <div class="s-card-name">${lv.n} · ${lv.name}</div>
      <div class="s-card-detail">
        <div class="s-card-def">${lv.def}</div>
        <div class="s-card-req">→ ${lv.req}</div>
      </div>
    </div>`).join('');
}

function sToggleScale(n) { sOpenScale = sOpenScale === n ? null : n; sRenderScale(); }

// ── Lessons section ───────────────────────────────────────────────────────────
function sRenderLessons() {
  const issCol = document.getElementById('s-issues-col');
  const solCol = document.getElementById('s-solutions-col');
  if (!issCol || !solCol) return;
  issCol.innerHTML = '<h3>Causes for concern</h3>' +
    LESSONS_EN.issues.groups.slice(0,4).map(g => `
      <div class="s-lesson-item">
        <div class="s-lesson-icon">${g.icon}</div>
        <div class="s-lesson-body"><strong>${g.title}</strong><p>${g.body}</p></div>
      </div>`).join('');
  solCol.innerHTML = '<h3>Proposed solutions</h3>' +
    LESSONS_EN.solutions.groups.slice(0,4).map(g => `
      <div class="s-lesson-item">
        <div class="s-lesson-icon">${g.icon}</div>
        <div class="s-lesson-body"><strong>${g.title}</strong><p>${g.body}</p></div>
      </div>`).join('');
}

// ── Data visualisation ────────────────────────────────────────────────────────
let sSvizDone = false;

function sRenderViz() {
  const root = document.getElementById('s-viz-root');
  if (!root) return;
  const BAR_H = 160;
  let out = '<div style="font-family:sans-serif;background:#07181e;border-radius:12px;padding:1.6rem 2rem">';
  out += '<div style="display:flex;gap:1.2rem;flex-wrap:wrap;margin-bottom:1.6rem;align-items:center">';
  LEVEL_COLORS.forEach((c,i) => {
    out += `<div style="display:flex;align-items:center;gap:.5rem;font-size:1.05rem;color:#e8f2f6">
      <div style="width:14px;height:14px;border-radius:3px;background:${c};flex-shrink:0"></div>
      <span>${i} · ${LEVEL_NAMES[i]}</span></div>`;
  });
  out += '</div>';
  VIZ_PROGS.forEach(p => {
    out += `<div style="margin-bottom:1.8rem;background:#122a34;border-radius:10px;padding:1.2rem 1.4rem">
      <div style="font-size:1.3rem;font-weight:700;color:#fff;margin-bottom:.15rem">${p.key}</div>
      <div style="font-size:1.05rem;color:#8ca8b4;margin-bottom:1rem">${p.name}</div>
      <div style="display:flex;gap:6px;align-items:flex-end">`;
    for (let s = 1; s <= 6; s++) {
      out += `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1">`;
      if (p.data[s]) {
        const counts = p.data[s];
        const total = counts.reduce((a,b)=>a+b,0);
        const segs = counts.map((c,i) => ({lv:i,c,h:total>0?Math.max(c>0?8:0,Math.round(c/total*BAR_H)):0}));
        const sumH = segs.reduce((a,s)=>a+s.h,0);
        if (sumH !== BAR_H && sumH > 0) {
          const bi = segs.reduce((mi,s,i,a)=>s.h>a[mi].h?i:mi,0);
          segs[bi].h += BAR_H - sumH;
        }
        out += `<div style="display:flex;flex-direction:column-reverse;width:100%;border-radius:6px;overflow:hidden;height:${BAR_H}px">`;
        segs.forEach(seg => {
          if (seg.h <= 0) return;
          const pct = total > 0 ? Math.round(seg.c/total*100) : 0;
          out += `<div style="background:${LEVEL_COLORS[seg.lv]};height:${seg.h}px;display:flex;align-items:center;justify-content:center" title="Level ${seg.lv}: ${seg.c} (${pct}%)">`;
          if (seg.h >= 18 && seg.c > 0) out += `<span style="font-size:.85rem;font-weight:700;color:rgba(255,255,255,.9)">${pct}%</span>`;
          out += `</div>`;
        });
        out += `</div>`;
      } else {
        out += `<div style="width:100%;height:${BAR_H}px;border-radius:6px;background:#28505a;display:flex;align-items:center;justify-content:center">
          <span style="font-size:.9rem;color:#4a7080">—</span></div>`;
      }
      out += `<div style="font-size:.95rem;color:#8ca8b4;margin-top:2px">S${s}</div></div>`;
    }
    out += `</div></div>`;
  });
  out += '</div>';
  root.innerHTML = out;
}

// ── Boot ──────────────────────────────────────────────────────────────────────
sRenderScale();
sRenderLessons();
