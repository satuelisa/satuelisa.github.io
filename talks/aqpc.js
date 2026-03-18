const ICONS_CIRCLE = {
  0: "img/AI_0_circle.png",
  1: "img/AI_1_circle.png",
  2: "img/AI_2_circle.png",
  3: "img/AI_3_circle.png",
  4: "img/AI_4_circle.png",
};

const ICONS = {
  en: {
    0: "img/AI_0_En.png",
    1: "img/AI_1_En.png",
    2: "img/AI_2_En.png",
    3: "img/AI_3_En.png",
    4: "img/AI_4_En.png",
  },
  fr: {
    0: "img/AI_0_Fr.png",
    1: "img/AI_1_Fr.png",
    2: "img/AI_2_Fr.png",
    3: "img/AI_3_Fr.png",
    4: "img/AI_4_Fr.png",
  },
  es: {
    0: "img/AI_0_Sp.png",
    1: "img/AI_1_Sp.png",
    2: "img/AI_2_Sp.png",
    3: "img/AI_3_Sp.png",
    4: "img/AI_4_Sp.png",
  },
};

const SCALE = {
  fr: [
    { n:0, name:'No AI', fr:'IA interdite', color:'var(--l0)',
      def:"La tâche est complétée sans l'assistance de l'IA dans un environnement contrôlé.",
      obj:"Mesure les compétences essentielles, les connaissances acquises ainsi que le degré d'autonomie des étudiant.e.s.",
      req:"Les étudiant.e.s ne peuvent pas utiliser l'IA dans l'ensemble de ce travail." },
    { n:1, name:'AI Planning', fr:'Planification IA', color:'var(--l1)',
      def:"L'IA peut aider uniquement aux phases initiales d'un travail, telles qu'un remue-méninges et la création d'un plan.",
      obj:"L'usage de l'IA est limité à une aide à la génération d'idées ou la planification du travail. Le produit final reste d'origine humaine.",
      req:"Le travail final des étudiant.e.s doit présenter une organisation et un développement personnel des idées générées par l'IA." },
    { n:2, name:'AI Collaboration', fr:'Collaboration IA', color:'var(--l2)',
      def:"L'IA peut aider à la rédaction initiale, à l'amélioration du travail, à la rétroaction ou à la génération d'idées.",
      obj:"Développe la capacité des étudiant.e.s à évaluer, adapter et améliorer les contributions de l'IA.",
      req:"Le travail final des étudiant.e.s doit présenter un développement critique, personnel et amélioré des idées générées par l'IA." },
    { n:3, name:'Full AI', fr:'IA libre', color:'var(--l3)',
      def:"L'IA peut être utilisée largement, selon les directives transmises, pour réaliser des parties de la tâche.",
      obj:"Évalue la capacité des étudiant.e.s à gérer, diriger et évaluer les contributions de l'IA.",
      req:"Le travail final des étudiant.e.s doit présenter une utilisation critique et stratégique des résultats produits par l'IA." },
    { n:4, name:'AI Exploration', fr:'Exploration IA', color:'var(--l4)',
      def:"L'IA est utilisée de manière créative et innovante ; les évaluations peuvent être conçues de pair avec les enseignants.",
      obj:"Encourage l'expérimentation, la résolution de problèmes et l'innovation dans des environnements intégrant l'IA.",
      req:"Le travail des étudiant.e.s doit présenter une utilisation de l'IA visant à générer de nouvelles idées, des solutions ou approches innovantes, en collaboration avec l'enseignant.e." }
  ],
  es: [
    { n:0, name:'No AI', fr:'IA no permitida', color:'var(--l0)',
      def:'La tarea se ha realizado íntegramente sin asistencia de IA en un entorno controlado.',
      obj:'Evalúa las competencias fundamentales, los conocimientos y la capacidad de desempeño autónomo.',
      req:'Los estudiantes no deben utilizar la IA en ninguna etapa de esta evaluación.' },
    { n:1, name:'AI Planning', fr:'Planificación IA', color:'var(--l1)',
      def:'La IA podrá utilizarse exclusivamente para las fases iniciales de lluvia de ideas, estructuración y conceptualización preliminar.',
      obj:'Respalda la ideación asegurando que todos los resultados finales sean de autoría exclusivamente humana.',
      req:'El trabajo presentado debe reflejar el desarrollo y la optimización de ideas llevados a cabo, de manera exclusiva y autónoma, por los estudiantes.' },
    { n:2, name:'AI Collaboration', fr:'Colaboración IA', color:'var(--l2)',
      def:'La IA puede apoyar la creación de borradores, pulir el contenido, retroalimentar o generar ideas.',
      obj:'Potencia la competencia del alumnado para la evaluación, adaptación y perfeccionamiento de las entradas de inteligencia artificial.',
      req:'Los estudiantes deben revisar críticamente y personalizar cualquier contenido generado por inteligencia artificial.' },
    { n:3, name:'Full AI', fr:'IA permitida', color:'var(--l3)',
      def:'Se permite el uso exhaustivo de la IA, siguiendo las directrices establecidas, para completar los diversos componentes de la tarea.',
      obj:'Evalúa la habilidad de los estudiantes para gestionar, dirigir y evaluar sistemas de IA.',
      req:'Los estudiantes deben demostrar dirección estratégica y supervisión crítica de los resultados de la IA.' },
    { n:4, name:'AI Exploration', fr:'Exploración IA', color:'var(--l4)',
      def:'La IA se emplea de forma creativa e innovadora; las evaluaciones pueden ser co-diseñadas con el personal docente.',
      obj:'Promueve la experimentación, resolución de problemas e innovación en presencia de la IA.',
      req:'Los estudiantes utilizan la IA para generar perspectivas, soluciones o enfoques novedosos en colaboración con el/la docente.' }
  ],
  en: [
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
  ]
};

const DISCIPLINES = {
  fr: [
    { id:'math',   icon:'📐', label:'Mathématiques' },
    { id:'lang',   icon:'🗣️', label:'Langue' },
    { id:'design', icon:'🎨', label:'Design visuel' },
    { id:'code',   icon:'💻', label:'Programmation' },
    { id:'ethics', icon:'⚖️', label:'Éthique de l\'innovation' }
  ],
  es: [
    { id:'math',   icon:'📐', label:'Matemáticas' },
    { id:'lang',   icon:'🗣️', label:'Idioma' },
    { id:'design', icon:'🎨', label:'Diseño visual' },
    { id:'code',   icon:'💻', label:'Programación' },
    { id:'ethics', icon:'⚖️', label:'Ética de la innovación' }
  ],
  en: [
    { id:'math',   icon:'📐', label:'Mathematics' },
    { id:'lang',   icon:'🗣️', label:'Language' },
    { id:'design', icon:'🎨', label:'Visual Design' },
    { id:'code',   icon:'💻', label:'Programming' },
    { id:'ethics', icon:'⚖️', label:'Innovation Ethics' }
  ]
};

const SORT_ITEMS = {
  fr: {
    math: [
      { id:'m1', text:'Examen écrit en salle : résoudre 5 problèmes de calcul intégral sans outil numérique', ans:0 },
      { id:'m2', text:'Démonstration de preuve : utiliser l\'IA pour explorer des exemples, puis rédiger la preuve complète soi-même', ans:1 },
      { id:'m3', text:'Rapport d\'analyse statistique : l\'IA génère un brouillon d\'interprétation, l\'étudiant.e le révise et valide', ans:2 },
      { id:'m4', text:'Modélisation mathématique : l\'IA simule plusieurs scénarios, l\'étudiant.e sélectionne et justifie la meilleure approche', ans:3 },
      { id:'m5', text:'Projet de recherche : co-concevoir avec l\'enseignant.e un protocole d\'exploration assisté par IA', ans:4 },
      { id:'m6', text:'Test de mi-session chronométré : sans calculatrice ni IA', ans:0 },
    ],
    lang: [
      { id:'l1', text:'Dictée évaluative en classe : production orthographique entièrement personnelle', ans:0 },
      { id:'l2', text:'Préparation d\'un exposé oral : utiliser l\'IA pour générer un plan, puis développer le contenu sans aide', ans:1 },
      { id:'l3', text:'Lettre de motivation : l\'étudiant.e rédige, puis utilise l\'IA pour corriger la grammaire et améliorer le registre', ans:2 },
      { id:'l4', text:'Traduction commentée : l\'IA propose une traduction, l\'étudiant.e l\'analyse et la reconfigure professionnellement', ans:3 },
      { id:'l5', text:'Projet de création littéraire multimodale : explorer des formes d\'écriture co-générées avec l\'IA', ans:4 },
      { id:'l6', text:'Analyse de texte littéraire : réflexion personnelle sur les thèmes et le style, sans assistance IA', ans:0 },
    ],
    design: [
      { id:'d1', text:'Esquisse à la main en classe : concevoir une identité visuelle sans outils numériques', ans:0 },
      { id:'d2', text:'Moodboard : utiliser l\'IA pour générer des références visuelles, puis construire soi-même la planche', ans:1 },
      { id:'d3', text:'Affiche promotionnelle : l\'IA génère un concept de base, l\'étudiant.e retravaille la typographie, la mise en page et les couleurs', ans:2 },
      { id:'d4', text:'Campagne de marque : l\'IA génère les visuels principaux, l\'étudiant.e dirige, sélectionne et justifie chaque choix créatif', ans:3 },
      { id:'d5', text:'Projet de design spéculatif : co-concevoir le brief et les critères d\'évaluation avec l\'enseignant.e en utilisant l\'IA', ans:4 },
      { id:'d6', text:'Critique de design : analyser une œuvre existante et développer un point de vue critique personnel', ans:0 },
    ],
    code: [
      { id:'c1', text:'Examen de programmation en salle fermée : écrire un algorithme sans IDE ni IA', ans:0 },
      { id:'c2', text:'Conception d\'algorithme : utiliser l\'IA pour explorer des approches, puis coder la solution soi-même', ans:1 },
      { id:'c3', text:'Projet de développement web : l\'IA génère des composants, l\'étudiant.e les révise, optimise et intègre', ans:2 },
      { id:'c4', text:'Application complète : l\'IA génère la majorité du code, l\'étudiant.e supervise, teste et documente', ans:3 },
      { id:'c5', text:'Hackathon pédagogique : co-définir le problème et les critères d\'évaluation avec l\'IA et l\'enseignant.e', ans:4 },
      { id:'c6', text:'Débogage en temps limité : corriger un programme sans aide extérieure', ans:0 },
    ],
    ethics: [
      { id:'e1', text:'Examen réflexif personnel : rédiger sans IA sa position sur un enjeu éthique', ans:0 },
      { id:'e2', text:'Cartographie d\'un enjeu : utiliser l\'IA pour identifier des parties prenantes, puis construire soi-même l\'analyse', ans:1 },
      { id:'e3', text:'Note de synthèse : l\'IA rédige un premier brouillon, l\'étudiant.e révise, repositionne et signe les arguments', ans:2 },
      { id:'e4', text:'Rapport d\'impact : l\'IA génère scénarios et données, l\'étudiant.e dirige le cadrage et valide les conclusions', ans:3 },
      { id:'e5', text:'Projet de politique IA : co-concevoir avec l\'enseignant.e un cadre d\'évaluation axé sur l\'expérimentation', ans:4 },
      { id:'e6', text:'Analyse de cas réel : développer un jugement éthique documenté sans support IA', ans:0 },
    ]
  },
  es: {
    math: [
      { id:'m1', text:'Examen escrito en clase: resolver 5 problemas de cálculo sin herramientas digitales', ans:0 },
      { id:'m2', text:'Demostración de prueba: usar la IA para explorar ejemplos, luego redactar la prueba de forma autónoma', ans:1 },
      { id:'m3', text:'Informe de análisis estadístico: la IA genera un borrador de interpretación, el/la estudiante lo revisa y valida', ans:2 },
      { id:'m4', text:'Modelización matemática: la IA simula escenarios, el/la estudiante selecciona y justifica el mejor enfoque', ans:3 },
      { id:'m5', text:'Proyecto de investigación: co-diseñar un protocolo de exploración asistido por IA con el/la docente', ans:4 },
      { id:'m6', text:'Prueba parcial cronometrada: sin calculadora ni IA', ans:0 },
    ],
    lang: [
      { id:'l1', text:'Dictado evaluativo en clase: producción ortográfica completamente personal', ans:0 },
      { id:'l2', text:'Preparación de exposición oral: usar la IA para generar un plan, luego desarrollar el contenido de forma autónoma', ans:1 },
      { id:'l3', text:'Carta de motivación: el/la estudiante redacta, luego usa la IA para corregir gramática y mejorar el registro', ans:2 },
      { id:'l4', text:'Traducción comentada: la IA propone una traducción, el/la estudiante la analiza y reconfigura profesionalmente', ans:3 },
      { id:'l5', text:'Proyecto de creación literaria multimodal: explorar formas de escritura co-generadas con la IA', ans:4 },
      { id:'l6', text:'Análisis de texto literario: reflexión personal sobre temas y estilo, sin asistencia de IA', ans:0 },
    ],
    design: [
      { id:'d1', text:'Boceto a mano en clase: diseñar una identidad visual sin herramientas digitales', ans:0 },
      { id:'d2', text:'Moodboard: usar la IA para encontrar referencias visuales, luego construir el tablero de forma autónoma', ans:1 },
      { id:'d3', text:'Cartel promocional: la IA genera un concepto base, el/la estudiante reelabora tipografía, composición y colores', ans:2 },
      { id:'d4', text:'Campaña de marca: la IA genera los visuales principales, el/la estudiante dirige, selecciona y justifica cada decisión creativa', ans:3 },
      { id:'d5', text:'Proyecto de diseño especulativo: co-diseñar el brief y los criterios de evaluación con el/la docente usando IA', ans:4 },
      { id:'d6', text:'Crítica de diseño: analizar una obra existente y desarrollar un punto de vista crítico personal', ans:0 },
    ],
    code: [
      { id:'c1', text:'Examen de programación en aula cerrada: escribir un algoritmo sin IDE ni IA', ans:0 },
      { id:'c2', text:'Diseño de algoritmo: usar la IA para explorar enfoques, luego codificar la solución de forma autónoma', ans:1 },
      { id:'c3', text:'Proyecto de desarrollo web: la IA genera componentes, el/la estudiante los revisa, optimiza e integra', ans:2 },
      { id:'c4', text:'Aplicación completa: la IA genera la mayor parte del código, el/la estudiante supervisa, prueba y documenta', ans:3 },
      { id:'c5', text:'Hackathon pedagógico: co-definir el problema y los criterios de evaluación con la IA y el/la docente', ans:4 },
      { id:'c6', text:'Depuración cronometrada: corregir un programa sin ayuda externa', ans:0 },
    ],
    ethics: [
      { id:'e1', text:'Examen reflexivo personal: redactar sin IA su posición sobre un dilema ético', ans:0 },
      { id:'e2', text:'Cartografía de un problema: usar la IA para identificar partes interesadas, luego construir el análisis de forma autónoma', ans:1 },
      { id:'e3', text:'Nota de síntesis: la IA redacta un primer borrador, el/la estudiante reposiciona los argumentos y los firma', ans:2 },
      { id:'e4', text:'Informe de impacto: la IA genera escenarios y datos, el/la estudiante dirige el enfoque y valida las conclusiones', ans:3 },
      { id:'e5', text:'Proyecto de política IA: co-diseñar con el/la docente un marco de evaluación orientado a la experimentación', ans:4 },
      { id:'e6', text:'Análisis de caso real: desarrollar un juicio ético documentado sin apoyo de IA', ans:0 },
    ]
  },
  en: {
    math: [
      { id:'m1', text:'Written in-class exam: solve 5 calculus problems without digital tools', ans:0 },
      { id:'m2', text:'Proof demonstration: use AI to explore examples, then write the full proof independently', ans:1 },
      { id:'m3', text:'Statistical analysis report: AI generates an interpretation draft, student reviews and validates it', ans:2 },
      { id:'m4', text:'Mathematical modelling: AI simulates scenarios, student selects and justifies the best approach', ans:3 },
      { id:'m5', text:'Research project: co-design an AI-assisted exploration protocol with the instructor', ans:4 },
      { id:'m6', text:'Timed mid-term test: no calculator or AI allowed', ans:0 },
    ],
    lang: [
      { id:'l1', text:'In-class dictation: entirely personal spelling production', ans:0 },
      { id:'l2', text:'Oral presentation prep: use AI to generate an outline, then develop all content without further help', ans:1 },
      { id:'l3', text:'Cover letter: student writes it, then uses AI to correct grammar and improve register', ans:2 },
      { id:'l4', text:'Annotated translation: AI proposes a translation, student analyses and reworks it professionally', ans:3 },
      { id:'l5', text:'Multimodal creative writing project: explore co-generated literary forms with AI', ans:4 },
      { id:'l6', text:'Literary analysis: personal reflection on themes and style, no AI assistance', ans:0 },
    ],
    design: [
      { id:'d1', text:'In-class hand sketch: design a visual identity without digital tools', ans:0 },
      { id:'d2', text:'Moodboard: use AI to find visual references, then build the board independently', ans:1 },
      { id:'d3', text:'Promotional poster: AI generates a base concept, student reworks typography, layout and colours', ans:2 },
      { id:'d4', text:'Brand campaign: AI generates main visuals, student directs, selects and justifies each creative choice', ans:3 },
      { id:'d5', text:'Speculative design project: co-design brief and assessment criteria with instructor using AI', ans:4 },
      { id:'d6', text:'Design critique: analyse an existing work and develop a personal critical perspective', ans:0 },
    ],
    code: [
      { id:'c1', text:'Closed-book programming exam: write an algorithm without IDE or AI', ans:0 },
      { id:'c2', text:'Algorithm design: use AI to explore approaches, then code the solution independently', ans:1 },
      { id:'c3', text:'Web development project: AI generates components, student reviews, optimises and integrates them', ans:2 },
      { id:'c4', text:'Full application: AI generates most of the code, student supervises, tests and documents', ans:3 },
      { id:'c5', text:'Pedagogical hackathon: co-define the problem and assessment criteria with AI and instructor', ans:4 },
      { id:'c6', text:'Timed debugging: fix a broken program without any outside help', ans:0 },
    ],
    ethics: [
      { id:'e1', text:'Personal reflective exam: write your position on an ethical issue without AI', ans:0 },
      { id:'e2', text:'Issue mapping: use AI to identify stakeholders, then build the analysis independently', ans:1 },
      { id:'e3', text:'Policy brief: AI writes a first draft, student revises, repositions and owns the arguments', ans:2 },
      { id:'e4', text:'Impact report: AI generates scenarios and data, student directs the framing and validates conclusions', ans:3 },
      { id:'e5', text:'AI policy project: co-design an experimentation-focused evaluation framework with the instructor', ans:4 },
      { id:'e6', text:'Real case analysis: develop a documented ethical judgement without AI support', ans:0 },
    ]
  }
};

const SCENARIOS = {
  fr: {
    math: {
      meta:'Mathématiques · Calcul différentiel', title:'La résolution de problèmes appliqués',
      context:'Vous enseignez le calcul différentiel. Habituellement, vous donnez 10 problèmes à résoudre seul. Vous voulez maintenir l\'objectif d\'apprentissage tout en intégrant l\'IA.',
      question:'Quel niveau correspond à l\'énoncé suivant ?',
      task:'"Utilisez l\'IA pour vérifier votre approche sur deux des dix problèmes, en documentant les échanges avec l\'outil. Vous devrez rédiger vous-même toutes les solutions finales."',
      ans:1,
      fb:{ ok:'Correct. L\'IA n\'est utilisée que pour confirmer une approche (idéation / planification) — le produit final reste entièrement humain. C\'est bien le niveau 1 (Planification IA).', ko:'Pas tout à fait. L\'IA sert ici à valider une direction de travail, pas à rédiger la solution. Le produit final reste entièrement humain. Cela correspond au niveau 1 (Planification IA).' }
    },
    lang: {
      meta:'Langue · Rédaction avancée', title:'La lettre de demande formelle',
      context:'Votre cours de rédaction avancée inclut une lettre de demande formelle. Vous voulez intégrer l\'IA pour préparer les étudiant.e.s au monde professionnel.',
      question:'Quel niveau correspond à l\'énoncé suivant ?',
      task:'"Rédigez votre lettre en entier. Ensuite, soumettez-la à un outil IA pour obtenir des suggestions de ton, de registre et de clarté. Intégrez les ajustements que vous jugez pertinents et justifiez vos choix."',
      ans:2,
      fb:{ ok:'Exact. L\'étudiant.e crée d\'abord, puis utilise l\'IA pour améliorer. L\'IA n\'écrit pas — elle révise. C\'est le niveau 2 (Collaboration IA).', ko:'Pas exactement. L\'étudiant.e rédige en premier, l\'IA n\'intervient qu\'en révision. Il faut que l\'étudiant.e valide les suggestions. C\'est le niveau 2 (Collaboration IA).' }
    },
    design: {
      meta:'Design visuel · Identité de marque', title:'La campagne visuelle complète',
      context:'Votre cours de design de marque demande une campagne complète (logo, palette, typographie, affiche). Vous décidez d\'intégrer les outils d\'IA génératifs.',
      question:'Quel niveau correspond à l\'énoncé suivant ?',
      task:'"Utilisez Firefly, Midjourney ou un outil équivalent pour générer les visuels de votre campagne. Présentez votre processus de direction artistique : comment avez-vous dirigé, sélectionné, modifié et assemblé les productions de l\'IA ?"',
      ans:3,
      fb:{ ok:'Parfait. L\'IA génère les visuels centraux, mais l\'étudiant.e doit démontrer sa maîtrise de la direction artistique. C\'est le niveau 3 (IA libre).', ko:'Pas tout à fait. L\'IA est ici utilisée de façon extensive pour produire les éléments centraux de la tâche. L\'étudiant.e supervise, dirige et évalue — c\'est le niveau 3 (IA libre).' }
    },
    code: {
      meta:'Programmation · Développement web', title:'L\'application de gestion',
      context:'Vous enseignez le développement web en deuxième année. Les étudiant.e.s doivent créer une application CRUD complète. Vous réfléchissez à comment positionner l\'IA.',
      question:'Quel niveau correspond à l\'énoncé suivant ?',
      task:'"Vous pouvez utiliser GitHub Copilot ou un outil équivalent pour générer du code. Vous devez cependant comprendre et pouvoir expliquer chaque ligne produite par l\'IA. Révisez, testez et documentez tout le code — y compris celui que l\'IA a écrit."',
      ans:2,
      fb:{ ok:'Correct. L\'IA produit du contenu (code), mais l\'étudiant.e doit le comprendre, le tester et le valider. La maîtrise critique reste centrale. C\'est le niveau 2 (Collaboration IA).', ko:'Reconsidérez. L\'IA génère du code, mais l\'exigence centrale est que l\'étudiant.e comprenne, révise et valide tout. Ce n\'est pas de l\'IA extensive sans supervision — c\'est le niveau 2 (Collaboration IA).' }
    },
    ethics: {
      meta:'Éthique de l\'innovation · IA et société', title:'La note de politique publique',
      context:'Votre cours traite des politiques d\'IA dans les organisations. Les étudiant.e.s doivent rédiger une note de politique destinée à un décideur fictif.',
      question:'Quel niveau correspond à l\'énoncé suivant ?',
      task:'"Co-concevez avec moi (l\'enseignant.e) le format et les critères d\'évaluation de votre note. Utilisez l\'IA pour générer des scénarios d\'impact et des données de contexte. Votre note doit démontrer comment vous avez dirigé, questionné et reconfiguré les productions de l\'IA pour en faire un document signé."',
      ans:4,
      fb:{ ok:'Exactement. L\'évaluation est co-conçue avec l\'enseignant.e, l\'IA est utilisée de façon créative et stratégique, et l\'étudiant.e est invité.e à innover. C\'est le niveau 4 (Exploration IA).', ko:'Regardez à nouveau. La co-conception avec l\'enseignant.e, l\'usage créatif et stratégique de l\'IA, et la démarche d\'innovation pointent vers le niveau 4 (Exploration IA).' }
    }
  },
  es: {
    math: {
      meta:'Matemáticas · Cálculo diferencial', title:'Resolución de problemas aplicados',
      context:'Enseñas cálculo diferencial. Normalmente asignas 10 problemas para resolver de forma autónoma. Quieres mantener el objetivo de aprendizaje integrando la IA.',
      question:'¿Qué nivel corresponde a esta instrucción?',
      task:'"Usa la IA para verificar tu enfoque en dos de los diez problemas, documentando los intercambios con la herramienta. Debes redactar todas las soluciones finales por tu cuenta."',
      ans:1,
      fb:{ ok:'Correcto. La IA solo se usa para confirmar un enfoque (ideación/planificación) — el producto final es íntegramente humano. Ese es el nivel 1 (Planificación IA).', ko:'No del todo. La IA se usa aquí para validar una dirección de trabajo, no para redactar la solución. El producto final es íntegramente humano. Corresponde al nivel 1 (Planificación IA).' }
    },
    lang: {
      meta:'Idioma · Redacción avanzada', title:'La carta de solicitud formal',
      context:'Tu curso de redacción avanzada incluye una carta de solicitud formal. Quieres integrar la IA para preparar a los estudiantes para el mundo profesional.',
      question:'¿Qué nivel corresponde a esta instrucción?',
      task:'"Redacta tu carta en su totalidad. Luego envíala a una herramienta de IA para obtener sugerencias sobre tono, registro y claridad. Integra los ajustes que consideres pertinentes y justifica tus decisiones."',
      ans:2,
      fb:{ ok:'Correcto. El/la estudiante crea primero, luego usa la IA para mejorar. La IA no escribe — revisa. Ese es el nivel 2 (Colaboración IA).', ko:'No exactamente. El/la estudiante redacta primero; la IA solo interviene en la revisión y el/la estudiante debe validar las sugerencias. Corresponde al nivel 2 (Colaboración IA).' }
    },
    design: {
      meta:'Diseño visual · Identidad de marca', title:'La campaña visual completa',
      context:'Tu curso de diseño de marca requiere una campaña completa (logo, paleta, tipografía, cartel). Decides integrar herramientas de IA generativa.',
      question:'¿Qué nivel corresponde a esta instrucción?',
      task:'"Usa Firefly, Midjourney o una herramienta equivalente para generar los visuales de tu campaña. Presenta tu proceso de dirección artística: ¿cómo dirigiste, seleccionaste, modificaste y ensamblaste los resultados de la IA?"',
      ans:3,
      fb:{ ok:'¡Perfecto! La IA genera los visuales centrales, pero el/la estudiante debe demostrar su dominio de la dirección artística. Ese es el nivel 3 (IA permitida).', ko:'No del todo. La IA se usa de forma extensiva para producir los elementos centrales. El/la estudiante supervisa, dirige y evalúa — eso es el nivel 3 (IA permitida).' }
    },
    code: {
      meta:'Programación · Desarrollo web', title:'La aplicación de gestión',
      context:'Enseñas desarrollo web en segundo año. Los estudiantes deben crear una aplicación CRUD completa. Estás pensando cómo posicionar la IA.',
      question:'¿Qué nivel corresponde a esta instrucción?',
      task:'"Puedes usar GitHub Copilot o una herramienta equivalente para generar código. Sin embargo, debes entender y ser capaz de explicar cada línea producida por la IA. Revisa, prueba y documenta todo el código — incluido el que escribió la IA."',
      ans:2,
      fb:{ ok:'Correcto. La IA produce contenido (código), pero el/la estudiante debe comprenderlo, probarlo y validarlo. El dominio crítico sigue siendo central. Ese es el nivel 2 (Colaboración IA).', ko:'Reconsidera. La IA genera código, pero el requisito central es que el/la estudiante comprenda, revise y valide todo. Corresponde al nivel 2 (Colaboración IA).' }
    },
    ethics: {
      meta:'Ética de la innovación · IA y sociedad', title:'La nota de política pública',
      context:'Tu curso aborda las políticas de IA en las organizaciones. Los estudiantes deben redactar una nota de política para un decisor ficticio.',
      question:'¿Qué nivel corresponde a esta instrucción?',
      task:'"Co-diseña conmigo (el/la docente) el formato y los criterios de evaluación de tu nota. Usa la IA para generar escenarios de impacto y datos contextuales. Tu nota debe demostrar cómo dirigiste, cuestionaste y reconfiguraste los resultados de la IA para convertirlos en un documento firmado."',
      ans:4,
      fb:{ ok:'Exactamente. La evaluación es co-diseñada con el/la docente, la IA se usa de forma creativa y estratégica, y se invita al/a la estudiante a innovar. Ese es el nivel 4 (Exploración IA).', ko:'Mira de nuevo. El co-diseño con el/la docente, el uso creativo y estratégico de la IA y el enfoque de innovación apuntan al nivel 4 (Exploración IA).' }
    }
  },
  en: {
    math: {
      meta:'Mathematics · Differential Calculus', title:'Applied Problem Solving',
      context:'You teach differential calculus. You typically assign 10 problems to solve independently. You want to preserve the learning goal while integrating AI.',
      question:'Which level matches this instruction?',
      task:'"Use AI to verify your approach on two of the ten problems, documenting your exchanges with the tool. You must write all final solutions yourself."',
      ans:1,
      fb:{ ok:'Correct. AI is only used to confirm an approach (ideation/planning) — the final product remains entirely human. That\'s Level 1 (AI Planning).', ko:'Not quite. AI is used here to validate a direction, not to write the solution. The final product remains entirely human. That corresponds to Level 1 (AI Planning).' }
    },
    lang: {
      meta:'Language · Advanced Writing', title:'The Formal Request Letter',
      context:'Your advanced writing course includes a formal request letter. You want to integrate AI to prepare students for the professional world.',
      question:'Which level matches this instruction?',
      task:'"Write your letter in full. Then submit it to an AI tool for suggestions on tone, register, and clarity. Integrate the adjustments you find relevant and justify your choices."',
      ans:2,
      fb:{ ok:'Correct. The student creates first, then uses AI to improve. AI doesn\'t write — it revises. That\'s Level 2 (AI Collaboration).', ko:'Not exactly. The student writes first; AI only intervenes for revision, and the student must validate the suggestions. That\'s Level 2 (AI Collaboration).' }
    },
    design: {
      meta:'Visual Design · Brand Identity', title:'The Complete Visual Campaign',
      context:'Your brand design course requires a full campaign (logo, palette, typography, poster). You decide to integrate generative AI tools.',
      question:'Which level matches this instruction?',
      task:'"Use Firefly, Midjourney, or an equivalent tool to generate your campaign visuals. Present your art direction process: how did you direct, select, modify, and assemble the AI outputs?"',
      ans:3,
      fb:{ ok:'Perfect. AI generates the central visuals, but the student must demonstrate mastery of art direction. That\'s Level 3 (Full AI).', ko:'Not quite. AI is used extensively to produce the central elements. The student supervises, directs, and evaluates — that\'s Level 3 (Full AI).' }
    },
    code: {
      meta:'Programming · Web Development', title:'The Management Application',
      context:'You teach web development in second year. Students must build a complete CRUD application. You\'re thinking about how to position AI.',
      question:'Which level matches this instruction?',
      task:'"You may use GitHub Copilot or an equivalent tool to generate code. However, you must understand and be able to explain every line produced by AI. Review, test, and document all code — including what AI wrote."',
      ans:2,
      fb:{ ok:'Correct. AI produces content (code), but the student must understand, test, and validate it. Critical mastery remains central. That\'s Level 2 (AI Collaboration).', ko:'Reconsider. AI generates code, but the core requirement is that the student understands, reviews, and validates everything. That\'s not extensive unsupervised AI — it\'s Level 2 (AI Collaboration).' }
    },
    ethics: {
      meta:'Innovation Ethics · AI and Society', title:'The Public Policy Brief',
      context:'Your course covers AI policies in organisations. Students must write a policy brief for a fictional decision-maker.',
      question:'Which level matches this instruction?',
      task:'"Co-design with me (the instructor) the format and assessment criteria for your brief. Use AI to generate impact scenarios and contextual data. Your brief must demonstrate how you directed, questioned, and reconfigured AI outputs into a document you own."',
      ans:4,
      fb:{ ok:'Exactly. The assessment is co-designed with the instructor, AI is used creatively and strategically, and the student is invited to innovate. That\'s Level 4 (AI Exploration).', ko:'Look again. Co-design with the instructor, creative and strategic AI use, and an innovation approach all point to Level 4 (AI Exploration).' }
    }
  }
};

const REDESIGN = {
  fr: {
    math: {
      original: 'Résoudre 10 problèmes d\'optimisation en devoir individuel',
      versions: [
        { level:0, lc:'var(--l0)', title:'Version IA interdite', desc:'Examen en salle, 90 minutes, sans calculatrice ni outil numérique. Mesure la maîtrise du raisonnement mathématique autonome.',
          items:['Résoudre 5 problèmes d\'optimisation de complexité croissante', 'Montrer toutes les étapes de raisonnement', 'Aucun outil externe autorisé'],
          pros:['Mesure directement la maîtrise mathématique personnelle', 'Résultats fiables et comparables entre étudiant.e.s'],
          cons:['Ne reflète pas les pratiques professionnelles actuelles', 'Source de stress élevé sans gain pédagogique supplémentaire'] },
        { level:1, lc:'var(--l1)', title:'Version Planification IA', desc:'L\'étudiant.e peut demander à l\'IA de reformuler un problème ou de suggérer une approche, mais résout soi-même.',
          items:['Documenter la requête soumise à l\'IA', 'Rédiger la solution complète sans reprise de l\'IA', 'Justifier brièvement l\'approche choisie'],
          pros:['Développe la pensée critique en comparant ses idées à celles de l\'IA', 'Conserve la rigueur de la solution personnelle'],
          cons:['Difficile à vérifier si l\'IA a seulement servi à la planification', 'Risque que l\'étudiant.e suive l\'approche de l\'IA sans la comprendre'] },
        { level:2, lc:'var(--l2)', title:'Version Collaboration IA', desc:'L\'IA peut proposer une méthode de résolution. L\'étudiant.e la critique, la corrige si nécessaire, et produit la solution finale.',
          items:['Comparer la méthode de l\'IA et la sienne', 'Identifier les erreurs ou limites de l\'IA', 'Rédiger une solution améliorée et commentée'],
          pros:['Développe le jugement critique face aux propositions de l\'IA', 'Prépare à un usage professionnel réaliste des outils'],
          cons:['Plus difficile d\'évaluer la profondeur de compréhension personnelle', 'L\'erreur de l\'IA peut induire en erreur si mal détectée'] },
        { level:3, lc:'var(--l3)', title:'Version IA libre', desc:'L\'IA génère les solutions. L\'étudiant.e doit superviser, tester, corriger et expliquer chaque résultat.',
          items:['Vérifier chaque solution numériquement', 'Identifier et corriger les erreurs de l\'IA', 'Présenter oralement deux solutions au choix'],
          pros:['Évalue des compétences de supervision et de validation de haut niveau', 'Correspond aux pratiques des milieux professionnels en ingénierie et data'],
          cons:['La maîtrise des fondamentaux mathématiques est moins mesurable', 'Exige une grille d\'évaluation plus complexe centrée sur le processus'] }
      ,
        { level:4, lc:'var(--l4)', title:'Version Exploration IA', desc:'L\'étudiant.e co-conçoit avec l\'enseignant.e le protocole d\'évaluation et utilise l\'IA de façon créative pour explorer des approches mathématiques non conventionnelles.',
          items:['Co-définir les critères d\'évaluation avec l\'enseignant.e',
                'Proposer une approche originale assistée par IA',
                'Présenter la démarche et réfléchir sur les limites de l\'IA en mathématiques'],
          pros:['Stimule la créativité et l\'initiative dans l\'exploration mathématique', 'Développe une posture de chercheur.e'],
          cons:['Très difficile à standardiser et à évaluer équitablement', 'Exige un accompagnement enseignant important et du temps de co-conception'] }
      ]
    },
    lang: {
      original: 'Rédiger un texte argumentatif de 800 mots sur un sujet imposé',
      versions: [
        { level:0, lc:'var(--l0)', title:'Version IA interdite', desc:'Production écrite en salle, sans outil. Évalue la maîtrise de l\'argumentation et du style personnel.',
          items:['Plan rédigé sur papier en 10 minutes', 'Rédaction complète en 90 minutes', 'Aucun outil de correction autorisé'],
          pros:['Évalue authentiquement le style et la voix personnelle de l\'étudiant.e', 'Garantit la paternité totale de la production'],
          cons:['Évalue peu les compétences de travail avec les outils du monde réel', 'Peut désavantager les étudiant.e.s ayant des difficultés rédactionnelles'] },
        { level:1, lc:'var(--l1)', title:'Version Planification IA', desc:'L\'IA peut générer un plan et des idées. L\'étudiant.e rédige le texte complet sans reprendre la formulation de l\'IA.',
          items:['Soumettre le plan IA et le plan retenu', 'Rédiger en reformulant entièrement ses idées', 'Annoter les idées retenues ou rejetées'],
          pros:['L\'étudiant.e développe sa propre voix à partir d\'une matière première structurée', 'Entraîne à distinguer ses idées de celles de l\'IA'],
          cons:['Frontière floue entre planification et rédaction assistée', 'L\'originalité de la démarche reste difficile à évaluer'] },
        { level:2, lc:'var(--l2)', title:'Version Collaboration IA', desc:'L\'étudiant.e rédige, puis utilise l\'IA pour réviser la clarté, la cohérence et le registre.',
          items:['Remettre le brouillon initial + la version finale', 'Justifier chaque modification importante', 'Démontrer l\'apport personnel dans les révisions'],
          pros:['Prépare à la révision professionnelle avec assistance numérique', 'Valorise le processus d\'amélioration itérative'],
          cons:['Le brouillon initial peut devenir une formalité si peu surveillé', 'L\'apport personnel dans les révisions est difficile à quantifier'] },
        { level:3, lc:'var(--l3)', title:'Version IA libre', desc:'L\'IA génère le texte. L\'étudiant.e dirige la génération, sélectionne la meilleure version, et la fait sienne.',
          items:['Fournir les prompts utilisés', 'Présenter 3 versions générées et justifier le choix', 'Rédiger un paragraphe de réflexion critique'],
          pros:['Évalue des compétences editoriales et de direction de contenu à haute valeur ajoutée', 'Correspond aux pratiques de communication en entreprise'],
          cons:['La qualité rédactionnelle personnelle est peu ou pas mesurée', 'Risque de remise d\'un contenu peu remanié si les critères sont flous'] }
      ,
        { level:4, lc:'var(--l4)', title:'Version Exploration IA', desc:'L\'étudiant.e et l\'enseignant.e co-conçoivent une forme d\'évaluation expérimentale explorant les frontières entre voix humaine et voix générée.',
          items:['Co-définir le format et les critères avec l\'enseignant.e',
                'Produire un texte hybride commenté (humain + IA)',
                'Analyser et documenter ce que l\'IA ne peut pas encore faire'],
          pros:['Permet d\'explorer des formes d\'expression hybrides innovantes', 'Développe la réflexivité sur la langue et la créativité'],
          cons:['Les critères d\'évaluation sont difficiles à définir à l\'avance', 'L\'expérimentation peut nuire à la progression des apprentissages langagiers fondamentaux'] }
      ]
    },
    design: {
      original: 'Créer une identité visuelle complète pour une marque fictive',
      versions: [
        { level:0, lc:'var(--l0)', title:'Version IA interdite', desc:'Esquisses et décisions visuelles entièrement manuelles. Évalue la pensée design fondamentale.',
          items:['3 pistes visuelles esquissées à la main', 'Justification des choix typographiques et chromatiques', 'Présentation orale de la démarche'],
          pros:['Évalue la pensée design fondamentale et la maîtrise du trait', 'Garantit l\'authenticité et l\'originalité de la démarche'],
          cons:['Ne prépare pas aux outils de la pratique professionnelle actuelle', 'Peut sous-évaluer des étudiant.e.s créatifs mais moins à l\'aise avec le dessin manuel'] },
        { level:1, lc:'var(--l1)', title:'Version Planification IA', desc:'L\'IA peut générer des références visuelles et des moodboards d\'inspiration, mais pas les livrables finaux.',
          items:['Moodboard issu d\'IA inclus dans la présentation', 'Tous les livrables finaux conçus manuellement', 'Justifier les inspirations retenues vs rejetées'],
          pros:['Élargit le répertoire visuel de l\'étudiant.e par l\'exploration référentielle', 'Conserve la production finale entièrement humaine'],
          cons:['La frontière entre inspiration et reproduction de l\'IA est difficile à tracer', 'Peut créer une dépendance à la validation IA avant de créer'] },
        { level:2, lc:'var(--l2)', title:'Version Collaboration IA', desc:'L\'IA génère un premier concept. L\'étudiant.e retravaille couleurs, typographie et mise en page.',
          items:['Documenter le concept original de l\'IA', 'Montrer les modifications apportées', 'Justifier les décisions créatives finales'],
          pros:['Développe le regard critique et la capacité de reconfiguration visuelle', 'Prépare au flux de travail des studios professionnels'],
          cons:['La créativité personnelle originale est moins visible dans le livrable final', 'Le concept IA peut fortement orienter la direction créative de l\'étudiant.e'] },
        { level:3, lc:'var(--l3)', title:'Version IA libre', desc:'L\'IA génère l\'ensemble des assets. L\'étudiant.e exerce une direction artistique documentée.',
          items:['Journal de direction artistique (prompts + décisions)', 'Cohérence et professionnalisme de l\'ensemble', 'Présentation de la stratégie de marque'],
          pros:['Évalue la direction artistique et la prise de décision créative stratégique', 'Correspond aux pratiques des agences et studios contemporains'],
          cons:['La maîtrise technique personnelle des outils de design est peu évaluée', 'La qualité des productions dépend fortement de la qualité des prompts utilisés'] }
      ,
        { level:4, lc:'var(--l4)', title:'Version Exploration IA', desc:'L\'étudiant.e co-conçoit avec l\'enseignant.e une démarche de design spéculatif utilisant l\'IA comme partenaire créatif central.',
          items:['Co-définir le brief et les critères avec l\'enseignant.e',
                'Explorer des formes visuelles émergentes avec plusieurs outils IA',
                'Présenter le processus créatif et les décisions de direction artistique'],
          pros:['Favorise l\'expérimentation et l\'émergence de nouveaux langages visuels', 'Développe l\'autonomie créative et la pensée spéculative'],
          cons:['Très difficile à évaluer selon des critères standardisés', 'Risque que l\'étudiant.e produise sans ancrage théorique ou disciplinaire solide'] }
      ]
    },
    code: {
      original: 'Développer une application web de gestion de tâches',
      versions: [
        { level:0, lc:'var(--l0)', title:'Version IA interdite', desc:'Évaluation en salle fermée. Aucun IDE en ligne, aucun outil IA. Évalue les fondamentaux.',
          items:['Pseudocode d\'abord, code ensuite', 'Gestion de 3 fonctionnalités spécifiées', 'Tests manuels documentés'],
          pros:['Garantit la maîtrise des fondamentaux algorithmiques sans béquille', 'Résultats objectifs et facilement vérifiables'],
          cons:['Ne reflète pas les environnements de développement actuels', 'Source de stress élevé ; ne mesure pas la capacité à collaborer avec des outils'] },
        { level:1, lc:'var(--l1)', title:'Version Planification IA', desc:'L\'IA peut être consultée pour valider l\'architecture. L\'étudiant.e code tout lui-même.',
          items:['Diagramme d\'architecture validé avec l\'IA', 'Code 100% écrit par l\'étudiant.e', 'README expliquant les choix techniques'],
          pros:['Développe la capacité à valider une architecture avant de coder', 'Garde la production de code entièrement humaine'],
          cons:['Difficile de vérifier que l\'IA n\'a servi qu\'à la phase de planification', 'L\'architecture suggérée par l\'IA peut orienter toute la solution sans réflexion critique'] },
        { level:2, lc:'var(--l2)', title:'Version Collaboration IA', desc:'GitHub Copilot autorisé. Chaque suggestion de l\'IA doit être comprise et validée.',
          items:['Commenter chaque bloc généré par l\'IA', 'Tests unitaires pour toutes les fonctions IA', 'Expliquer 3 suggestions refusées et pourquoi'],
          pros:['Prépare à l\'usage professionnel de GitHub Copilot et outils similaires', 'Évalue la compréhension du code plutôt que la seule vitesse de frappe'],
          cons:['Le niveau réel de compréhension du code généré reste difficile à mesurer', 'Risque d\'acceptation passive des suggestions sans vérification sérieuse'] },
        { level:3, lc:'var(--l3)', title:'Version IA libre', desc:'L\'IA génère l\'essentiel du code. L\'étudiant.e supervise, teste, débogue et documente.',
          items:['Rapport de supervision : erreurs IA trouvées', 'Couverture de tests ≥ 80%', 'Démo fonctionnelle + présentation du processus'],
          pros:['Évalue des compétences de supervision technique à haute valeur professionnelle', 'Permet de produire des projets de plus grande envergure'],
          cons:['La maîtrise personnelle du code est peu ou pas évaluée', 'La couverture de tests peut devenir une formalité si elle n\'est pas examinée en détail'] }
      ,
        { level:4, lc:'var(--l4)', title:'Version Exploration IA', desc:'L\'étudiant.e co-conçoit avec l\'enseignant.e un projet d\'innovation technique intégrant l\'IA comme outil de conception et de génération.',
          items:['Co-définir le problème et les critères d\'évaluation avec l\'enseignant.e',
                'Construire un prototype innovant avec orchestration de plusieurs outils IA',
                'Documenter les décisions d\'architecture et les limites identifiées'],
          pros:['Développe la créativité technique et l\'initiative en résolution de problèmes', 'Prépare à l\'innovation dans des contextes professionnels émergents'],
          cons:['La profondeur technique peut être sacrifiée au profit de l\'originalité apparente', 'Exige un encadrement enseignant renforcé pour éviter la dérive vers des projets non maîtrisés'] }
      ]
    },
    ethics: {
      original: 'Rédiger une analyse critique d\'un cas réel d\'IA dans la société',
      versions: [
        { level:0, lc:'var(--l0)', title:'Version IA interdite', desc:'Analyse personnelle documentée, sans IA. Mesure la capacité de jugement éthique autonome.',
          items:['3 sources académiques citées', 'Développement d\'une position argumentée', 'Identification des limites de l\'analyse'],
          pros:['Mesure la capacité de raisonnement éthique personnel et autonome', 'Garantit l\'authenticité de la position exprimée'],
          cons:['Ne prépare pas à l\'analyse des systèmes d\'IA tels qu\'ils existent réellement', 'Peut favoriser les étudiant.e.s à l\'aise avec la rédaction académique classique'] },
        { level:1, lc:'var(--l1)', title:'Version Planification IA', desc:'L\'IA peut identifier des parties prenantes et suggérer des angles d\'analyse.',
          items:['Tableau des parties prenantes généré + annoté', 'Analyse rédigée intégralement par l\'étudiant.e', 'Indiquer les angles retenus vs rejetés'],
          pros:['Élargit le cadre d\'analyse grâce à l\'identification de parties prenantes souvent négligées', 'Conserve l\'argumentation entièrement personnelle'],
          cons:['La sélection des parties prenantes par l\'IA peut biaiser le cadrage de l\'analyse', 'Frontière difficile à tracer entre planification et rédaction assistée'] },
        { level:2, lc:'var(--l2)', title:'Version Collaboration IA', desc:'L\'IA rédige un premier brouillon. L\'étudiant.e repositionne les arguments et prend position.',
          items:['Comparer brouillon IA et version finale', 'Démontrer l\'ajout de valeur humaine', 'Signer les arguments : "IA dit X, je soutiens Y parce que…"'],
          pros:['Développe la capacité à prendre position face à un contenu déjà structuré', 'Entraîne à l\'écriture professionnelle en contexte de co-rédaction'],
          cons:['La profondeur du jugement éthique personnel est moins visible si le brouillon IA est solide', 'Risque de remise d\'un contenu faiblement remanié'] },
        { level:3, lc:'var(--l3)', title:'Version IA libre', desc:'L\'IA génère l\'ensemble du rapport. L\'étudiant.e co-dirige et valide chaque section.',
          items:['Journal des décisions de direction', 'Présentation orale de 10 minutes', 'Répondre à 3 questions imprévues sur le contenu'],
          pros:['Évalue des compétences de direction stratégique d\'un projet d\'analyse complexe', 'Correspond aux pratiques des organisations qui utilisent l\'IA pour la veille et l\'analyse'],
          cons:['Le jugement éthique personnel est difficilement mesurable en dehors de la présentation orale', 'La qualité de l\'analyse dépend fortement de la façon dont l\'IA est dirigée'] }
      ,
        { level:4, lc:'var(--l4)', title:'Version Exploration IA', desc:'L\'étudiant.e co-conçoit avec l\'enseignant.e une démarche d\'analyse originale, utilisant l\'IA pour explorer des angles éthiques inédits.',
          items:['Co-définir la problématique et les critères avec l\'enseignant.e',
                'Utiliser l\'IA pour générer des perspectives contradictoires et les confronter',
                'Produire une note de synthèse signée intégrant une réflexion critique sur l\'IA utilisée'],
          pros:['Développe l\'initiative intellectuelle et la capacité à poser de nouvelles questions éthiques', 'Prépare à des rôles de leadership en gouvernance de l\'IA'],
          cons:['Très difficile à encadrer et à évaluer de façon cohérente entre étudiant.e.s', 'Exige une disponibilité enseignante importante pour le co-design et le suivi'] }
      ]
    }
  },
  es: {
    math: {
      original: 'Resolver 10 problemas de optimización como tarea individual',
      versions: [
        { level:0, lc:'var(--l0)', title:'Versión IA no permitida', desc:'Examen en clase, 90 minutos, sin calculadora ni herramienta digital.',
          items:['Resolver 5 problemas de optimización de complejidad creciente','Mostrar todos los pasos del razonamiento','Ninguna herramienta externa permitida'],
          pros:['Mide directamente el dominio matemático personal', 'Resultados fiables y comparables entre estudiantes'],
          cons:['No refleja las prácticas profesionales actuales', 'Alta presión sin beneficio pedagógico adicional'] },
        { level:1, lc:'var(--l1)', title:'Versión Planificación IA', desc:'El/la estudiante puede pedir a la IA que reformule un problema o sugiera un enfoque, pero resuelve de forma autónoma.',
          items:['Documentar la consulta enviada a la IA','Redactar la solución completa sin reproducir el output de la IA','Justificar brevemente el enfoque elegido'],
          pros:['Desarrolla el pensamiento crítico al comparar el propio enfoque con el de la IA', 'Mantiene el rigor de una solución completamente personal'],
          cons:['Difícil verificar que la IA solo se usó para planificar', 'Riesgo de que el/la estudiante siga el enfoque de la IA sin comprenderlo'] },
        { level:2, lc:'var(--l2)', title:'Versión Colaboración IA', desc:'La IA puede proponer un método de resolución. El/la estudiante lo critica, corrige si es necesario y produce la solución final.',
          items:['Comparar el método de la IA con el propio','Identificar errores o limitaciones de la IA','Redactar una solución mejorada y comentada'],
          pros:['Desarrolla el juicio crítico frente a los métodos propuestos por la IA', 'Prepara para un uso profesional realista de las herramientas'],
          cons:['La profundidad de la comprensión personal es más difícil de evaluar', 'Un error de la IA puede inducir a error si no se detecta'] },
        { level:3, lc:'var(--l3)', title:'Versión IA permitida', desc:'La IA genera las soluciones. El/la estudiante supervisa, prueba, corrige y explica cada resultado.',
          items:['Verificar cada solución numéricamente','Identificar y corregir errores de la IA','Presentar oralmente dos soluciones a elección'],
          pros:['Evalúa competencias de supervisión y validación de alto nivel', 'Se alinea con las prácticas profesionales en ingeniería y ciencia de datos'],
          cons:['El dominio de los fundamentos matemáticos es menos medible', 'Requiere una rúbrica más compleja centrada en el proceso'] }
      ,
        { level:4, lc:'var(--l4)', title:'Versión Exploración IA', desc:'El/la estudiante y el/la docente co-diseñan el protocolo de evaluación; el/la estudiante usa la IA de forma creativa para explorar enfoques matemáticos no convencionales.',
          items:['Co-definir los criterios de evaluación con el/la docente',
                'Proponer un enfoque original asistido por IA',
                'Presentar el proceso y reflexionar sobre las limitaciones de la IA en matemáticas'],
          pros:['Estimula la creatividad y la iniciativa en la exploración matemática', 'Desarrolla una mentalidad investigadora'],
          cons:['Muy difícil de estandarizar y evaluar de forma equitativa', 'Requiere una implicación docente significativa y tiempo de co-diseño'] }
      ]
    },
    lang: {
      original: 'Redactar un texto argumentativo de 800 palabras sobre un tema asignado',
      versions: [
        { level:0, lc:'var(--l0)', title:'Versión IA no permitida', desc:'Producción escrita en clase, sin herramientas. Evalúa la argumentación y el estilo personal.',
          items:['Plan redactado en papel en 10 minutos','Redacción completa en 90 minutos','Ninguna herramienta de corrección permitida'],
          pros:['Evalúa auténticamente la voz y el estilo personal del/la estudiante', 'Garantiza la autoría total del trabajo'],
          cons:['Evalúa pocas competencias relacionadas con las herramientas del mundo real', 'Puede perjudicar a estudiantes con dificultades de redacción'] },
        { level:1, lc:'var(--l1)', title:'Versión Planificación IA', desc:'La IA puede generar un plan e ideas. El/la estudiante redacta el texto completo sin reproducir la formulación de la IA.',
          items:['Entregar el plan de la IA y el plan adoptado','Redactar reformulando completamente las ideas','Anotar las ideas retenidas o descartadas'],
          pros:['El/la estudiante desarrolla su propia voz a partir de una materia prima estructurada', 'Entrena para distinguir las propias ideas de las de la IA'],
          cons:['La frontera entre planificación y escritura asistida es difusa', 'La originalidad del enfoque sigue siendo difícil de evaluar'] },
        { level:2, lc:'var(--l2)', title:'Versión Colaboración IA', desc:'El/la estudiante redacta, luego usa la IA para revisar claridad, coherencia y registro.',
          items:['Entregar borrador inicial + versión final','Justificar cada modificación importante','Demostrar la aportación personal en las revisiones'],
          pros:['Prepara para la revisión profesional con asistencia digital', 'Valora el proceso de mejora iterativa'],
          cons:['El borrador inicial puede volverse una formalidad si no se supervisa bien', 'La aportación personal en las revisiones es difícil de cuantificar'] },
        { level:3, lc:'var(--l3)', title:'Versión IA permitida', desc:'La IA genera el texto. El/la estudiante dirige la generación, selecciona la mejor versión y la hace suya.',
          items:['Proporcionar los prompts utilizados','Presentar 3 versiones generadas y justificar la elección','Redactar un párrafo de reflexión crítica'],
          pros:['Evalúa competencias editoriales y de dirección de contenido de alto valor', 'Se alinea con las prácticas de comunicación en el entorno laboral'],
          cons:['La calidad redaccional personal rara vez se mide', 'Riesgo de entregar contenido poco reelaborado si los criterios son vagos'] }
      ,
        { level:4, lc:'var(--l4)', title:'Versión Exploración IA', desc:'El/la estudiante y el/la docente co-diseñan una evaluación experimental que explora las fronteras entre la voz humana y la generada por IA.',
          items:['Co-definir el formato y los criterios con el/la docente',
                'Producir un texto híbrido comentado (humano + IA)',
                'Analizar y documentar lo que la IA todavía no puede hacer'],
          pros:['Permite explorar formas de expresión híbridas e innovadoras', 'Desarrolla la reflexividad sobre el lenguaje y la creatividad'],
          cons:['Los criterios de evaluación son difíciles de definir con antelación', 'La experimentación puede comprometer el aprendizaje lingüístico fundamental'] }
      ]
    },
    design: {
      original: 'Crear una identidad visual completa para una marca ficticia',
      versions: [
        { level:0, lc:'var(--l0)', title:'Versión IA no permitida', desc:'Bocetos y decisiones visuales completamente manuales.',
          items:['3 direcciones visuales dibujadas a mano','Justificación de las elecciones tipográficas y cromáticas','Presentación oral del proceso'],
          pros:['Evalúa el pensamiento de diseño fundamental y el dominio del trazo', 'Garantiza la autenticidad y originalidad del proceso'],
          cons:['No prepara para las herramientas de la práctica profesional actual', 'Puede subvalorar a estudiantes creativos pero menos cómodos con el dibujo manual'] },
        { level:1, lc:'var(--l1)', title:'Versión Planificación IA', desc:'La IA puede generar referencias visuales e moodboards de inspiración, pero no los entregables finales.',
          items:['Moodboard generado por IA incluido en la presentación','Todos los entregables finales diseñados manualmente','Justificar las inspiraciones retenidas vs descartadas'],
          pros:['Amplía el repertorio visual del/la estudiante mediante la exploración referencial', 'Mantiene el entregable final completamente humano'],
          cons:['La línea entre inspiración y reproducción de la IA es difícil de trazar', 'Puede generar dependencia de la validación de la IA antes de crear'] },
        { level:2, lc:'var(--l2)', title:'Versión Colaboración IA', desc:'La IA genera un concepto inicial. El/la estudiante reelabora colores, tipografía y composición.',
          items:['Documentar el concepto original de la IA','Mostrar las modificaciones realizadas','Justificar las decisiones creativas finales'],
          pros:['Desarrolla el ojo crítico y la capacidad de reconfiguración visual', 'Prepara para los flujos de trabajo de los estudios profesionales'],
          cons:['La creatividad personal original es menos visible en el entregable final', 'El concepto de la IA puede condicionar fuertemente la dirección creativa del/la estudiante'] },
        { level:3, lc:'var(--l3)', title:'Versión IA permitida', desc:'La IA genera todos los assets. El/la estudiante ejerce una dirección artística documentada.',
          items:['Diario de dirección artística (prompts + decisiones)','Coherencia y profesionalismo del conjunto','Presentación de la estrategia de marca'],
          pros:['Evalúa la dirección artística y la toma de decisiones creativas estratégicas', 'Se alinea con las prácticas de agencias y estudios contemporáneos'],
          cons:['El dominio técnico personal de las herramientas de diseño rara vez se evalúa', 'La calidad de los resultados depende en gran medida de la calidad de los prompts utilizados'] }
      ,
        { level:4, lc:'var(--l4)', title:'Versión Exploración IA', desc:'El/la estudiante y el/la docente co-diseñan un proceso de diseño especulativo usando la IA como socio creativo central.',
          items:['Co-definir el brief y los criterios con el/la docente',
                'Explorar formas visuales emergentes con múltiples herramientas de IA',
                'Presentar el proceso creativo y las decisiones de dirección artística'],
          pros:['Fomenta la experimentación y la emergencia de nuevos lenguajes visuales', 'Desarrolla la autonomía creativa y el pensamiento especulativo'],
          cons:['Muy difícil de evaluar según criterios estandarizados', 'Riesgo de que el/la estudiante produzca sin un anclaje teórico o disciplinar sólido'] }
      ]
    },
    code: {
      original: 'Desarrollar una aplicación web de gestión de tareas',
      versions: [
        { level:0, lc:'var(--l0)', title:'Versión IA no permitida', desc:'Examen en aula cerrada. Sin IDE en línea, sin herramientas IA.',
          items:['Pseudocódigo primero, código después','Implementar 3 funcionalidades especificadas','Pruebas manuales documentadas'],
          pros:['Garantiza el dominio de los fundamentos algorítmicos sin ayudas', 'Resultados objetivos y fácilmente verificables'],
          cons:['No refleja los entornos de desarrollo actuales', 'Alta presión; no mide la capacidad de trabajar con herramientas'] },
        { level:1, lc:'var(--l1)', title:'Versión Planificación IA', desc:'La IA puede consultarse para validar la arquitectura. El/la estudiante codifica todo de forma autónoma.',
          items:['Diagrama de arquitectura validado con la IA','Código 100% escrito por el/la estudiante','README explicando las decisiones técnicas'],
          pros:['Desarrolla la capacidad de validar una arquitectura antes de codificar', 'Mantiene la producción de código completamente humana'],
          cons:['Difícil verificar que la IA solo se usó en la fase de planificación', 'La arquitectura sugerida por la IA puede condicionar toda la solución sin reflexión crítica'] },
        { level:2, lc:'var(--l2)', title:'Versión Colaboración IA', desc:'GitHub Copilot autorizado. Cada sugerencia de la IA debe comprenderse y validarse.',
          items:['Comentar cada bloque generado por la IA','Tests unitarios para todas las funciones IA','Explicar 3 sugerencias rechazadas y por qué'],
          pros:['Prepara para el uso profesional de GitHub Copilot y herramientas similares', 'Evalúa la comprensión del código más que la velocidad de escritura'],
          cons:['El nivel real de comprensión del código generado es difícil de medir', 'Riesgo de aceptar sugerencias pasivamente sin verificación rigurosa'] },
        { level:3, lc:'var(--l3)', title:'Versión IA permitida', desc:'La IA genera la mayor parte del código. El/la estudiante supervisa, prueba, depura y documenta.',
          items:['Informe de supervisión: errores de IA encontrados','Cobertura de tests ≥ 80%','Demo funcional + presentación del proceso'],
          pros:['Evalúa competencias de supervisión técnica de alto valor profesional', 'Permite proyectos de mayor envergadura'],
          cons:['El dominio personal del código rara vez se evalúa', 'La cobertura de tests puede volverse una formalidad si no se examina en detalle'] }
      ,
        { level:4, lc:'var(--l4)', title:'Versión Exploración IA', desc:'El/la estudiante y el/la docente co-diseñan un proyecto de innovación técnica integrando la IA como herramienta de diseño y generación.',
          items:['Co-definir el problema y los criterios de evaluación con el/la docente',
                'Construir un prototipo innovador orquestando múltiples herramientas de IA',
                'Documentar las decisiones de arquitectura y las limitaciones identificadas'],
          pros:['Desarrolla la creatividad técnica y la iniciativa en resolución de problemas', 'Prepara para la innovación en contextos profesionales emergentes'],
          cons:['La profundidad técnica puede sacrificarse en favor de la originalidad aparente', 'Requiere un acompañamiento docente reforzado para evitar proyectos no fundamentados'] }
      ]
    },
    ethics: {
      original: 'Redactar un análisis crítico de un caso real de IA en la sociedad',
      versions: [
        { level:0, lc:'var(--l0)', title:'Versión IA no permitida', desc:'Análisis personal documentado, sin IA. Mide la capacidad de juicio ético autónomo.',
          items:['3 fuentes académicas citadas','Desarrollo de una posición argumentada','Identificación de las limitaciones del análisis'],
          pros:['Mide la capacidad de razonamiento ético personal y autónomo', 'Garantiza la autenticidad de la posición expresada'],
          cons:['No prepara a los estudiantes para analizar los sistemas de IA tal como existen realmente', 'Puede favorecer a quienes dominan la escritura académica convencional'] },
        { level:1, lc:'var(--l1)', title:'Versión Planificación IA', desc:'La IA puede identificar partes interesadas y sugerir ángulos de análisis.',
          items:['Tabla de partes interesadas generada + anotada','Análisis redactado íntegramente por el/la estudiante','Indicar los ángulos retenidos vs descartados'],
          pros:['Amplía el marco de análisis identificando partes interesadas frecuentemente ignoradas', 'Mantiene la argumentación completamente personal'],
          cons:['La selección de partes interesadas por la IA puede sesgar el enfoque del análisis', 'La frontera entre planificación y escritura asistida es difícil de trazar'] },
        { level:2, lc:'var(--l2)', title:'Versión Colaboración IA', desc:'La IA redacta un primer borrador. El/la estudiante reposiciona los argumentos y toma posición.',
          items:['Comparar borrador IA y versión final','Demostrar el valor añadido humano','"La IA dice X, yo sostengo Y porque…"'],
          pros:['Desarrolla la capacidad de tomar posición frente a contenido ya estructurado', 'Entrena la escritura profesional en un contexto de co-autoría'],
          cons:['La profundidad del juicio ético personal es menos visible si el borrador de la IA es sólido', 'Riesgo de entregar contenido poco revisado'] },
        { level:3, lc:'var(--l3)', title:'Versión IA permitida', desc:'La IA genera todo el informe. El/la estudiante co-dirige y valida cada sección.',
          items:['Registro de decisiones de dirección','Presentación oral de 10 minutos','Responder 3 preguntas imprevistas sobre el contenido'],
          pros:['Evalúa la dirección estratégica de un proyecto de análisis complejo', 'Se alinea con las organizaciones que usan IA para análisis e inteligencia'],
          cons:['El juicio ético personal es difícil de medir fuera de la presentación oral', 'La calidad del análisis depende en gran medida de cómo se dirige la IA'] }
      ,
        { level:4, lc:'var(--l4)', title:'Versión Exploración IA', desc:'El/la estudiante y el/la docente co-diseñan un enfoque de análisis original, usando la IA para explorar ángulos éticos novedosos.',
          items:['Co-definir la problemática y los criterios con el/la docente',
                'Usar la IA para generar perspectivas contradictorias y confrontarlas',
                'Producir una nota de síntesis firmada con reflexión crítica sobre la IA utilizada'],
          pros:['Desarrolla la iniciativa intelectual y la capacidad de plantear nuevas preguntas éticas', 'Prepara para roles de liderazgo en gobernanza de la IA'],
          cons:['Muy difícil de enmarcar y evaluar de forma coherente entre estudiantes', 'Requiere una disponibilidad docente importante para el co-diseño y el seguimiento'] }
      ]
    }
  },
  en: {
    math: {
      original: 'Solve 10 optimisation problems as an individual assignment',
      versions: [
        { level:0, lc:'var(--l0)', title:'No AI version', desc:'In-class exam, 90 minutes, no calculator or digital tool. Measures autonomous mathematical reasoning.',
          items:['Solve 5 optimisation problems of increasing complexity', 'Show all reasoning steps', 'No external tools allowed'],
          pros:['Directly measures personal mathematical mastery', 'Results are reliable and comparable across students'],
          cons:['Does not reflect current professional practice', 'High-stakes pressure with no additional pedagogical benefit'] },
        { level:1, lc:'var(--l1)', title:'AI Planning version', desc:'Student may ask AI to rephrase a problem or suggest an approach, but solves independently.',
          items:['Document the query submitted to AI', 'Write the complete solution without reproducing AI output', 'Briefly justify the chosen approach'],
          pros:['Builds critical thinking by comparing one\'s approach to the AI\'s', 'Keeps the rigour of a fully personal solution'],
          cons:['Hard to verify that AI was only used for planning', 'Risk that students follow the AI\'s approach without understanding it'] },
        { level:2, lc:'var(--l2)', title:'AI Collaboration version', desc:'AI may propose a resolution method. Student critiques it, corrects if needed, and produces the final solution.',
          items:['Compare AI method to own method', 'Identify AI errors or limitations', 'Write an improved, commented solution'],
          pros:['Develops critical judgement when evaluating AI-generated methods', 'Prepares for realistic professional use of tools'],
          cons:['Depth of personal understanding is harder to assess', 'An AI error can mislead students who fail to detect it'] },
        { level:3, lc:'var(--l3)', title:'Full AI version', desc:'AI generates solutions. Student must supervise, test, correct, and explain each result.',
          items:['Verify each solution numerically', 'Identify and correct AI errors', 'Present two solutions of choice orally'],
          pros:['Assesses high-level supervision and validation competencies', 'Aligns with professional practice in engineering and data science'],
          cons:['Mastery of mathematical fundamentals is less measurable', 'Requires a more complex process-centred rubric'] }
      ,
        { level:4, lc:'var(--l4)', title:'AI Exploration version', desc:'Student and instructor co-design the assessment protocol; student uses AI creatively to explore unconventional mathematical approaches.',
          items:['Co-define assessment criteria with the instructor',
                'Propose an original AI-assisted approach',
                'Present the process and reflect on AI\'s limitations in mathematics'],
          pros:['Stimulates creativity and initiative in mathematical exploration', 'Develops a research-oriented mindset'],
          cons:['Very difficult to standardise and assess equitably', 'Requires significant instructor involvement and co-design time'] }
      ]
    },
    lang: {
      original: 'Write an 800-word argumentative essay on an assigned topic',
      versions: [
        { level:0, lc:'var(--l0)', title:'No AI version', desc:'Written production in class, no tools. Assesses argumentation and personal style.',
          items:['Written outline on paper in 10 minutes', 'Full essay in 90 minutes', 'No correction tools allowed'],
          pros:['Authentically assesses the student\'s personal voice and style', 'Guarantees full authorship of the work'],
          cons:['Assesses few competencies related to real-world writing tools', 'May disadvantage students with writing difficulties'] },
        { level:1, lc:'var(--l1)', title:'AI Planning version', desc:'AI may generate a plan and ideas. Student writes the full text without reproducing AI phrasing.',
          items:['Submit AI plan and chosen plan', 'Write by fully reformulating ideas', 'Annotate ideas kept or discarded'],
          pros:['Students develop their own voice from structured raw material', 'Trains students to distinguish their ideas from the AI\'s'],
          cons:['The line between planning and assisted writing is blurry', 'Originality of the approach remains difficult to assess'] },
        { level:2, lc:'var(--l2)', title:'AI Collaboration version', desc:'Student writes first, then uses AI to revise clarity, coherence, and register.',
          items:['Submit initial draft + final version', 'Justify each significant change', 'Demonstrate personal contribution in revisions'],
          pros:['Prepares for professional revision with digital assistance', 'Values the iterative improvement process'],
          cons:['The initial draft may become a formality if loosely supervised', 'Personal contribution in revisions is difficult to quantify'] },
        { level:3, lc:'var(--l3)', title:'Full AI version', desc:'AI generates the text. Student directs generation, selects the best version, and claims it.',
          items:['Provide prompts used', 'Present 3 generated versions and justify choice', 'Write a critical reflection paragraph'],
          pros:['Assesses high-value editorial and content direction skills', 'Aligns with communication practices in the workplace'],
          cons:['Personal writing quality is rarely measured', 'Risk of submitting lightly reworked AI content if criteria are vague'] }
      ,
        { level:4, lc:'var(--l4)', title:'AI Exploration version', desc:'Student and instructor co-design an experimental assessment exploring the boundaries between human and AI-generated voice.',
          items:['Co-define format and criteria with the instructor',
                'Produce an annotated hybrid text (human + AI)',
                'Analyse and document what AI still cannot do'],
          pros:['Allows exploration of innovative hybrid forms of expression', 'Develops reflexivity about language and creativity'],
          cons:['Assessment criteria are hard to define in advance', 'Experimentation may compromise foundational language learning'] }
      ]
    },
    design: {
      original: 'Create a complete visual identity for a fictional brand',
      versions: [
        { level:0, lc:'var(--l0)', title:'No AI version', desc:'Entirely manual sketches and visual decisions. Assesses foundational design thinking.',
          items:['3 hand-sketched visual directions', 'Justification of typography and colour choices', 'Oral presentation of the process'],
          pros:['Assesses foundational design thinking and drawing skill', 'Guarantees authenticity and originality of the process'],
          cons:['Does not prepare students for tools used in current professional practice', 'May undervalue creative students who are less comfortable with manual drawing'] },
        { level:1, lc:'var(--l1)', title:'AI Planning version', desc:'AI may generate visual references and inspiration moodboards, but not final deliverables.',
          items:['AI-generated moodboard included in presentation', 'All final deliverables designed manually', 'Justify retained vs discarded inspirations'],
          pros:['Expands the student\'s visual repertoire through referential exploration', 'Keeps the final deliverable entirely human-made'],
          cons:['The line between AI-inspired and AI-reproduced is hard to draw', 'May create dependence on AI validation before creating'] },
        { level:2, lc:'var(--l2)', title:'AI Collaboration version', desc:'AI generates an initial concept. Student reworks colours, typography, and layout.',
          items:['Document the original AI concept', 'Show all modifications made', 'Justify final creative decisions'],
          pros:['Develops critical eye and the capacity to reconfigure visual material', 'Prepares for professional studio workflows'],
          cons:['Original personal creativity is less visible in the final deliverable', 'The AI concept may strongly steer the student\'s creative direction'] },
        { level:3, lc:'var(--l3)', title:'Full AI version', desc:'AI generates all assets. Student exercises documented art direction.',
          items:['Art direction journal (prompts + decisions)', 'Coherence and professionalism of the whole', 'Brand strategy presentation'],
          pros:['Assesses art direction and strategic creative decision-making', 'Aligns with the practices of contemporary agencies and studios'],
          cons:['Personal technical mastery of design tools is rarely assessed', 'Output quality depends heavily on the quality of prompts used'] }
      ,
        { level:4, lc:'var(--l4)', title:'AI Exploration version', desc:'Student and instructor co-design a speculative design process using AI as a central creative partner.',
          items:['Co-define the brief and criteria with the instructor',
                'Explore emerging visual forms using multiple AI tools',
                'Present the creative process and art direction decisions'],
          pros:['Encourages experimentation and the emergence of new visual languages', 'Develops creative autonomy and speculative thinking'],
          cons:['Very difficult to assess against standardised criteria', 'Risk that students produce work without solid theoretical or disciplinary grounding'] }
      ]
    },
    code: {
      original: 'Develop a web-based task management application',
      versions: [
        { level:0, lc:'var(--l0)', title:'No AI version', desc:'Closed-room exam. No online IDE, no AI tools. Assesses fundamentals.',
          items:['Pseudocode first, then code', 'Implement 3 specified features', 'Manual testing documented'],
          pros:['Guarantees mastery of algorithmic fundamentals without aids', 'Outcomes are objective and easily verifiable'],
          cons:['Does not reflect current development environments', 'High-stakes pressure; does not measure ability to work with tools'] },
        { level:1, lc:'var(--l1)', title:'AI Planning version', desc:'AI may be consulted to validate architecture. Student codes everything independently.',
          items:['Architecture diagram validated with AI', 'Code 100% written by student', 'README explaining technical choices'],
          pros:['Develops the ability to validate an architecture before coding', 'Keeps code production entirely human'],
          cons:['Hard to verify that AI was only used in the planning phase', 'AI-suggested architecture may shape the entire solution without critical reflection'] },
        { level:2, lc:'var(--l2)', title:'AI Collaboration version', desc:'GitHub Copilot allowed. Every AI suggestion must be understood and validated.',
          items:['Comment every AI-generated block', 'Unit tests for all AI functions', 'Explain 3 rejected suggestions and why'],
          pros:['Prepares for professional use of GitHub Copilot and similar tools', 'Assesses code understanding rather than typing speed alone'],
          cons:['Actual depth of understanding of generated code remains hard to measure', 'Risk of passively accepting suggestions without thorough verification'] },
        { level:3, lc:'var(--l3)', title:'Full AI version', desc:'AI generates most of the code. Student supervises, tests, debugs, and documents.',
          items:['Supervision report: AI errors found', 'Test coverage ≥ 80%', 'Working demo + process presentation'],
          pros:['Assesses high-value technical supervision competencies', 'Enables larger-scale projects'],
          cons:['Personal code mastery is rarely assessed', 'Test coverage may become a formality if not examined in detail'] }
      ,
        { level:4, lc:'var(--l4)', title:'AI Exploration version', desc:'Student and instructor co-design a technical innovation project integrating AI as a design and generation tool.',
          items:['Co-define the problem and assessment criteria with the instructor',
                'Build an innovative prototype orchestrating multiple AI tools',
                'Document architecture decisions and identified limitations'],
          pros:['Develops technical creativity and problem-solving initiative', 'Prepares for innovation in emerging professional contexts'],
          cons:['Technical depth may be sacrificed for apparent originality', 'Requires stronger instructor oversight to prevent ungrounded projects'] }
      ]
    },
    ethics: {
      original: 'Write a critical analysis of a real-world AI case in society',
      versions: [
        { level:0, lc:'var(--l0)', title:'No AI version', desc:'Personal documented analysis, no AI. Measures autonomous ethical judgement.',
          items:['3 academic sources cited', 'Development of a supported position', 'Identification of analysis limitations'],
          pros:['Measures personal, autonomous ethical reasoning', 'Guarantees authenticity of the position expressed'],
          cons:['Does not prepare students to analyse AI systems as they actually exist', 'May favour students comfortable with academic writing conventions'] },
        { level:1, lc:'var(--l1)', title:'AI Planning version', desc:'AI may identify stakeholders and suggest angles of analysis.',
          items:['Stakeholder table generated + annotated', 'Analysis written entirely by student', 'Indicate angles kept vs discarded'],
          pros:['Broadens the analytical frame by surfacing often-overlooked stakeholders', 'Keeps the argumentation fully personal'],
          cons:['AI-generated stakeholder selection may bias the framing of the analysis', 'Line between planning and assisted writing is difficult to draw'] },
        { level:2, lc:'var(--l2)', title:'AI Collaboration version', desc:'AI writes a first draft. Student repositions arguments and takes a stance.',
          items:['Compare AI draft and final version', 'Demonstrate human added value', 'Sign arguments: "AI says X, I argue Y because…"'],
          pros:['Develops the capacity to take a stance on already-structured content', 'Trains professional writing in a co-authoring context'],
          cons:['Depth of personal ethical judgement is less visible if the AI draft is strong', 'Risk of submitting lightly revised content'] },
        { level:3, lc:'var(--l3)', title:'Full AI version', desc:'AI generates the whole report. Student co-directs and validates each section.',
          items:['Direction decision log', '10-minute oral presentation', 'Answer 3 unexpected questions on content'],
          pros:['Assesses strategic direction of a complex analytical project', 'Aligns with organisations that use AI for intelligence gathering and analysis'],
          cons:['Personal ethical judgement is hard to measure outside of oral presentation', 'Analysis quality depends strongly on how the AI is directed'] }
      ,
        { level:4, lc:'var(--l4)', title:'AI Exploration version', desc:'Student and instructor co-design an original analysis approach, using AI to explore novel ethical angles.',
          items:['Co-define the issue and criteria with the instructor',
                'Use AI to generate contradictory perspectives and confront them',
                'Produce a signed policy brief including critical reflection on AI used'],
          pros:['Develops intellectual initiative and the ability to pose new ethical questions', 'Prepares for leadership roles in AI governance'],
          cons:['Very difficult to frame and assess consistently across students', 'Requires significant instructor availability for co-design and follow-up'] }
      ]
    }
  }
};

const ACTIVE_DATA = {'fr': [{'id': 'self', 'icon': '🔍', 'title': 'Auto-évaluation', 'intro': "L'IA comme miroir critique : elle offre une rétroaction immédiate, sans jugement, que l'étudiant.e peut consulter avant de soumettre son travail ou pour approfondir sa compréhension.", 'examples': [{'disc': '📐 Mathématiques', 'text': "Soumettre sa démarche de résolution à l'IA pour identifier les erreurs de raisonnement avant la correction formelle."}, {'disc': '🗣️ Langue', 'text': "Demander à l'IA d'évaluer la cohérence argumentative et le registre de son texte selon des critères donnés."}, {'disc': '🎨 Design visuel', 'text': "Soumettre ses choix typographiques et chromatiques à l'IA et comparer ses justifications à celles de l'outil."}, {'disc': '💻 Programmation', 'text': "Faire analyser son code par l'IA pour détecter les vulnérabilités ou les pratiques sous-optimales avant la remise."}, {'disc': '⚖️ Éthique', 'text': "Demander à l'IA de jouer l'avocat.e du diable face à sa position pour tester la solidité de son argumentaire."}], 'note': "Clé pédagogique : l'étudiant.e doit décider s'il/elle accepte ou rejette la rétroaction — et justifier pourquoi."}, {'id': 'peer', 'icon': '👥', 'title': 'Évaluation par les pairs', 'intro': "L'IA structure et enrichit la rétroaction entre étudiant.e.s : elle peut servir de médiateur, de référentiel commun ou de contre-exemple pour alimenter le dialogue entre pairs.", 'examples': [{'disc': '📐 Mathématiques', 'text': "Un pair et l'IA évaluent indépendamment la même démarche : la comparaison des deux rétroactions alimente la discussion."}, {'disc': '🗣️ Langue', 'text': "L'IA génère une grille de lecture adaptée au texte du pair, que l'étudiant.e utilise ensuite pour commenter."}, {'disc': '🎨 Design visuel', 'text': "Deux étudiant.e.s soumettent leur design à l'IA avec les mêmes critères et comparent les résultats reçus."}, {'disc': '💻 Programmation', 'text': "L'IA analyse le code d'un pair et génère des questions de compréhension que l'autre étudiant.e doit poser lors de la révision."}, {'disc': '⚖️ Éthique', 'text': "Après l'évaluation par les pairs, demander à l'IA de synthétiser les points de convergence et de divergence dans les arguments."}], 'note': "Clé pédagogique : la rétroaction de l'IA ne remplace pas le regard humain — elle le prépare et l'enrichit."}, {'id': 'experiential', 'icon': '🌱', 'title': 'Apprentissage expérientiel', 'intro': "L'IA comme simulateur d'expériences : elle permet de créer des mises en situation réalistes, d'explorer des scénarios sans risque et de simuler des contextes professionnels.", 'examples': [{'disc': '📐 Mathématiques', 'text': "Simuler avec l'IA un ensemble de données réelles et appliquer les méthodes statistiques apprises pour en tirer des conclusions."}, {'disc': '🗣️ Langue', 'text': "Jouer un jeu de rôle avec l'IA (entretien d'embauche, négociation) pour pratiquer le discours professionnel dans un contexte sécurisé."}, {'disc': '🎨 Design visuel', 'text': "Simuler un brief client avec l'IA : elle joue le rôle du commanditaire et l'étudiant.e doit défendre ses choix créatifs."}, {'disc': '💻 Programmation', 'text': "L'IA simule un environnement de production défaillant : l'étudiant.e doit diagnostiquer et corriger en temps réel."}, {'disc': '⚖️ Éthique', 'text': "L'IA joue différentes parties prenantes (citoyen.ne, entreprise, régulateur) dans une simulation de consultation publique sur un enjeu IA."}], 'note': 'Clé pédagogique : le débriefing après la simulation est aussi important que la simulation elle-même.'}, {'id': 'collaborative', 'icon': '🤝', 'title': 'Apprentissage collaboratif', 'intro': "L'IA comme membre de l'équipe ou comme défi collectif : elle peut amplifier la dynamique de groupe, distribuer les rôles et rendre visible la contribution de chacun.e.", 'examples': [{'disc': '📐 Mathématiques', 'text': "Chaque sous-groupe modélise un scénario différent avec l'IA, puis la classe entière compare et synthétise les résultats."}, {'disc': '🗣️ Langue', 'text': "La classe co-rédige un texte avec l'IA en se répartissant les rôles : rédacteur.trice, réviseur.euse, directeur.trice éditorial.e."}, {'disc': '🎨 Design visuel', 'text': "Chaque équipe dirige l'IA avec le même brief mais des contraintes différentes : comparaison collective des divergences créatives."}, {'disc': '💻 Programmation', 'text': "La classe entière co-construit une application en équipes : chacune est responsable d'un module généré et supervisé avec l'IA."}, {'disc': '⚖️ Éthique', 'text': "La classe simule une assemblée délibérative : chaque groupe, aidé de l'IA, représente une perspective différente sur un enjeu commun."}], 'note': "Clé pédagogique : rendre explicite qui a contribué quoi — y compris la contribution de l'IA."}], 'en': [{'id': 'self', 'icon': '🔍', 'title': 'Self-assessment', 'intro': 'AI as a critical mirror: it provides immediate, non-judgmental feedback that students can consult before submitting their work or to deepen their understanding.', 'examples': [{'disc': '📐 Mathematics', 'text': 'Submit your problem-solving approach to AI to identify reasoning errors before formal grading.'}, {'disc': '🗣️ Language', 'text': 'Ask AI to evaluate the argumentative coherence and register of your text against given criteria.'}, {'disc': '🎨 Visual Design', 'text': 'Submit typographic and colour choices to AI and compare its justifications to your own.'}, {'disc': '💻 Programming', 'text': 'Have AI analyse your code for vulnerabilities or suboptimal practices before submission.'}, {'disc': '⚖️ Ethics', 'text': "Ask AI to play devil's advocate against your position to stress-test the strength of your argument."}], 'note': 'Pedagogical key: students must decide whether to accept or reject the feedback — and justify why.'}, {'id': 'peer', 'icon': '👥', 'title': 'Peer assessment', 'intro': 'AI structures and enriches peer feedback: it can serve as mediator, shared reference, or counterexample to fuel dialogue between students.', 'examples': [{'disc': '📐 Mathematics', 'text': 'A peer and AI independently evaluate the same approach; comparing the two feedback sets drives discussion.'}, {'disc': '🗣️ Language', 'text': "AI generates a reading grid tailored to a peer's text, which the student then uses to provide comments."}, {'disc': '🎨 Visual Design', 'text': 'Two students submit their designs to AI using the same criteria and compare the results received.'}, {'disc': '💻 Programming', 'text': "AI analyses a peer's code and generates comprehension questions for the reviewer to ask during the review."}, {'disc': '⚖️ Ethics', 'text': 'After peer evaluation, ask AI to synthesise points of convergence and divergence across the arguments.'}], 'note': "Pedagogical key: AI feedback doesn't replace the human perspective — it prepares and enriches it."}, {'id': 'experiential', 'icon': '🌱', 'title': 'Experiential learning', 'intro': 'AI as an experience simulator: it enables realistic scenarios, risk-free exploration, and simulation of professional contexts.', 'examples': [{'disc': '📐 Mathematics', 'text': 'Simulate a real dataset with AI and apply learned statistical methods to draw conclusions.'}, {'disc': '🗣️ Language', 'text': 'Role-play with AI (job interview, negotiation) to practise professional discourse in a safe context.'}, {'disc': '🎨 Visual Design', 'text': 'Simulate a client brief with AI playing the commissioner; defend your creative choices to the AI.'}, {'disc': '💻 Programming', 'text': 'AI simulates a failing production environment; students must diagnose and fix in real time.'}, {'disc': '⚖️ Ethics', 'text': 'AI plays different stakeholders (citizen, company, regulator) in a simulated public consultation on an AI issue.'}], 'note': 'Pedagogical key: the debrief after the simulation is as important as the simulation itself.'}, {'id': 'collaborative', 'icon': '🤝', 'title': 'Collaborative learning', 'intro': 'AI as a team member or collective challenge: it can amplify group dynamics, distribute roles, and make individual contributions visible.', 'examples': [{'disc': '📐 Mathematics', 'text': 'Each subgroup models a different scenario with AI; the whole class then compares and synthesises results.'}, {'disc': '🗣️ Language', 'text': 'The class co-writes a text with AI, distributing roles: writer, editor, editorial director.'}, {'disc': '🎨 Visual Design', 'text': 'Each team directs AI with the same brief but different constraints; collective comparison of creative divergences.'}, {'disc': '💻 Programming', 'text': 'The whole class co-builds an application in teams; each team owns a module generated and supervised with AI.'}, {'disc': '⚖️ Ethics', 'text': 'The class simulates a deliberative assembly; each AI-assisted group represents a different perspective on a shared issue.'}], 'note': "Pedagogical key: make explicit who contributed what — including the AI's contribution."}], 'es': [{'id': 'self', 'icon': '🔍', 'title': 'Autoevaluación', 'intro': 'La IA como espejo crítico: ofrece retroalimentación inmediata y sin juicios que el/la estudiante puede consultar antes de entregar su trabajo o para profundizar su comprensión.', 'examples': [{'disc': '📐 Matemáticas', 'text': 'Enviar el proceso de resolución a la IA para identificar errores de razonamiento antes de la corrección formal.'}, {'disc': '🗣️ Idioma', 'text': 'Pedir a la IA que evalúe la coherencia argumentativa y el registro del texto según criterios dados.'}, {'disc': '🎨 Diseño visual', 'text': 'Enviar las elecciones tipográficas y cromáticas a la IA y comparar sus justificaciones con las propias.'}, {'disc': '💻 Programación', 'text': 'Hacer que la IA analice el código en busca de vulnerabilidades o prácticas subóptimas antes de la entrega.'}, {'disc': '⚖️ Ética', 'text': 'Pedir a la IA que haga de abogado del diablo frente a la propia posición para poner a prueba la solidez del argumento.'}], 'note': 'Clave pedagógica: el/la estudiante debe decidir si acepta o rechaza la retroalimentación — y justificar por qué.'}, {'id': 'peer', 'icon': '👥', 'title': 'Evaluación entre pares', 'intro': 'La IA estructura y enriquece la retroalimentación entre estudiantes: puede actuar como mediadora, referencia común o contraejemplo para alimentar el diálogo.', 'examples': [{'disc': '📐 Matemáticas', 'text': 'Un par y la IA evalúan independientemente el mismo proceso; la comparación de ambas retroalimentaciones genera discusión.'}, {'disc': '🗣️ Idioma', 'text': 'La IA genera una grilla de lectura adaptada al texto del par, que el/la estudiante usa para comentar.'}, {'disc': '🎨 Diseño visual', 'text': 'Dos estudiantes envían su diseño a la IA con los mismos criterios y comparan los resultados recibidos.'}, {'disc': '💻 Programación', 'text': 'La IA analiza el código de un par y genera preguntas de comprensión que el/la revisor.a debe plantear.'}, {'disc': '⚖️ Ética', 'text': 'Tras la evaluación entre pares, pedir a la IA que sintetice los puntos de convergencia y divergencia en los argumentos.'}], 'note': 'Clave pedagógica: la retroalimentación de la IA no reemplaza la mirada humana — la prepara y la enriquece.'}, {'id': 'experiential', 'icon': '🌱', 'title': 'Aprendizaje experiencial', 'intro': 'La IA como simulador de experiencias: permite crear situaciones realistas, explorar escenarios sin riesgo y simular contextos profesionales.', 'examples': [{'disc': '📐 Matemáticas', 'text': 'Simular un conjunto de datos reales con la IA y aplicar los métodos estadísticos aprendidos para extraer conclusiones.'}, {'disc': '🗣️ Idioma', 'text': 'Juego de rol con la IA (entrevista de trabajo, negociación) para practicar el discurso profesional en un contexto seguro.'}, {'disc': '🎨 Diseño visual', 'text': 'Simular un brief de cliente con la IA como comitente; defender las decisiones creativas ante la IA.'}, {'disc': '💻 Programación', 'text': 'La IA simula un entorno de producción defectuoso; los/las estudiantes deben diagnosticar y corregir en tiempo real.'}, {'disc': '⚖️ Ética', 'text': 'La IA interpreta distintas partes interesadas (ciudadano.a, empresa, regulador.a) en una consulta pública simulada sobre un problema de IA.'}], 'note': 'Clave pedagógica: el debriefing tras la simulación es tan importante como la simulación misma.'}, {'id': 'collaborative', 'icon': '🤝', 'title': 'Aprendizaje colaborativo', 'intro': 'La IA como miembro del equipo o desafío colectivo: puede amplificar la dinámica de grupo, distribuir roles y hacer visible la contribución de cada persona.', 'examples': [{'disc': '📐 Matemáticas', 'text': 'Cada subgrupo modela un escenario diferente con la IA; toda la clase compara y sintetiza los resultados.'}, {'disc': '🗣️ Idioma', 'text': 'La clase co-redacta un texto con la IA, distribuyendo roles: redactor.a, revisor.a, director.a editorial.'}, {'disc': '🎨 Diseño visual', 'text': 'Cada equipo dirige la IA con el mismo brief pero distintas restricciones; comparación colectiva de las divergencias creativas.'}, {'disc': '💻 Programación', 'text': 'Toda la clase co-construye una aplicación en equipos; cada equipo es responsable de un módulo generado y supervisado con IA.'}, {'disc': '⚖️ Ética', 'text': 'La clase simula una asamblea deliberativa; cada grupo, asistido por la IA, representa una perspectiva diferente sobre un problema común.'}], 'note': 'Clave pedagógica: hacer explícito quién contribuyó qué — incluida la contribución de la IA.'}]};

const DISC_DATA = {
  fr: [
    { lc:'var(--blue)', title:'Expériences de première adoption', items:['Quel a été l\'élément déclencheur dans votre établissement ?', 'Comment vos étudiant.e.s ont-ils réagi à l\'introduction de l\'échelle ?', 'Comment vos collègues enseignant.e.s ont-ils réagi ?', 'Quels ajustements avez-vous faits après le premier essai ?'] },
    { lc:'var(--l2)', title:'Cohérence à l\'échelle du programme', items:['Comment assurer que tous les enseignants d\'un programme utilisent l\'échelle de la même façon ?', 'Où indiquer les niveaux : plan de cours, grille d\'évaluation, SGA ?', 'Comment informer le personnel enseignant sur la surveillance de l\'intégrité académique quand l\'usage de l\'IA n\'est pas clairement permis ou interdit ?'] },
    { lc:'var(--l3)', title:'Équité et accessibilité', items:['Tous les étudiants ont-ils un accès équitable aux outils IA ?', 'Comment appliquer l\'échelle pour les étudiant.e.s qui reçoivent des services adaptatifs ?', 'Quel rôle joue l\'accès aux technologies dans le choix du niveau ?', 'Comment intégrez-vous explicitement la vérification critique des productions de l\'IA dans vos évaluations, quelle que soit le niveau de l\'échelle utilisé ?'] },
    { lc:'var(--l4)', title:'Prochaines étapes institutionnelles', items:['Quelles ressources ou formations seraient les plus utiles ?', 'Comment documenter et partager les bonnes pratiques entre collèges ?', 'Quel soutien institutionnel solliciter pour aller plus loin ?'] }
  ],
  es: [
    { lc:'var(--blue)', title:'Experiencias de primera adopción', items:['¿Cuál fue el detonante en tu institución?','¿Cómo reaccionaron los estudiantes ante la introducción de la escala?','¿Cómo reaccionaron tus colegas docentes?','¿Qué ajustes realizaste tras el primer intento?'] },
    { lc:'var(--l2)', title:'Coherencia en el programa', items:['¿Cómo aseguras que todos los docentes de un programa usen la escala de forma consistente?','¿Dónde indicar los niveles: plan de estudios, rúbrica, SGC?','¿Cómo informar al personal docente sobre el seguimiento de la integridad académica cuando el uso de la IA no es claramente permitido o prohibido?'] },
    { lc:'var(--l3)', title:'Equidad y accesibilidad', items:['¿Tienen todos los estudiantes acceso equitativo a las herramientas de IA?','¿Cómo aplicar la escala para estudiantes que reciben servicios de adaptación?','¿Qué papel juega el acceso tecnológico en la elección del nivel?', '¿Cómo integras explícitamente la verificación crítica de las producciones de la IA en tus evaluaciones, independientemente del nivel de la escala utilizado?'] },
    { lc:'var(--l4)', title:'Próximos pasos institucionales', items:['¿Qué recursos o formación serían más útiles?','¿Cómo documentar y compartir buenas prácticas entre instituciones?','¿Qué apoyo institucional necesitas para ir más lejos?'] }
  ],
  en: [
    { lc:'var(--blue)', title:'First Adoption Experiences', items:['What was the trigger at your institution?', 'How did students react to the introduction of the scale?', 'How did your teaching colleagues react?', 'What adjustments did you make after the first attempt?'] },
    { lc:'var(--l2)', title:'Consistency Across the Programme', items:['How do you ensure all instructors in a programme use the scale consistently?', 'Where should levels be indicated: syllabus, rubric, LMS?', 'How do you inform teaching staff on monitoring academic integrity when AI use is not black-and-white?'] },
    { lc:'var(--l3)', title:'Equity and Accessibility', items:['Do all students have equitable access to AI tools?', 'How do you apply the scale for students who receive adaptive services?', 'What role does technology access play in level selection?', 'How do you explicitly integrate critical verification of AI outputs into your assessments, regardless of which scale level is used?'] },
    { lc:'var(--l4)', title:'Next Institutional Steps', items:['What resources or training would be most useful?', 'How do you document and share best practices across colleges?', 'What institutional support should you seek to go further?'] }
  ]
};


// ── STATE ──────────────────────────────────────────────────────────────────
let lang = 'fr';
let openScale = null;
let sortDisc = 'math', scDisc = 'math', rdDisc = 'math';
let sortPlaced = {}, scAnswered = {}, dragId = null;
let timerSecs = 3600, timerRunning = false, timerInterval = null;

// ── STRINGS ─────────────────────────────────────────────────────────────────
const STR = {
  fr: {
    'hdr-event':     'Colloque AQPC · 4 juin 2026 · Drummondville',
    'hdr-title':     "Rester sur la même page sur l'IA",
    'hero-badge':    'Colloque AQPC 2026 · Drummondville · 4 juin',
    'hero-h1':       "Rester sur la <em>même page</em><br>sur l'IA",
    'hero-sub':      "Comment communiquer clairement aux étudiant.e.s ce qui est permis — ou non — lors des évaluations notées.",
    'meta-lbl-dur':  'Atelier',
    'meta-lbl-disc': 'Multidisciplinaire',
    'meta-lbl-act':  'Interactif',
    'hero-cta':      "Commencer l'atelier →",
    'async-h4':      'Cette page est autonome',
    'async-p':       "Toutes les activités fonctionnent en dehors de l'atelier. Partagez l'URL avec vos collègues pour qu'ils explorent les exemples à leur propre rythme, dans leur discipline.",
    'async-qr-cap':  'Scannez pour ouvrir la page sur votre appareil',
    'agenda-tag':    "Programme de l'atelier",
    'agenda-h2':     '60 minutes ensemble',
    'agenda-p':      'Un atelier en étapes progressives, avec minuteur intégré pour garder le rythme collectif.',
    'context-p':     "L'ACPQ regroupe des établissements qui placent la réussite étudiante au cœur de leurs actions, notamment auprès des étudiants issus du secondaire, adultes, immigrants, ou présentant des besoins particuliers. Dans ce contexte d'inclusion et de diversité, les outils d'IA générative soulèvent des enjeux réels d'équité, d'intégrité académique et de communication pédagogique.",
    'scale-h2':      "L'échelle d'utilisation de l'IA",
    'scale-p':       'Cinq niveaux, du travail entièrement humain à la collaboration avancée avec l\'IA. Cliquez sur un niveau pour voir sa définition complète.',
    'scale-origin-p':"L'échelle a été développée par LCI Melbourne et traduite en français par le Collège LaSalle Montréal — notamment motivée par le système de grilles de tâches de l'Université de Sherbrooke (UdeS), utilisé comme référence externe lors de l'adoption. L'ensemble des trois versions est actuellement en déploiement pilote dans le réseau LCI. Elle s'inspire des travaux de Leon Furze sur le <em>AI Assessment Scale</em> (2024).",
    'scale-next-btn':"Passer à l'activité 1 →",
    'sort-tag':      'Activité 1 ~ 10 minutes',
    'sort-h2':       'Classer des évaluations',
    'sort-p':        'Choisissez votre discipline, puis glissez-déposez chaque évaluation vers le niveau qui lui correspond. Discutez en groupe avant de valider.',
    'pool-label':    'Évaluations à classer',
    'sort-check-btn':'Vérifier',
    'sort-reset-btn':'Recommencer',
    'sort-next-btn': 'Activité 2 →',
    'sc-tag':        'Activité 2 ~ 10 minutes',
    'sc-h2':         'Choisir le bon niveau',
    'sc-p':          "Lisez la mise en contexte et l'énoncé de tâche, puis choisissez le niveau qui convient le mieux. Discutez.",
    'sc-prev':       '← Précédent',
    'sc-next':       'Suivant →',
    'rd-tag':        'Activité 3 ~ 10 minutes',
    'rd-h2':         'Remanier une évaluation',
    'rd-p':          'Voici comment une même évaluation peut être déclinée en plusieurs niveaux selon les objectifs pédagogiques. Choisissez une discipline.',
    'rd-next-btn':   'Données →',
    'disc-tag':      'Discussion ~ 5 minutes',
    'disc-h2':       'Réflexion collective',
    'disc-p':        'Pistes pour échanger sur vos expériences et planifier les prochaines étapes dans vos établissements.',
    'scale-crit-callout': '<strong>Rappel fondamental :</strong> les grands modèles de langage (LLM) ne sont pas des moteurs de connaissance — ils sont des moteurs de vraisemblance linguistique. Ils peuvent produire des affirmations confiantes qui sont fausses, incomplètes ou biaisées. Le rôle de l\'enseignant.e est indissociable du développement de la pensée critique : l\'étudiant.e doit apprendre à questionner, vérifier et contextualiser tout contenu généré par un outil automatisé, sans jamais l\'accepter comme vérité.',
    'active-crit-note': '<strong>Note préalable :</strong> dans tous les usages pédagogiques ci-dessous, rappeler explicitement aux étudiant.e.s que l\'IA peut se tromper et que la vérification critique de ses productions est elle-même une compétence à évaluer.',
    'env-disclaimer': '<strong>Note environnementale :</strong> l\'utilisation de l\'IA générative a un coût énergétique réel. Il convient d\'en tenir compte à chaque usage et d\'éviter la génération de contenu à usage unique. Utiliser l\'IA de façon intentionnelle, c\'est aussi respecter les objectifs de développement durable de notre institution.',
    'ntab-intro':       'Bienvenue',
    'ntab-lessons':     'Leçons tirées',
    'ntab-scale':       "L'échelle IA",
    'ntab-sort':        'Classer',
    'ntab-scenario':    'Scénarios',
    'ntab-redesign':    'Remanier',
    'lessons-tag':      'Collège LaSalle Montréal · Mars 2026',
    'lessons-h2':       'Leçons tirées du terrain',
    'lessons-p':        "Lors d'une journée pédagogique, onze équipes programmes ont analysé leurs évaluations sous l'angle de l'IA. Explorez les catégories à votre rythme.",
    'lessons-async-h4': 'Section à explorer en autonomie',
    'lessons-async-p':  "Cette section est conçue pour une lecture asynchrone. Ouvrez les catégories qui vous intéressent après l'atelier.",
    'lessons-next-btn': "L'échelle IA →",
    'data-tag':      'Aperçu ~ 3 minutes',
    'data-h2':       'Distribution de l\'échelle IA dans quatre programmes',
    'data-p':        "Un premier regard sur la façon dont quatre équipes ont positionné leurs cours et évaluations sur l\'échelle.",
    'data-async-h4': 'Visualisation interactive disponible en ligne',
    'data-async-p':  'Le visualiseur complet permet de filtrer par programme, par session et par source de données. Survolez un segment pour voir les titres de cours.',
    'data-callout':  '<strong>Ce que vous voyez ici :</strong> quatre programmes du Collège LaSalle Montréal ayant appliqué l\'échelle à l\'ensemble de leur grille de cours. Les programmes 420.BR, 420.BP et 420.BX (Technique de l\'informatique) sont des formations techniques traditionnelles ; le programme 574.CX (Design UI/UX) est conçu comme une approche de prototypage assisté par IA et de création en faible code.',
    'data-next-btn': 'Apprentissage actif →',
    'ntab-data':     'Données',
        'active-tag': 'Activité 4 ~ 10 minutes',
    'active-h2': 'L\'IA pour l\'apprentissage actif',
    'active-p': 'Au-delà de l\'évaluation notée, l\'IA générative offre des leviers concrets pour l\'auto-évaluation, l\'évaluation par les pairs, l\'apprentissage expérientiel et les activités collaboratives.',
    'active-next-btn': 'Discussion →',
    'ntab-active': 'Apprentissage actif',
'ntab-discussion':'Discussion',
    'drop-hint':     'Déposez ici…',
    'def-lbl':       'Définition',
    'obj-lbl':       'Objectif',
    'req-lbl':       'Exigence',
    'click-expand':  'Cliquer pour développer ↓',
    'all-correct':   '🎉 Excellent ! Toutes les évaluations sont correctement classées.',
    'some-wrong':    'Quelques erreurs. Discutez en groupe !',
    'score-prefix':  'Score :',
    'rd-original-lbl':"Évaluation d'origine :",
    'cp-choose':     'Choisissez le niveau',
    'cp-sub':        "Quel niveau correspond à cet énoncé ?",
    'ref-tag':       'Référence',
    'ref-text':      "L'échelle d'utilisation de l'IA est celle de LCI Éducation, développée par LCI Melbourne (2024), traduite en français par le Collège LaSalle Montréal (avec les grilles de l'UdeS comme référence externe), en espagnol par LCI Barcelone. Elle s'inspire des travaux de <em>Leon Furze (AI Assessment Scale, 2024)</em>.",
    'credit':        'Sous-comité IA, Global Academic Committee · LCI Éducation · 2026',
    'f-workshop':    'Atelier conçu par',
    'f-dev':         'Développement du site',
    'f-dev-text':    "Ce site a été développé de façon itérative et collaborative avec <strong>Claude Sonnet 4.6</strong> (Anthropic, 2025) via Claude.ai. Elisa Schaeffer a fourni le cadre conceptuel, les orientations disciplinaires et le contenu de l'échelle ; elle a révisé et affiné l'ensemble des propositions générées au fil de la conversation. L'IA a généré le code, les exemples et la mise en page sous sa direction. Le développement s'est déroulé de façon itérative sur plusieurs jours, incluant l'ajout d'une synthèse des leçons tirées du terrain et d'une visualisation interactive de la distribution de l'échelle dans quatre programmes.",
    'f-tool':        'Outil',
    'f-tool-text':   "Claude Sonnet 4.6 via Claude.ai (claude.ai) — développement itératif et collaboratif, révision et validation par l'auteure.",
    'f-author':      'Elisa Schaeffer, Doyen.ne Tech &amp; Design, Collège LaSalle Montréal, LCI Éducation',
    'f-links-label': 'En savoir plus',
    'f-link-aqpc':   'Colloque AQPC 2026',
    'f-link-lasalle':'Collège LaSalle Montréal',
    'f-link-lci':    'LCI Éducation',
    'f-link-elisa':  'Elisa Schaeffer',
    'f-link-aqpc-href': 'https://www.aqpc.qc.ca/fr/colloque',
  },
  en: {
    'hdr-event':     'AQPC Symposium · June 4, 2026 · Drummondville',
    'hdr-title':     'Staying on the Same Page About AI',
    'hero-badge':    'AQPC Symposium 2026 · Drummondville · June 4',
    'hero-h1':       'Staying on the <em>Same Page</em><br>About AI',
    'hero-sub':      'How to clearly communicate to students what is permitted — or not — in graded assessments.',
    'meta-lbl-dur':  'Workshop',
    'meta-lbl-disc': 'Multidisciplinary',
    'meta-lbl-act':  'Interactive',
    'hero-cta':      'Start the workshop →',
    'async-h4':      'This page works standalone',
    'async-p':       'All activities work independently of the live workshop. Share the URL with colleagues so they can explore examples at their own pace, in their own discipline.',
    'async-qr-cap':  'Scan to open this page on your device',
    'agenda-tag':    'Workshop Agenda',
    'agenda-h2':     '60 minutes together',
    'agenda-p':      'A curated, multi-part workshop with a built-in timer to keep the collective pace.',
    'context-p':     'The ACPQ brings together institutions that put student success at the heart of their actions, including students from secondary school, adult learners, immigrants, and those with particular needs. In this context of inclusion and diversity, generative AI tools raise real questions of equity, academic integrity, and pedagogical communication.',
    'scale-h2':      'The AI Usage Scale',
    'scale-p':       'Five levels, from entirely human work to advanced AI collaboration. Click a level to see its full definition.',
    'scale-origin-p':"The scale was developed by LCI Melbourne and translated into French by Collège LaSalle Montréal — an adoption motivated in part by the task grid system developed at the Université de Sherbrooke (UdeS), used as an external reference. All three language versions are currently in network-wide pilot across LCI Education. It draws on the work of Leon Furze on the <em>AI Assessment Scale</em> (2024).",
    'scale-next-btn':'Go to Activity 1 →',
    'sort-tag':      'Activity 1 ~ 10 minutes',
    'sort-h2':       'Sort the Assessments',
    'sort-p':        'Choose your discipline, then drag and drop each assessment to the level that best matches it. Discuss as a group before checking.',
    'pool-label':    'Assessments to sort',
    'sort-check-btn':'Check answers',
    'sort-reset-btn':'Reset',
    'sort-next-btn': 'Activity 2 →',
    'sc-tag':        'Activity 2 ~ 10 minutes',
    'sc-h2':         'Choose the Right Level',
    'sc-p':          'Read the context and task instruction, then choose the level that best fits. Discuss.',
    'sc-prev':       '← Previous',
    'sc-next':       'Next →',
    'rd-tag':        'Activity 3 ~ 10 minutes',
    'rd-h2':         'Redesign an Assessment',
    'rd-p':          'Here is how the same assessment can be adapted to multiple levels depending on pedagogical goals. Choose a discipline.',
    'rd-next-btn':   'Data →',
    'disc-tag':      'Discussion ~ 5 minutes',
    'disc-h2':       'Collective Reflection',
    'disc-p':        'Prompts for sharing your experiences and planning next steps in your institutions.',
    'scale-crit-callout': '<strong>A fundamental reminder:</strong> large language models (LLMs) are not knowledge engines — they are linguistic plausibility engines. They can produce confident-sounding statements that are false, incomplete, or biased. The instructor\'s role is inseparable from developing critical thinking: students must learn to question, verify, and contextualise any AI-generated content, and never accept it at face value.',
    'active-crit-note': '<strong>Prior note:</strong> in all the pedagogical uses below, explicitly remind students that AI can make mistakes and that critically verifying its outputs is itself a competency to be assessed.',
    'env-disclaimer': '<strong>Environmental note:</strong> generative AI has a real energy cost. This should be considered with every use, and single-use content generation should be avoided. Using AI intentionally is also a way of honouring our institution\'s sustainability commitments.',
    'ntab-intro':       'Welcome',
    'ntab-lessons':     'Lessons Learned',
    'ntab-scale':       'AI Scale',
    'ntab-sort':        'Sort',
    'ntab-scenario':    'Scenarios',
    'ntab-redesign':    'Redesign',
    'lessons-tag':      'Collège LaSalle Montréal · March 2026',
    'lessons-h2':       'Lessons from the Field',
    'lessons-p':        'During a professional development day, eleven programme teams analysed their assessments through the lens of AI. Explore the categories at your own pace.',
    'lessons-async-h4': 'Section for asynchronous exploration',
    'lessons-async-p':  'This section is designed for asynchronous reading. Open the categories that interest you after the workshop.',
    'lessons-next-btn': 'AI Scale →',
    'data-tag':      'Overview ~ 3 minutes',
    'data-h2':       'AI Scale Distribution Across Four Programmes',
    'data-p':        'A first look at how four teaching teams have positioned their courses and assessments on the scale. Explore the full interactive version after the workshop.',
    'data-async-h4': 'Interactive visualisation available online',
    'data-async-p':  'The full visualiser lets you filter by programme, session, and data source. Hover over a segment to see course titles.',
    'data-callout':  '<strong>What you see here:</strong> four programmes from Collège LaSalle Montréal that have applied the scale across their full course grid. The 420.BR, 420.BP and 420.BX programmes (Computer Science Technology) are traditional IT programmes with longstanding software development practices; 574.CX (UI/UX Design) is designed as a low-code AI-assisted prototyping and creation approach.',
    'data-next-btn': 'Active Learning →',
    'ntab-data':     'Data',
        'active-tag': 'Activity 4 ~ 10 minutes',
    'active-h2': 'AI for Active Learning',
    'active-p': 'Beyond graded assessment, generative AI offers concrete levers for self-assessment, peer assessment, experiential learning, and collaborative activities.',
    'active-next-btn': 'Discussion →',
    'ntab-active': 'Active Learning',
'ntab-discussion':'Discussion',
    'drop-hint':     'Drop here…',
    'def-lbl':       'Definition',
    'obj-lbl':       'Purpose',
    'req-lbl':       'Student requirement',
    'click-expand':  'Click to expand ↓',
    'all-correct':   '🎉 Excellent! All assessments are correctly placed.',
    'some-wrong':    'Some errors. Discuss as a group!',
    'score-prefix':  'Score:',
    'rd-original-lbl':'Original assessment:',
    'cp-choose':     'Choose a level',
    'cp-sub':        'Which level matches this instruction?',
    'ref-tag':       'Reference',
    'ref-text':      "The AI usage scale is the LCI Education scale, developed by LCI Melbourne (2024), translated into French by Collège LaSalle Montréal (with the UdeS task grids as an external reference) and into Spanish by LCI Barcelona. It draws on the work of <em>Leon Furze (AI Assessment Scale, 2024)</em>.",
    'credit':        'AI Subcommittee, Global Academic Committee · LCI Education · 2026',
    'f-workshop':    'Workshop designed by',
    'f-dev':         'Website development',
    'f-dev-text':    'This website was developed iteratively and collaboratively with <strong>Claude Sonnet 4.6</strong> (Anthropic, 2025) via Claude.ai. Elisa Schaeffer provided the conceptual framework, disciplinary directions, and scale content; she reviewed and refined all generated proposals throughout the conversation. The AI generated code, examples, and layout under her direction. Development took place iteratively over several days, including the addition of a synthesis of lessons learned from the field and an interactive visualisation of the AI scale distribution across four programmes.',
    'f-tool':        'Tool',
    'f-tool-text':   'Claude Sonnet 4.6 via Claude.ai (claude.ai) — iterative and collaborative development, reviewed and validated by the author.',
    'f-author':      'Elisa Schaeffer, Dean, Tech &amp; Design, Collège LaSalle Montréal, LCI Education',
    'f-links-label': 'Learn more',
    'f-link-aqpc':   'AQPC Symposium 2026',
    'f-link-lasalle':'LaSalle College Montréal',
    'f-link-lci':    'LCI Education',
    'f-link-elisa':  'Elisa Schaeffer',
    'f-link-aqpc-href': 'https://www.aqpc.qc.ca/en/symposium',
  },
  es: {
    'hdr-event':     'Coloquio AQPC · 4 de junio de 2026 · Drummondville',
    'hdr-title':     'Poniéndonos de acuerdo sobre la IA',
    'hero-badge':    'Coloquio AQPC 2026 · Drummondville · 4 de junio',
    'hero-h1':       'Poniéndonos de <em>acuerdo</em><br>sobre la IA',
    'hero-sub':      'Cómo comunicar claramente a los estudiantes lo que está permitido — o no — en las evaluaciones calificadas.',
    'meta-lbl-dur':  'Taller',
    'meta-lbl-disc': 'Multidisciplinar',
    'meta-lbl-act':  'Interactivo',
    'hero-cta':      'Comenzar el taller →',
    'async-h4':      'Esta página es autónoma',
    'async-p':       'Todas las actividades funcionan de forma independiente del taller presencial. Comparte la URL con tus colegas para que exploren los ejemplos a su propio ritmo, en su disciplina.',
    'async-qr-cap':  'Escanea para abrir esta página en tu dispositivo',
    'agenda-tag':    'Programa del taller',
    'agenda-h2':     '60 minutos juntos',
    'agenda-p':      'Un taller por etapas, con temporizador integrado para mantener el ritmo colectivo.',
    'context-p':     'La ACPQ reúne instituciones que ponen el éxito estudiantil en el centro de sus acciones, incluyendo estudiantes de secundaria, adultos, inmigrantes y personas con necesidades particulares. En este contexto de inclusión y diversidad, las herramientas de IA generativa plantean preguntas reales sobre equidad, integridad académica y comunicación pedagógica.',
    'scale-h2':      'La escala de uso de la IA',
    'scale-p':       'Cinco niveles, desde el trabajo completamente humano hasta la colaboración avanzada con IA. Haz clic en un nivel para ver su definición completa.',
    'scale-origin-p':'La escala fue desarrollada por LCI Melbourne y traducida al francés por el Collège LaSalle Montréal — una adopción motivada en parte por el sistema de grillas de la Université de Sherbrooke (UdeS), utilizado como referencia externa. Las tres versiones lingüísticas están actualmente en despliegue piloto en la red LCI. Se inspira en el trabajo de <em>Leon Furze (AI Assessment Scale, 2024)</em>.',
    'scale-next-btn':'Ir a la actividad 1 →',
    'sort-tag':      'Actividad 1 ~ 10 minutos',
    'sort-h2':       'Clasificar evaluaciones',
    'sort-p':        'Elige tu disciplina, luego arrastra y suelta cada evaluación al nivel que mejor corresponda. Discutan en grupo antes de verificar.',
    'pool-label':    'Evaluaciones a clasificar',
    'sort-check-btn':'Verificar',
    'sort-reset-btn':'Reiniciar',
    'sort-next-btn': 'Actividad 2 →',
    'sc-tag':        'Actividad 2 ~ 10 minutos',
    'sc-h2':         'Elegir el nivel adecuado',
    'sc-p':          'Lee el contexto y la instrucción de tarea, luego elige el nivel que mejor corresponda. Discutan.',
    'sc-prev':       '← Anterior',
    'sc-next':       'Siguiente →',
    'rd-tag':        'Actividad 3 ~ 10 minutos',
    'rd-h2':         'Rediseñar una evaluación',
    'rd-p':          'Así es como una misma evaluación puede adaptarse a múltiples niveles según los objetivos pedagógicos. Elige una disciplina.',
    'rd-next-btn':   'Datos →',
    'disc-tag':      'Discusión ~ 5 minutos',
    'disc-h2':       'Reflexión colectiva',
    'disc-p':        'Pautas para compartir experiencias y planificar los próximos pasos en tus instituciones.',
    'scale-crit-callout': '<strong>Un recordatorio fundamental:</strong> los grandes modelos de lenguaje (LLM) no son motores de conocimiento — son motores de plausibilidad lingüística. Pueden producir afirmaciones con apariencia de certeza que son falsas, incompletas o sesgadas. El papel del/la docente es inseparable del desarrollo del pensamiento crítico: el/la estudiante debe aprender a cuestionar, verificar y contextualizar cualquier contenido generado por una herramienta automatizada, sin aceptarlo nunca como verdad.',
    'active-crit-note': '<strong>Nota previa:</strong> en todos los usos pedagógicos descritos a continuación, recordar explícitamente a los/las estudiantes que la IA puede equivocarse y que la verificación crítica de sus producciones es en sí misma una competencia a evaluar.',
    'env-disclaimer': '<strong>Nota medioambiental:</strong> la IA generativa tiene un costo energético real. Esto debe tenerse en cuenta en cada uso y debe evitarse la generación de contenido de un solo uso. Usar la IA de forma intencional es también una manera de honrar los compromisos de sostenibilidad de nuestra institución.',
    'ntab-intro':       'Bienvenida',
    'ntab-lessons':     'Lecciones aprendidas',
    'ntab-scale':       'Escala IA',
    'ntab-sort':        'Clasificar',
    'ntab-scenario':    'Escenarios',
    'ntab-redesign':    'Rediseñar',
    'lessons-tag':      'Collège LaSalle Montréal · Marzo 2026',
    'lessons-h2':       'Lecciones del terreno',
    'lessons-p':        'Durante una jornada pedagógica, once equipos de programas analizaron sus evaluaciones desde la perspectiva de la IA. Explore las categorías a su propio ritmo.',
    'lessons-async-h4': 'Sección para exploración asíncrona',
    'lessons-async-p':  'Esta sección está diseñada para lectura asíncrona. Abra las categorías que le interesen después del taller.',
    'lessons-next-btn': 'Escala IA →',
    'data-tag':      'Vistazo ~ 3 minutos',
    'data-h2':       'Distribución de la escala IA en cuatro programas',
    'data-p':        'Una primera mirada a cómo cuatro equipos docentes han posicionado sus cursos y evaluaciones en la escala. Explorar la versión interactiva completa después del taller.',
    'data-async-h4': 'Visualización interactiva disponible en línea',
    'data-async-p':  'El visualizador completo permite filtrar por programa, sesión y fuente de datos. Pase el cursor sobre un segmento para ver los títulos de los cursos.',
    'data-callout':  '<strong>Lo que ves aquí:</strong> cuatro programas del Collège LaSalle Montréal que han aplicado la escala a toda su malla curricular. Los programas 420.BR, 420.BP y 420.BX (Técnica en informática) son programas técnicos tradicionales en informática; el 574.CX (Diseño UI/UX) está diseñado como un enfoque de prototipado asistido por IA y creación en bajo código.',
    'data-next-btn': 'Aprendizaje activo →',
    'ntab-data':     'Datos',
        'active-tag': 'Actividad 4 ~ 10 minutos',
    'active-h2': 'La IA para el aprendizaje activo',
    'active-p': 'Más allá de la evaluación calificada, la IA generativa ofrece palancas concretas para la autoevaluación, la evaluación entre pares, el aprendizaje experiencial y las actividades colaborativas.',
    'active-next-btn': 'Discusión →',
    'ntab-active': 'Aprendizaje activo',
'ntab-discussion':'Discusión',
    'drop-hint':     'Suelta aquí…',
    'def-lbl':       'Definición',
    'obj-lbl':       'Objetivo',
    'req-lbl':       'Requisito del estudiante',
    'click-expand':  'Clic para expandir ↓',
    'all-correct':   '🎉 ¡Excelente! Todas las evaluaciones están correctamente clasificadas.',
    'some-wrong':    '¡Algunos errores. Discútanlo en grupo!',
    'score-prefix':  'Puntaje:',
    'rd-original-lbl':'Evaluación original:',
    'cp-choose':     'Elige un nivel',
    'cp-sub':        '¿Qué nivel corresponde a esta instrucción?',
    'ref-tag':       'Referencia',
    'ref-text':      'La escala de uso de IA es la de LCI Education, desarrollada por LCI Melbourne (2024), traducida al francés por el Collège LaSalle Montréal (con las grillas de la UdeS como referencia externa) y al español por LCI Barcelona. Se inspira en el trabajo de <em>Leon Furze (AI Assessment Scale, 2024)</em>.',
    'credit':        'Subcomité IA, Global Academic Committee · LCI Education · 2026',
    'f-workshop':    'Taller diseñado por',
    'f-dev':         'Desarrollo del sitio',
    'f-dev-text':    'Este sitio fue desarrollado de forma iterativa y colaborativa con <strong>Claude Sonnet 4.6</strong> (Anthropic, 2025) vía Claude.ai. Elisa Schaeffer proporcionó el marco conceptual, las orientaciones disciplinarias y el contenido de la escala; revisó y refinó todas las propuestas generadas a lo largo de la conversación. La IA generó el código, los ejemplos y la maquetación bajo su dirección. El desarrollo se realizó de forma iterativa a lo largo de varios días, incluyendo la adición de una síntesis de lecciones del terreno y una visualización interactiva de la distribución de la escala en cuatro programas.',
    'f-tool':        'Herramienta',
    'f-tool-text':   'Claude Sonnet 4.6 vía Claude.ai (claude.ai) — desarrollo iterativo y colaborativo, revisado y validado por la autora.',
    'f-author':      'Elisa Schaeffer, Doyen.ne Tech &amp; Design, Collège LaSalle Montréal, LCI Education',
    'f-links-label': 'Más información',
    'f-link-aqpc':   'Coloquio AQPC 2026',
    'f-link-lasalle':'Collège LaSalle Montréal',
    'f-link-lci':    'LCI Education',
    'f-link-elisa':  'Elisa Schaeffer',
    'f-link-aqpc-href': 'https://www.aqpc.qc.ca/fr/colloque',
  }
};

function s(key) { return (STR[lang] && STR[lang][key]) ? STR[lang][key] : (STR.fr[key] || key); }

// ── AGENDA DATA ──────────────────────────────────────────────────────────────
const AGENDA = {
  fr: [
    { time:'0–5 min',   type:'intro',       typeLabel:'Présentation', title:'Bienvenue et contexte',         desc:"Présentation de l'approche LCI et du contexte ACPQ." },
    { time:'5–10 min',  type:'intro',       typeLabel:'Présentation', title:'Leçons tirées du terrain',        desc:"Enjeux et solutions identifiés par onze équipes programmes à Collège LaSalle." },
    { time:'10–15 min', type:'intro',       typeLabel:'Présentation', title:"L'échelle d'utilisation de l'IA", desc:'Les 5 niveaux, définitions, objectifs et exigences.' },
    { time:'15–27 min', type:'interactive', typeLabel:'Activité',     title:'Classer des évaluations',        desc:'Drag-and-drop : associer des évaluations au bon niveau.' },
    { time:'27–40 min', type:'interactive', typeLabel:'Activité',     title:'Choisir le bon niveau',          desc:'Scénarios disciplinaires : quel niveau pour cet énoncé ?' },
    { time:'40–49 min', type:'interactive', typeLabel:'Activité',     title:'Remanier une évaluation',        desc:'Comment une même évaluation se décline à plusieurs niveaux.' },
    { time:'49–52 min', type:'intro',       typeLabel:'Aperçu',       title:'Données terrain',                desc:'Distribution de l\'échelle dans quatre programmes — à explorer en autonomie.' },
    { time:'52–60 min', type:'interactive', typeLabel:'Activité',     title:"L'IA pour l'apprentissage actif", desc:'Auto-évaluation, pairs, expérientiel, collaboratif.' },
    { time:'52–60 min', type:'discussion',  typeLabel:'Discussion',   title:'Réflexion collective',           desc:'Partage d\'expériences et prochaines étapes.' },
  ],
  en: [
    { time:'0–5 min',   type:'intro',       typeLabel:'Presentation', title:'Welcome and context',            desc:'Introduction to the LCI approach and the ACPQ context.' },
    { time:'5–10 min',  type:'intro',       typeLabel:'Presentation', title:'Lessons from the Field',          desc:'Issues and solutions identified by eleven programme teams at Collège LaSalle.' },
    { time:'10–15 min', type:'intro',       typeLabel:'Presentation', title:'The AI Usage Scale',             desc:'The 5 levels, definitions, purposes, and student requirements.' },
    { time:'15–27 min', type:'interactive', typeLabel:'Activity',     title:'Sort the assessments',           desc:'Drag-and-drop: match assessments from your discipline to the right levels.' },
    { time:'27–40 min', type:'interactive', typeLabel:'Activity',     title:'Choose the right level',         desc:'Disciplinary scenarios: which level fits this task instruction?' },
    { time:'40–49 min', type:'interactive', typeLabel:'Activity',     title:'Redesign an assessment',         desc:'How one assessment can be adapted to multiple levels.' },
    { time:'49–52 min', type:'intro',       typeLabel:'Overview',     title:'Field data',                     desc:'Scale distribution across four programmes — to explore independently.' },
    { time:'52–60 min', type:'interactive', typeLabel:'Activity',     title:'AI for Active Learning',         desc:'Self-assessment, peer, experiential, collaborative.' },
    { time:'52–60 min', type:'discussion',  typeLabel:'Discussion',   title:'Collective reflection',          desc:'Sharing experiences and next steps in your institutions.' },
  ],
  es: [
    { time:'0–5 min',   type:'intro',       typeLabel:'Presentación', title:'Bienvenida y contexto',          desc:'Introducción al enfoque LCI y al contexto de la ACPQ.' },
    { time:'5–10 min',  type:'intro',       typeLabel:'Presentación', title:'Lecciones del terreno',           desc:'Problemas y soluciones identificados por once equipos de programas en Collège LaSalle.' },
    { time:'10–15 min', type:'intro',       typeLabel:'Presentación', title:'La escala de uso de la IA',      desc:'Los 5 niveles, definiciones, objetivos y requisitos estudiantiles.' },
    { time:'15–27 min', type:'interactive', typeLabel:'Actividad',    title:'Clasificar evaluaciones',        desc:'Arrastrar y soltar: asociar evaluaciones de tu disciplina a los niveles correctos.' },
    { time:'27–40 min', type:'interactive', typeLabel:'Actividad',    title:'Elegir el nivel adecuado',       desc:'Escenarios disciplinarios: ¿qué nivel corresponde a esta instrucción?' },
    { time:'40–49 min', type:'interactive', typeLabel:'Actividad',    title:'Rediseñar una evaluación',       desc:'Cómo una misma evaluación se adapta a múltiples niveles.' },
    { time:'49–52 min', type:'intro',       typeLabel:'Vistazo',      title:'Datos del terreno',              desc:'Distribución de la escala en cuatro programas — para explorar de forma autónoma.' },
    { time:'52–60 min', type:'interactive', typeLabel:'Actividad',    title:'La IA para el aprendizaje activo', desc:'Autoevaluación, pares, experiencial, colaborativo.' },
    { time:'52–60 min', type:'discussion',  typeLabel:'Discusión',    title:'Reflexión colectiva',            desc:'Compartir experiencias y próximos pasos en tus instituciones.' },
  ]
};

// ── TIMER PHASES ─────────────────────────────────────────────────────────────
const PHASES = {
  fr: [
    { lbl:'Intro ~ 5 min',            start:55, sec:'intro' },
    { lbl:'Leçons ~ 5 min',           start:50, sec:'lessons' },
    { lbl:'Échelle ~ 5 min',          start:45, sec:'scale' },
    { lbl:'Classer ~ 10 min',         start:35, sec:'sort' },
    { lbl:'Scénarios ~ 10 min',       start:25, sec:'scenario' },
    { lbl:'Remanier ~ 9 min',         start:16, sec:'redesign' },
    { lbl:'Données ~ 3 min',          start:13, sec:'data' },
    { lbl:'Apprentissage actif ~ 8 min', start:5, sec:'active' },
    { lbl:'Discussion ~ 5 min',       start:0,  sec:'discussion' },
  ],
  en: [
    { lbl:'Intro ~ 5 min',            start:55, sec:'intro' },
    { lbl:'Lessons ~ 5 min',          start:50, sec:'lessons' },
    { lbl:'Scale ~ 5 min',            start:45, sec:'scale' },
    { lbl:'Sort ~ 10 min',            start:35, sec:'sort' },
    { lbl:'Scenarios ~ 10 min',       start:25, sec:'scenario' },
    { lbl:'Redesign ~ 9 min',         start:16, sec:'redesign' },
    { lbl:'Data ~ 3 min',             start:13, sec:'data' },
    { lbl:'Active Learning ~ 8 min',  start:5,  sec:'active' },
    { lbl:'Discussion ~ 5 min',       start:0,  sec:'discussion' },
  ],
  es: [
    { lbl:'Intro ~ 5 min',              start:55, sec:'intro' },
    { lbl:'Lecciones ~ 5 min',          start:50, sec:'lessons' },
    { lbl:'Escala ~ 5 min',             start:45, sec:'scale' },
    { lbl:'Clasificar ~ 10 min',        start:35, sec:'sort' },
    { lbl:'Escenarios ~ 10 min',        start:25, sec:'scenario' },
    { lbl:'Rediseñar ~ 9 min',          start:16, sec:'redesign' },
    { lbl:'Datos ~ 3 min',              start:13, sec:'data' },
    { lbl:'Aprendizaje activo ~ 8 min', start:5,  sec:'active' },
    { lbl:'Discusión ~ 5 min',          start:0,  sec:'discussion' },
  ]
};

// ── HELPERS ──────────────────────────────────────────────────────────────────
function iconImg(n) {
  return `<img src="${ICONS[lang][n]}" alt="" style="width:100%;height:auto;display:block;">`;
}
function circleImg(n) {
  return `<img src="${ICONS_CIRCLE[n]}" alt="" style="width:100%;height:auto;display:block;">`;
}

// ── NAVIGATION ───────────────────────────────────────────────────────────────
function showSec(id) {
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  renderTimerPhases();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── LANGUAGE ─────────────────────────────────────────────────────────────────
function setLang(l) {
  lang = l;
  ['fr','en','es'].forEach(x =>
    document.getElementById('lbtn-' + x).classList.toggle('active', x === l));

  updateHtmlFields();

  openScale = null;
  sortPlaced = {};
  scAnswered = {};
  renderAll();
}

// ── TIMER ────────────────────────────────────────────────────────────────────
function renderTimerPhases() {
  const phases = PHASES[lang] || PHASES.fr;
  const remaining = Math.floor(timerSecs / 60);
  document.getElementById('timer-phases').innerHTML = phases.map(ph => {
    const isActive = remaining <= (ph.start + (ph === phases[0] ? 5 : (phases[phases.indexOf(ph)-1] ? phases[phases.indexOf(ph)-1].start - ph.start : 5))) && remaining > ph.start;
    return `<button class="phase-pill ${isActive ? 'active' : ''}" onclick="showSec('${ph.sec}')">${ph.lbl}</button>`;
  }).join('');
}

function updateTimerDisplay() {
  const m = Math.floor(timerSecs / 60);
  const sec = timerSecs % 60;
  const disp = document.getElementById('timer-display');
  disp.textContent = `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  disp.classList.toggle('paused', !timerRunning);
  renderTimerPhases();
}

function toggleTimer() {
  timerRunning = !timerRunning;
  document.getElementById('timer-toggle-btn').innerHTML = timerRunning ? '&#9646;&#9646;' : '&#9654;';
  if (timerRunning) {
    timerInterval = setInterval(() => {
      if (timerSecs > 0) { timerSecs--; updateTimerDisplay(); }
      else { timerRunning = false; clearInterval(timerInterval); }
    }, 1000);
  } else {
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSecs = 3600;
  document.getElementById('timer-toggle-btn').innerHTML = '&#9654;';
  updateTimerDisplay();
}

// ── AGENDA ───────────────────────────────────────────────────────────────────
function renderAgenda() {
  document.getElementById('agenda-grid').innerHTML = (AGENDA[lang] || AGENDA.fr).map(d => `
    <div class="agenda-card">
      <div class="agenda-time">${d.time}</div>
      <span class="agenda-type ${d.type}">${d.typeLabel}</span>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
    </div>`).join('');
}

// ── SCALE ────────────────────────────────────────────────────────────────────
function renderScale() {
  const levels = SCALE[lang] || SCALE.fr;
  document.getElementById('scale-strip').innerHTML = levels.map(lv => `
    <div class="scale-pill ${openScale === lv.n ? 'open' : ''}" style="--lc:${lv.color}" onclick="toggleScale(${lv.n})">
      <div class="scale-pill-icon">${iconImg(lv.n)}</div>
      <div class="sp-hint">${s('click-expand')}</div>
    </div>`).join('');
  const det = document.getElementById('scale-detail-container');
  if (openScale !== null) {
    const lv = levels[openScale];
    det.innerHTML = `
      <div class="scale-detail open" style="--lc:${lv.color}">
        <button class="sd-close" onclick="closeScale()">✕</button>
        <div class="scale-detail-icon-wrap">
          <div class="scale-detail-icon">${iconImg(lv.n)}</div>
          <div>
            <div class="sd-name-en">${lv.n} · ${lv.fr !== lv.name ? lv.fr : lv.name}</div>
          </div>
        </div>
        <div><h4>${s('def-lbl')}</h4><p>${lv.def}</p></div>
        <div><h4>${s('obj-lbl')}</h4><p>${lv.obj}</p></div>
        <div><h4>${s('req-lbl')}</h4><p>${lv.req}</p></div>
      </div>`;
  } else { det.innerHTML = ''; }
}
function toggleScale(n) { openScale = openScale === n ? null : n; renderScale(); }
function closeScale() { openScale = null; renderScale(); }

// ── DISCIPLINE SELECTORS ─────────────────────────────────────────────────────
function renderDiscSelector(id, fn, active) {
  document.getElementById(id).innerHTML = (DISCIPLINES[lang] || DISCIPLINES.fr).map(d => `
    <button class="disc-btn ${active === d.id ? 'active' : ''}" onclick="${fn}('${d.id}')">
      <span class="disc-icon">${d.icon}</span>${d.label}
    </button>`).join('');
}
function setSortDisc(d) { sortDisc = d; sortPlaced = {}; renderSort(); }
function setScDisc(d)   { scDisc = d; renderScenario(); }
function setRdDisc(d)   { rdDisc = d; renderRedesign(); }

// ── SORT ─────────────────────────────────────────────────────────────────────
function renderSort() {
  renderDiscSelector('disc-selector-sort', 'setSortDisc', sortDisc);
  const items  = (SORT_ITEMS[lang] || SORT_ITEMS.fr)[sortDisc] || [];
  const levels = SCALE[lang] || SCALE.fr;
  const pool = document.getElementById('dnd-pool');
  pool.innerHTML = '';
  items.forEach(item => {
    if (sortPlaced[item.id] === undefined) pool.appendChild(makeDragItem(item, false));
  });
  if (!pool.children.length) pool.innerHTML = `<p style="font-size:1.35rem;color:var(--ch-200);font-style:italic;padding:1rem 0">—</p>`;
  const targets = document.getElementById('dnd-targets');
  targets.innerHTML = '';
  levels.forEach(lv => {
    const zone = document.createElement('div');
    zone.className = 'drop-zone';
    zone.style.setProperty('--lc', lv.color);
    zone.innerHTML = `
      <div class="drop-zone-header">
        <div class="dz-icon">${iconImg(lv.n)}</div>
        <span class="dz-name">${lv.n} · ${lv.name}</span>
        ${lv.fr !== lv.name ? `<span class="dz-name-fr">${lv.fr}</span>` : ''}
      </div>
      <div class="dz-items"><span class="dz-hint">${s('drop-hint')}</span></div>`;
    const dzItems = zone.querySelector('.dz-items');
    items.forEach(item => {
      if (sortPlaced[item.id] === lv.n) {
        dzItems.querySelector('.dz-hint') && dzItems.querySelector('.dz-hint').remove();
        const el = makeDragItem(item, true, lv.color);
        dzItems.appendChild(el);
      }
    });
    if (!dzItems.children.length) dzItems.innerHTML = `<span class="dz-hint">${s('drop-hint')}</span>`;
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault(); zone.classList.remove('drag-over');
      if (dragId == null) return;
      sortPlaced[dragId] = lv.n; dragId = null; renderSort();
    });
    zone.addEventListener('touchend', () => {
      if (dragId == null) return;
      sortPlaced[dragId] = lv.n; dragId = null; renderSort();
    }, { passive: true });
    targets.appendChild(zone);
  });
  const fb = document.getElementById('sort-feedback');
  fb.className = 'feedback-box'; fb.innerHTML = '';
}

function makeDragItem(item, placed, lc) {
  const el = document.createElement('div');
  el.className = 'drag-item' + (placed ? ' placed' : '');
  if (placed && lc) el.style.setProperty('--lc', lc);
  el.textContent = item.text;
  el.draggable = true;
  el.addEventListener('dragstart', () => { dragId = item.id; el.classList.add('is-dragging'); });
  el.addEventListener('dragend',   () => el.classList.remove('is-dragging'));
  el.addEventListener('touchstart', () => { dragId = item.id; }, { passive: true });
  if (placed) {
    el.title = lang === 'fr' ? 'Cliquer pour retirer' : lang === 'es' ? 'Clic para quitar' : 'Click to remove';
    el.addEventListener('click', () => { delete sortPlaced[item.id]; renderSort(); });
  }
  return el;
}

function checkSort() {
  const items = (SORT_ITEMS[lang] || SORT_ITEMS.fr)[sortDisc] || [];
  let correct = 0;
  items.forEach(item => { if (sortPlaced[item.id] === item.ans) correct++; });
  document.querySelectorAll('.drag-item.placed').forEach(el => {
    const item = items.find(i => i.text === el.textContent);
    if (!item) return;
    el.classList.remove('wrong','right');
    el.classList.add(sortPlaced[item.id] === item.ans ? 'right' : 'wrong');
  });
  const allOk = correct === items.length;
  const fb = document.getElementById('sort-feedback');
  fb.className = `feedback-box show ${allOk ? 'correct' : 'partial'}`;
  fb.innerHTML = `<span class="fb-icon">${allOk ? '✅' : '⚠️'}</span><div><div class="score-chip" style="margin-bottom:.8rem">${s('score-prefix')} ${correct}/${items.length}</div><div>${allOk ? s('all-correct') : s('some-wrong')}</div></div>`;
}
function resetSort() { sortPlaced = {}; renderSort(); }

// ── SCENARIO ─────────────────────────────────────────────────────────────────
function renderScenario() {
  renderDiscSelector('disc-selector-sc', 'setScDisc', scDisc);
  const discs  = Object.keys(SCENARIOS[lang] || SCENARIOS.fr);
  const idx    = discs.indexOf(scDisc);
  const sc     = (SCENARIOS[lang] || SCENARIOS.fr)[scDisc];
  const levels = SCALE[lang] || SCALE.fr;
  const chosen = scAnswered[scDisc];
  document.getElementById('sc-cur').textContent = idx + 1;
  document.getElementById('sc-tot').textContent = discs.length;
  document.getElementById('sc-prev').disabled = idx === 0;
  document.getElementById('sc-prev').style.opacity = idx === 0 ? '0.4' : '1';
  const isLast = idx === discs.length - 1;
  document.getElementById('sc-next').textContent = isLast
    ? (lang === 'fr' ? 'Activité 3 →' : lang === 'es' ? 'Actividad 3 →' : 'Activity 3 →')
    : s('sc-next');
  document.getElementById('scenario-container').innerHTML = `
    <div class="scenario-wrap">
      <div class="scenario-card">
        <div class="sc-disc-tag">${sc.meta}</div>
        <h3>${sc.title}</h3>
        <p class="sc-context">${sc.context}</p>
        <p class="sc-question">${sc.question}</p>
        <div class="sc-task">${sc.task}</div>
      </div>
      <div class="choice-panel">
        <h3>${s('cp-choose')}</h3>
        <p class="cp-sub">${s('cp-sub')}</p>
        ${levels.map(lv => {
          let cls = '';
          if (chosen !== undefined) {
            if (chosen === lv.n && chosen === sc.ans) cls = 'show-correct';
            else if (chosen === lv.n && chosen !== sc.ans) cls = 'show-wrong';
            else if (lv.n === sc.ans && chosen !== sc.ans) cls = 'show-correct';
          }
          return `<div class="level-opt ${cls}" style="--lc:${lv.color}" onclick="answerSc(${lv.n})">
            <div class="lo-icon">${iconImg(lv.n)}</div>
            <div><div class="lo-name">${lv.n} · ${lv.name}</div><div class="lo-sub">${lv.fr !== lv.name ? lv.fr : ''}</div></div>
          </div>`;
        }).join('')}
        <div class="sc-feedback ${chosen !== undefined ? 'show' : ''} ${chosen !== undefined ? (chosen === sc.ans ? 'correct' : 'wrong') : ''}">
          ${chosen !== undefined ? (chosen === sc.ans ? sc.fb.ok : sc.fb.ko) : ''}
        </div>
      </div>
    </div>`;
}
function answerSc(n) {
  if (scAnswered[scDisc] !== undefined) return;
  scAnswered[scDisc] = n; renderScenario();
}
function prevSc() {
  const discs = Object.keys(SCENARIOS[lang] || SCENARIOS.fr);
  const idx = discs.indexOf(scDisc);
  if (idx > 0) { scDisc = discs[idx-1]; renderScenario(); }
}
function nextSc() {
  const discs = Object.keys(SCENARIOS[lang] || SCENARIOS.fr);
  const idx = discs.indexOf(scDisc);
  if (idx < discs.length - 1) { scDisc = discs[idx+1]; renderScenario(); }
  else showSec('redesign');
}

// ── REDESIGN ─────────────────────────────────────────────────────────────────
function renderRedesign() {
  renderDiscSelector('disc-selector-rd', 'setRdDisc', rdDisc);
  const rd = (REDESIGN[lang] || REDESIGN.fr)[rdDisc];
  document.getElementById('redesign-container').innerHTML = `
    <div class="redesign-intro"><p><strong>${s('rd-original-lbl')}</strong> ${rd.original}</p></div>
    <div class="redesign-grid">
      ${rd.versions.map(v => `
        <div class="redesign-card" style="--lc:${v.lc}">
          <div style="display:flex;align-items:center;gap:1.6rem;margin-bottom:1rem">
            <div style="width:7.2rem;flex-shrink:0">${circleImg(v.level)}</div>
            <div class="rd-level" style="margin-bottom:0">${lang === 'fr' ? 'Niveau' : lang === 'es' ? 'Nivel' : 'Level'} ${v.level} · ${(SCALE[lang]||SCALE.fr)[v.level].fr !== (SCALE[lang]||SCALE.fr)[v.level].name ? (SCALE[lang]||SCALE.fr)[v.level].fr : (SCALE[lang]||SCALE.fr)[v.level].name}</div>
          </div>
          <p>${v.desc}</p>
          <ul>${v.items.map(i => `<li>${i}</li>`).join('')}</ul>
          ${(v.pros && v.pros.length) || (v.cons && v.cons.length) ? `
          <div class="rd-pc">
            <div class="rd-pc-group">${(v.pros||[]).map(p => `<div class="rd-pc-item pro">${p}</div>`).join('')}</div>
            <div class="rd-pc-group rd-pc-cons">${(v.cons||[]).map(c => `<div class="rd-pc-item con">${c}</div>`).join('')}</div>
          </div>` : ''}
        </div>`).join('')}
    </div>`;
}

// ── DISCUSSION ───────────────────────────────────────────────────────────────
function renderDiscussion() {
  document.getElementById('disc-grid').innerHTML = (DISC_DATA[lang] || DISC_DATA.fr).map(d => `
    <div class="disc-card" style="--lc:${d.lc}">
      <h3>${d.title}</h3>
      <ul>${d.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');
  document.getElementById('ref-box').innerHTML = `
    <div class="rt">${s('ref-tag')}</div>
    <p>${s('ref-text')}</p>
    <p class="credit">${s('credit')}</p>`;
}

// ── FOOTER ───────────────────────────────────────────────────────────────────
function renderFooter() {
  const aqpcHref = s('f-link-aqpc-href');
  document.getElementById('site-footer').innerHTML = `
    <div class="footer-inner">
      <div>
        <div class="footer-label">${s('f-workshop')}</div>
        <div class="footer-author">${s('f-author')}</div>
        <div class="footer-links" style="margin-top:1.6rem;">
          <span class="footer-label" style="margin-bottom:0;margin-right:.4rem;">${s('f-links-label')} :</span>
          <a class="footer-link" href="${aqpcHref}" target="_blank" rel="noopener">${s('f-link-aqpc')}</a>
          <span class="footer-links-sep">·</span>
          <a class="footer-link" href="https://lasallecollege.lcieducation.com/" target="_blank" rel="noopener">${s('f-link-lasalle')}</a>
          <span class="footer-links-sep">·</span>
          <a class="footer-link" href="https://lcieducation.com" target="_blank" rel="noopener">${s('f-link-lci')}</a>
          <span class="footer-links-sep">·</span>
          <a class="footer-link" href="https://satuelisa.github.io" target="_blank" rel="noopener">${s('f-link-elisa')}</a>
        </div>
      </div>
      <div>
        <div class="footer-label">${s('f-dev')}</div>
        <p class="footer-dev-text">${s('f-dev-text')}</p>
        <div class="footer-tool">
          <span class="footer-tool-label">${s('f-tool')} :</span>
          ${s('f-tool-text')}
        </div>
      </div>
    </div>`;
}

// ── RENDER ALL ───────────────────────────────────────────────────────────────
function updateHtmlFields() {
  // textContent fields
  const textIds = [
    'hdr-event','hdr-title','hero-sub','meta-lbl-dur','meta-lbl-disc','meta-lbl-act',
    'hero-cta','async-h4','async-p','async-qr-cap','agenda-tag','agenda-h2','agenda-p','context-p',
    'scale-h2','scale-p','scale-next-btn',
    'sort-tag','sort-h2','sort-p','pool-label','sort-check-btn','sort-reset-btn','sort-next-btn',
    'sc-tag','sc-h2','sc-p','sc-prev','sc-next',
    'lessons-tag','lessons-h2','lessons-p','lessons-async-h4','lessons-async-p','lessons-next-btn','rd-tag','rd-h2','rd-p','rd-next-btn','data-tag','data-h2','data-p','data-async-h4','data-async-p','data-next-btn','active-tag','active-h2','active-p','active-next-btn',
    'disc-tag','disc-h2','disc-p',
    'ntab-intro','ntab-lessons','ntab-scale','ntab-sort','ntab-scenario','ntab-redesign','ntab-data','ntab-active','ntab-discussion'
  ];
  textIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = s(id);
  });
  // innerHTML fields (contain HTML tags)
  ['hero-badge','hero-h1','scale-origin-p','scale-crit-callout','active-crit-note','data-callout','env-disclaimer'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = s(id);
  });
}


function renderActive() {
  const data = ACTIVE_DATA[lang] || ACTIVE_DATA.fr;
  document.getElementById('active-grid').innerHTML = data.map(strat => `
    <div class="active-card">
      <div class="active-card-header">
        <span class="active-icon">${strat.icon}</span>
        <span class="active-title">${strat.title}</span>
      </div>
      <p class="active-intro">${strat.intro}</p>
      <ul class="active-examples">
        ${strat.examples.map(ex => `
          <li>
            <span class="active-disc">${ex.disc}</span>
            <span>${ex.text}</span>
          </li>`).join('')}
      </ul>
      <div class="active-note">${strat.note}</div>
    </div>`).join('');
}

const LI_QR = "linkedin.png";
const WORKSHOP_QR = "aqpc2026.png";


function renderClosing() {
  const SHARE = {
    fr: "Je viens de participer à un atelier sur l'utilisation de l'IA dans les évaluations au collégial. L'échelle et les activités interactives sont disponibles librement ici :",
    en: "I just attended a workshop on integrating AI in college assessments. The scale and interactive activities are freely available here:",
    es: "Acabo de participar en un taller sobre el uso de la IA en las evaluaciones en la educación superior. La escala y las actividades interactivas están disponibles libremente aquí:",
  };
  const THANKS = {
    fr: { h: 'Merci pour votre temps.', sub: 'N\'hésitez pas à garder contact.' },
    en: { h: 'Thank you for your time.', sub: 'Feel free to stay in touch.' },
    es: { h: 'Gracias por su tiempo.', sub: 'No duden en mantenerse en contacto.' },
  };
  const SHARE_LABEL = { fr: 'Partager sur les réseaux', en: 'Share on socials', es: 'Compartir en redes' };
  const COPIED     = { fr: 'Copié !', en: 'Copied!', es: '¡Copiado!' };
  const CONTACT_TITLE = {
    fr: 'Doyen.ne Tech & Design<br>Collège LaSalle Montréal, LCI Éducation',
    en: 'Dean, Tech & Design<br>LaSalle College Montréal, LCI Education',
    es: 'Doyen.ne Tech & Design<br>Collège LaSalle Montréal, LCI Education',
  };
  const LI_LABEL  = { fr: 'LinkedIn', en: 'LinkedIn', es: 'LinkedIn' };
  const WS_LABEL  = { fr: 'Site personnel', en: 'Personal website', es: 'Sitio personal' };
  const SHARE_NOTE = { fr: 'Texte à copier :', en: 'Text to copy:', es: 'Texto para copiar:' };

  const t = lang in THANKS ? THANKS[lang] : THANKS.fr;
  const shareText = (SHARE[lang] || SHARE.fr) + ' https://satuelisa.github.io/talks/aqpc2026.html';
  const workshopUrl = 'https://satuelisa.github.io/talks/aqpc2026.html';

  document.getElementById('closing-section').innerHTML = `
    <h2 class="closing-thankyou">${t.h}</h2>
    <p class="closing-sub">${t.sub}</p>
    <div class="closing-grid">
      <div class="contact-card">
        <div class="contact-card-inner">
          <div class="contact-qr"><img src="${LI_QR}" alt="LinkedIn QR code"></div>
          <div>
            <div class="contact-name">Elisa Schaeffer</div>
            <div class="contact-title">${CONTACT_TITLE[lang] || CONTACT_TITLE.en}</div>
            <div class="contact-links">
              <a class="contact-link" href="https://www.linkedin.com/in/satuelisa/" target="_blank" rel="noopener">linkedin.com/in/satuelisa</a>
              <a class="contact-link" href="https://satuelisa.github.io" target="_blank" rel="noopener">satuelisa.github.io</a>
              <a class="contact-link" href="mailto:elisa.schaeffer@gmail.com">elisa.schaeffer@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="share-card">
        <h3>${SHARE_LABEL[lang] || SHARE_LABEL.en}</h3>
        <p class="share-note">${SHARE_NOTE[lang] || SHARE_NOTE.en}</p>
        <div class="share-preview">${shareText}</div>
        <div style="display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap">
          <button class="share-btn" onclick="copyShareText('${shareText.replace(/'/g, "\\'")}')">
            📋 ${SHARE_LABEL[lang] || SHARE_LABEL.en}
          </button>
          <span class="share-copied" id="share-copied">${COPIED[lang] || COPIED.en}</span>
        </div>
      </div>
    </div>`;
}

function copyShareText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const el = document.getElementById('share-copied');
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2500);
  });
}


// ── LESSONS DATA ─────────────────────────────────────────────────────────────
const LESSONS = {
  fr: {
    issues: {
      label: 'Enjeux identifiés',
      groups: [
        { icon:'🤖', title:"Délégation totale à l'IA sans compréhension", body:"L'enjeu le plus fréquemment cité. Les étudiants soumettent des travaux générés intégralement par l'IA sans les relire, les comprendre ni les adapter. Symptômes : langage générique décalé du niveau habituel, incapacité à défendre oralement le travail, formulations typiquement « IA », incohérence entre la production écrite et les échanges en classe.", programs:"Design de mode, Commercialisation, Gestion, Hôtellerie, Informatique, Programmation" },
        { icon:'💻', title:"Impossibilité de valider la compréhension en contexte numérique", body:"Dans les programmes techniques où les examens se déroulent sur ordinateur ou à distance, l'IA peut générer instantanément la réponse attendue. Certaines évaluations datent d'avant l'ère de l'IA générative et ne contiennent aucune règle d'utilisation.", programs:"Informatique — Réseaux, Jeux vidéo, Programmation, TEE-TES, Pré-universitaires" },
        { icon:'❓', title:"Ambiguïté des règles et absence d'encadrement explicite", body:"Absence de règles claires et communes sur ce qui est permis — ni au niveau du département, ni du cours. Cela crée une inégalité entre étudiants et place les enseignants en position inconfortable. L'absence d'encadrement favorise la dépendance excessive.", programs:"Gestion, Jeux vidéo, Informatique, Programmation, Commercialisation" },
        { icon:'📱', title:"Contournement physique ou numérique lors des examens", body:"Même en présentiel et à livre fermé : usage du téléphone aux toilettes, mémorisation de textes générés par l'IA, feuilles de notes préparées intégralement par l'IA, dissimulation d'appareils.", programs:"Formation générale français, Pré-universitaires, TEE-TES (comodal)" },
        { icon:'🎨', title:"Enjeux spécifiques à la production créative et visuelle", body:"Moodboards composés majoritairement d'images IA, références non vérifiables, incohérence entre recherche visuelle et réalisation finale. Les outils gratuits ont des limites importantes pour un usage professionnel.", programs:"Design de mode, Commercialisation de la mode" },
      ]
    },
    solutions: {
      label: 'Solutions proposées',
      groups: [
        { icon:'📋', title:"Rendre le processus visible et traçable", body:"Évaluer le cheminement plutôt que le seul produit final.", items:["Remises intermédiaires (brouillons, modules progressifs)","Journal de progression avec annotations et captures d'écran","Suivi en mode coaching avec validation hebdomadaire","Document partagé permettant de suivre l'évolution en temps réel","Exiger la provenance des images (date, plateforme, prompt)"], programs:"Design de mode, Gestion, Hôtellerie, TEE-TES, Informatique" },
        { icon:'🗣️', title:"Intégrer une composante orale obligatoire", body:"L'oral est unanimement reconnu comme le meilleur outil pour valider la compréhension réelle.", items:["Défense orale avec période de questions ciblées","Présentation devant un jury externe","Entrevue individuelle pour valider les réponses soumises en ligne","Questions spontanées en cours de réalisation","Enregistrement vidéo individuel à durée limitée"], programs:"Gestion, Design de mode, Hôtellerie, Informatique, Programmation, TEE-TES" },
        { icon:'🔄', title:"Intégrer l'IA dans l'évaluation plutôt que de l'en exclure", body:"Transformer l'IA en objet d'examen plutôt qu'en moyen de tricher.", items:["Soumettre la conversation IA utilisée comme pièce jointe","Générer un résultat IA, produire sa propre version, comparer","Comparer sa propre analyse à celle produite par l'IA","Utiliser l'IA en classe sous supervision pour explorer un sujet","Exiger une déclaration d'utilisation de l'IA"], programs:"Jeux vidéo, Programmation, Gestion, Gen Ed anglais, Informatique" },
        { icon:'✏️', title:"Repenser la tâche pour réduire la substituabilité", body:"Modifier la tâche elle-même pour qu'elle soit moins facilement réalisable par l'IA.", items:["Fournir un extrait inconnu le jour de l'examen","Exiger une analyse appliquée à une situation spécifique","Ancrer la tâche dans le projet personnel réel de l'étudiant","Transformer la feuille de notes en mots-clés seulement, approuvée à l'avance","Utiliser des images comme amorce, inaccessibles à l'IA"], programs:"Gen Ed anglais, Formation générale français, Pré-universitaires, TEE-TES, Hôtellerie" },
        { icon:'📐', title:"Clarifier et harmoniser les règles d'utilisation", body:"Besoin d'un encadrement institutionnel clair, cohérent et communiqué explicitement.", items:["Indiquer systématiquement le niveau d'utilisation de l'IA autorisé dans chaque évaluation","Harmoniser les pratiques au sein du département","Développer une grille commune d'évaluation de l'authenticité","Former enseignants et étudiants à l'utilisation éthique et critique"], programs:"Gestion, Commercialisation, Informatique, Design de mode" },
      ]
    },
    observations: {
      label: 'Observations transversales',
      groups: [
        { icon:'💡', title:"Convergence remarquable entre les disciplines", body:"Les mêmes trois réponses émergent spontanément dans presque tous les programmes : rendre le processus visible, ajouter une composante orale, reformuler la tâche. Cette convergence n'est pas coordonnée — elle reflète une réflexion indépendante dans chaque équipe." },
        { icon:'🔁', title:"De la restriction à l'encadrement", body:"Les équipes techniques (Jeux vidéo, Programmation, Informatique) ont explicitement écarté la logique d'interdiction totale pour adopter une posture d'encadrement critique. Demander aux étudiants de soumettre leurs conversations IA dans l'examen est particulièrement significatif." },
        { icon:'🌐', title:"Les cours en ligne posent un défi structurel", body:"Il est techniquement impossible d'empêcher l'accès à l'IA lors d'un examen à distance. Les solutions proposées (entrevues, vidéo, tâches ancrées dans des contenus non publics) sont pertinentes mais exigeantes en temps enseignant." },
        { icon:'🎓', title:"La formation reste un enjeu transversal", body:"L'absence de formation systématique — pour les enseignants comme pour les étudiants — est mentionnée dans plusieurs programmes. Les enseignants demandent à être outillés avant de pouvoir encadrer l'IA efficacement." },
      ]
    }
  },
  en: {
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
        { icon:'🗣️', title:"Adding a mandatory oral component", body:"The oral is unanimously recognised as the best tool for verifying genuine understanding.", items:["Oral defence with targeted questions","Presentation before an external jury","Individual interview to validate answers submitted online","Spontaneous questions from the instructor during the work period","Individual time-limited video recording"], programs:"Management, Fashion Design, Hospitality, Networking, Programming, TEE-TES" },
        { icon:'🔄', title:"Integrating AI into the assessment rather than excluding it", body:"Making AI an object of examination rather than a means to cheat.", items:["Submitting the AI conversation as an exam attachment","Generating an AI output, producing your own version, and comparing","Comparing your own analysis to one generated by AI","Using AI in class under supervision to explore a topic","Requiring an AI use declaration"], programs:"Video Games, Programming, Management, English Gen Ed, Networking" },
        { icon:'✏️', title:"Redesigning the task to reduce substitutability", body:"Modifying the task itself so it is less easily completed by AI.", items:["Providing an unknown excerpt on the day of the exam","Requiring analysis applied to a specific situation rather than a general question","Anchoring the task in the student's own real project","Converting the notes sheet to keywords only, approved in advance","Using images as evaluation prompts, inaccessible to AI"], programs:"English Gen Ed, French Gen Ed, Pre-university, TEE-TES, Hospitality" },
        { icon:'📐', title:"Clarifying and harmonising rules of use", body:"Need for clear, consistent institutional guidelines explicitly communicated to students.", items:["Systematically stating the permitted AI use level in each assessment","Harmonising practices within the same department","Developing a shared rubric for evaluating authenticity","Training instructors and students in ethical, critical AI use"], programs:"Management, Fashion Marketing, Networking, Fashion Design" },
      ]
    },
    observations: {
      label: 'Cross-cutting observations',
      groups: [
        { icon:'💡', title:"Remarkable convergence across disciplines", body:"The same three responses emerged independently in almost every programme: make the process visible, add an oral component, redesign the task to reduce substitutability. This convergence was not coordinated — it arose from independent reflection in each team." },
        { icon:'🔁', title:"From prohibition to scaffolded use", body:"Technical teams (Video Games, Programming, Networking) explicitly moved away from blanket prohibition toward critical scaffolding. Having students submit their AI conversations as part of the exam is particularly significant." },
        { icon:'🌐', title:"Online courses pose a structural challenge", body:"It is technically impossible to prevent AI access during a remote computer-based exam. Proposed solutions (individual interviews, video recordings, tasks anchored in non-public content) are pertinent but teacher-time intensive." },
        { icon:'🎓', title:"Training remains a transversal issue", body:"The absence of systematic training — for instructors as well as students — is mentioned across several programmes. Instructors ask to be equipped before they can effectively scaffold AI use in their courses." },
      ]
    }
  },
  es: {
    issues: {
      label: 'Problemas identificados',
      groups: [
        { icon:'🤖', title:"Delegación total a la IA sin comprensión", body:"El problema más citado. Los estudiantes entregan trabajos generados íntegramente por IA sin revisarlos, comprenderlos ni adaptarlos. Síntomas: lenguaje genérico inconsistente, incapacidad para defender oralmente el trabajo, formulaciones típicamente IA, incoherencia entre producción escrita e intercambios en clase.", programs:"Diseño de moda, Comercialización, Gestión, Hotelería, Informática, Programación" },
        { icon:'💻', title:"Imposibilidad de verificar la comprensión en entornos digitales", body:"En programas técnicos donde los exámenes se realizan en computadora o a distancia, la IA puede generar instantáneamente la respuesta esperada. Algunas evaluaciones son anteriores a la IA generativa y no contienen reglas de uso.", programs:"Redes informáticas, Videojuegos, Programación, TEE-TES, Preuniversitarios" },
        { icon:'❓', title:"Ambigüedad de reglas y ausencia de pautas explícitas", body:"No existen reglas claras y compartidas sobre lo que está permitido. Esto crea desigualdad entre estudiantes y pone a los docentes en una posición difícil. La ausencia de pautas favorece la dependencia excesiva.", programs:"Gestión, Videojuegos, Informática, Programación, Comercialización" },
        { icon:'📱', title:"Evasión física o digital durante los exámenes", body:"Incluso en evaluaciones presenciales: uso del teléfono en el baño, memorización de textos IA, hojas de notas preparadas íntegramente por IA, dispositivos ocultos.", programs:"Formación general (francés), Preuniversitarios, TEE-TES (bimodal)" },
        { icon:'🎨', title:"Problemas específicos de la producción creativa y visual", body:"Moodboards compuestos mayoritariamente de imágenes IA, referencias no verificables, incoherencia entre investigación visual y resultado final. Las herramientas gratuitas tienen limitaciones funcionales importantes.", programs:"Diseño de moda, Comercialización de la moda" },
      ]
    },
    solutions: {
      label: 'Soluciones propuestas',
      groups: [
        { icon:'📋', title:"Hacer el proceso visible y rastreable", body:"Evaluar el recorrido de aprendizaje y no solo el producto final.", items:["Entregas progresivas (borradores, módulos a lo largo del semestre)","Diario de progreso con anotaciones y capturas de pantalla","Modelo de acompañamiento con validación semanal","Documento compartido para seguir la evolución en tiempo real","Exigir el origen de las imágenes (fecha, plataforma, prompt)"], programs:"Diseño de moda, Gestión, Hotelería, TEE-TES, Informática" },
        { icon:'🗣️', title:"Incorporar un componente oral obligatorio", body:"La oralidad es reconocida unánimemente como la mejor herramienta para verificar la comprensión real.", items:["Defensa oral con preguntas dirigidas","Presentación ante un jurado externo","Entrevista individual para validar respuestas en línea","Preguntas espontáneas durante la realización del trabajo","Grabación de video individual con tiempo limitado"], programs:"Gestión, Diseño de moda, Hotelería, Informática, Programación, TEE-TES" },
        { icon:'🔄', title:"Integrar la IA en la evaluación en lugar de excluirla", body:"Transformar la herramienta en objeto de examen más que en medio para hacer trampa.", items:["Entregar la conversación IA como parte del examen","Generar un resultado IA, producir la propia versión y comparar","Comparar el propio análisis con el generado por la IA","Usar la IA en clase bajo supervisión para explorar un tema","Exigir una declaración de uso de IA"], programs:"Videojuegos, Programación, Gestión, Formación general inglés, Informática" },
        { icon:'✏️', title:"Rediseñar la tarea para reducir la sustituibilidad", body:"Modificar la tarea en sí para que sea menos fácilmente completable por la IA.", items:["Proporcionar un fragmento desconocido el día del examen","Exigir análisis aplicado a una situación específica","Anclar la tarea en el proyecto personal real del estudiante","Convertir la hoja de notas en solo palabras clave, aprobada de antemano","Usar imágenes como punto de partida, inaccesibles a la IA"], programs:"Formación general inglés y francés, Preuniversitario, TEE-TES, Hotelería" },
        { icon:'📐', title:"Clarificar y armonizar las reglas de uso", body:"Se necesita un encuadre institucional claro y comunicado explícitamente.", items:["Indicar el nivel de uso de IA permitido en cada evaluación","Armonizar las prácticas dentro del departamento","Desarrollar una rúbrica común de autenticidad","Capacitar a docentes y estudiantes en uso ético y crítico"], programs:"Gestión, Comercialización, Informática, Diseño de moda" },
      ]
    },
    observations: {
      label: 'Observaciones transversales',
      groups: [
        { icon:'💡', title:"Convergencia notable entre disciplinas", body:"Las mismas tres respuestas surgieron de forma independiente en casi todos los programas: hacer el proceso visible, añadir un componente oral, rediseñar la tarea. Esta convergencia no fue coordinada — surgió de la reflexión independiente de cada equipo." },
        { icon:'🔁', title:"De la prohibición al acompañamiento", body:"Los equipos técnicos (Videojuegos, Programación, Redes) abandonaron explícitamente la prohibición total para adoptar un acompañamiento crítico. Pedir a los estudiantes que entreguen sus conversaciones IA es especialmente significativo." },
        { icon:'🌐', title:"Los cursos en línea plantean un desafío estructural", body:"Es técnicamente imposible impedir el acceso a la IA durante un examen a distancia. Las soluciones propuestas son pertinentes pero exigentes en tiempo docente." },
        { icon:'🎓', title:"La formación sigue siendo un desafío transversal", body:"La ausencia de formación sistemática — para docentes y estudiantes — se menciona en varios programas. Los docentes piden ser equipados antes de poder acompañar eficazmente el uso de la IA." },
      ]
    }
  }
};

function renderLessons() {
  const d = LESSONS[lang] || LESSONS.fr;
  const renderGroup = (g) => {
    const items = g.items ? `<ul>${g.items.map(i => `<li>${i}</li>`).join('')}</ul>` : '';
    const progs = g.programs ? `<p class="lessons-programs">Programmes : ${g.programs}</p>` : '';
    return `<details class="lessons-group">
      <summary>${g.icon} ${g.title}</summary>
      <div class="lessons-body"><p>${g.body}</p>${items}${progs}</div>
    </details>`;
  };
  document.getElementById('lessons-content').innerHTML =
    [d.issues, d.solutions, d.observations].map(sec =>
      `<div class="lessons-sub">${sec.label}</div>${sec.groups.map(renderGroup).join('')}`
    ).join('');
}

function renderAll() {
  renderLessons();
  updateHtmlFields();
  renderAgenda();
  renderScale();
  renderDiscSelector('disc-selector-sort', 'setSortDisc', sortDisc);
  renderSort();
  renderDiscSelector('disc-selector-sc', 'setScDisc', scDisc);
  renderScenario();
  renderDiscSelector('disc-selector-rd', 'setRdDisc', rdDisc);
  renderRedesign();
  renderActive();
  renderDiscussion();
  renderClosing();
  renderTimerPhases();
  updateTimerDisplay();
  renderFooter();
}


// ── BOOT ─────────────────────────────────────────────────────────────────────
renderAll();



// ── VISUALISER ──────────────────────────────────────────────────────────────
    (function() {
    const VIZ_PROGRAMS = {
      "420.BR": {
        "name": "420.BR — Gestion de réseaux et sécurité",
        "courses": [
          {"session":1,"title":"Mathématiques appliquées à l'informatique","course_level":2,"eval_levels":[]},
          {"session":1,"title":"Soutien technique matériel et logiciel","course_level":3,"eval_levels":[3,0,0]},
          {"session":1,"title":"Système d'exploitation client","course_level":3,"eval_levels":[0,2,0]},
          {"session":1,"title":"Systèmes d'exploitation libres I","course_level":3,"eval_levels":[0,2,0]},
          {"session":1,"title":"Introduction à la virtualisation et infonuagique","course_level":3,"eval_levels":[3,0,0]},
          {"session":2,"title":"Principes de base d'Azure","course_level":3,"eval_levels":[3,2,0]},
          {"session":2,"title":"Réseaux, routage et commutation","course_level":0,"eval_levels":[]},
          {"session":2,"title":"Système d'exploitation serveur I","course_level":3,"eval_levels":[0,2,0]},
          {"session":3,"title":"Réseau, Sécurité et Automatisation","course_level":0,"eval_levels":[]},
          {"session":3,"title":"Systèmes d'exploitation libres II","course_level":3,"eval_levels":[0,0]},
          {"session":3,"title":"Système d'exploitation serveur II","course_level":3,"eval_levels":[0,2]},
          {"session":4,"title":"Cybersécurité I","course_level":3,"eval_levels":[]},
          {"session":4,"title":"Administration Azure","course_level":3,"eval_levels":[0,3,0]},
          {"session":4,"title":"Système d'exploitation serveur III","course_level":3,"eval_levels":[0,2]},
          {"session":4,"title":"Langages de programmation et de script","course_level":3,"eval_levels":[0,2,0]},
          {"session":5,"title":"Réseaux d'entreprise I","course_level":3,"eval_levels":[0,0]},
          {"session":5,"title":"Installation et configuration d'un serveur de messagerie","course_level":3,"eval_levels":[0,2]},
          {"session":5,"title":"Intégration professionnelle","course_level":null,"eval_levels":[]},
          {"session":5,"title":"Sécurité Azure","course_level":3,"eval_levels":[0,2]},
          {"session":6,"title":"Réseaux d'entreprise II","course_level":3,"eval_levels":[0,0]},
          {"session":6,"title":"Étude de cas intégratrice de compétences","course_level":null,"eval_levels":[]},
          {"session":6,"title":"Gestion d'un parc informatique","course_level":null,"eval_levels":[]},
          {"session":6,"title":"Intégration en entreprise - gestion de réseaux et sécurité","course_level":null,"eval_levels":[]},
          {"session":6,"title":"Cybersécurité II","course_level":null,"eval_levels":[]}
        ]
      },
      "420.BP": {
        "name": "420.BP — Programmation (Technique de l'informatique)",
        "courses": [
          {"session":1,"title":"Mathématiques appliquées à l'informatique","course_level":0,"eval_levels":[0,0,0,0]},
          {"session":1,"title":"Algorithmes et programmation","course_level":0,"eval_levels":[0,0,0,0]},
          {"session":1,"title":"Architecture des ordinateurs","course_level":0,"eval_levels":[0,0,1]},
          {"session":1,"title":"Développement web client I","course_level":0,"eval_levels":[0,1,0]},
          {"session":2,"title":"Bases de données I","course_level":0,"eval_levels":[0,1,0]},
          {"session":2,"title":"Concepts de la programmation orientée objet","course_level":0,"eval_levels":[0,1,0]},
          {"session":2,"title":"Développement web client II","course_level":0,"eval_levels":[0,1,0]},
          {"session":3,"title":"Modélisation UML","course_level":null,"eval_levels":[]},
          {"session":3,"title":"Bases de données II","course_level":null,"eval_levels":[]},
          {"session":3,"title":"Développement d'applications multi-tiers","course_level":null,"eval_levels":[]},
          {"session":3,"title":"Langage de script","course_level":null,"eval_levels":[]},
          {"session":4,"title":"Développement d'applications web serveur I","course_level":null,"eval_levels":[]},
          {"session":4,"title":"Programmation orientée objet avancée","course_level":null,"eval_levels":[]},
          {"session":4,"title":"Structure de données","course_level":null,"eval_levels":[]},
          {"session":5,"title":"Développement mobile Android","course_level":null,"eval_levels":[]},
          {"session":5,"title":"Langage de script II","course_level":null,"eval_levels":[]},
          {"session":5,"title":"Développement d'applications web serveur II","course_level":null,"eval_levels":[]},
          {"session":5,"title":"Système d'exploitation et réseautique","course_level":null,"eval_levels":[]},
          {"session":5,"title":"Intégration professionnelle","course_level":null,"eval_levels":[]},
          {"session":6,"title":"Développement mobile IOS","course_level":null,"eval_levels":[]},
          {"session":6,"title":"Implémentation d'un système d'information","course_level":null,"eval_levels":[]},
          {"session":6,"title":"Apprentissage machine appliqué","course_level":null,"eval_levels":[]},
          {"session":6,"title":"Développement d'applications web serveur III","course_level":null,"eval_levels":[]},
          {"session":6,"title":"Intégration en entreprise : programmation","course_level":null,"eval_levels":[]}
        ]
      },
      "420.BX": {
        "name": "420.BX — Programmation de jeux vidéo (Technique de l'informatique)",
        "courses": [
          {"session":1,"title":"Mathématiques appliquées à l'informatique","course_level":0,"eval_levels":[]},
          {"session":1,"title":"Introduction à la programmation","course_level":0,"eval_levels":[]},
          {"session":1,"title":"Outils informatiques","course_level":2,"eval_levels":[]},
          {"session":1,"title":"L'industrie de jeu vidéo","course_level":2,"eval_levels":[]},
          {"session":2,"title":"Mathématiques appliquées aux jeux vidéo","course_level":null,"eval_levels":[0,0,1,0]},
          {"session":2,"title":"Programmation orienté objet","course_level":null,"eval_levels":[0,1,0]},
          {"session":2,"title":"Système d'information","course_level":1,"eval_levels":[]},
          {"session":3,"title":"Système d'exploitation","course_level":2,"eval_levels":[]},
          {"session":3,"title":"Bases de données","course_level":null,"eval_levels":[0,1,0]},
          {"session":3,"title":"Programmation orienté objet II","course_level":null,"eval_levels":[0,1,0]},
          {"session":3,"title":"Statistiques appliquées aux jeux vidéos","course_level":null,"eval_levels":[0,1,0]},
          {"session":3,"title":"Moteur de jeu I","course_level":1,"eval_levels":[]},
          {"session":4,"title":"Moteur de jeu II","course_level":2,"eval_levels":[]},
          {"session":4,"title":"Structures de données et algorithmes","course_level":null,"eval_levels":[1,0,1]},
          {"session":4,"title":"Projet intégrateur de compétences","course_level":3,"eval_levels":[]},
          {"session":4,"title":"Méthodologie de projet","course_level":2,"eval_levels":[]},
          {"session":5,"title":"Développement d'applications bases de données","course_level":null,"eval_levels":[0,2,0]},
          {"session":5,"title":"Moteur de jeu III","course_level":2,"eval_levels":[]},
          {"session":5,"title":"Développement d'applications web","course_level":null,"eval_levels":[1,2,0]},
          {"session":5,"title":"Intégration professionnelle","course_level":4,"eval_levels":[]},
          {"session":5,"title":"Portfolio","course_level":4,"eval_levels":[]},
          {"session":6,"title":"Graphismes 3D","course_level":1,"eval_levels":[]},
          {"session":6,"title":"Intégration en entreprise: programmation en jeux vidéo","course_level":null,"eval_levels":[1,0,0]}
        ]
      },
      "574.CX": {
        "name": "574.CX — Design UI/UX (Production 3D et synthèse d'images)",
        "courses": [
          {"session":1,"title":"Introduction à l'imagerie numérique","course_level":2,"eval_levels":[2,1,2,2]},
          {"session":1,"title":"Outils informatiques","course_level":2,"eval_levels":[2,2,1]},
          {"session":1,"title":"Systèmes d'information","course_level":2,"eval_levels":[1,2,3]},
          {"session":1,"title":"Dessin","course_level":1,"eval_levels":[1,2,4,3]},
          {"session":1,"title":"Conception interactive","course_level":3,"eval_levels":[2,2,3]},
          {"session":1,"title":"Design de jeu","course_level":4,"eval_levels":[3,4,4]},
          {"session":2,"title":"Dessin numérique","course_level":2,"eval_levels":[1,2,3,2]},
          {"session":2,"title":"Introduction à l'intelligence artificielle","course_level":4,"eval_levels":[3,4,4]},
          {"session":2,"title":"Profession et industrie","course_level":2,"eval_levels":[1,2,2]},
          {"session":2,"title":"Outils de programmation","course_level":4,"eval_levels":[4,4,3]},
          {"session":3,"title":"Génération d'images","course_level":3,"eval_levels":[2,4,3]},
          {"session":3,"title":"Algorithmes et programmation","course_level":2,"eval_levels":[3,2,2]},
          {"session":3,"title":"Narration visuelle et communication","course_level":2,"eval_levels":[0,1,3,2]},
          {"session":3,"title":"Techniques d'animation","course_level":2,"eval_levels":[0,1,2,2]},
          {"session":4,"title":"Environnement graphique","course_level":2,"eval_levels":[1,2,2,2]},
          {"session":4,"title":"Lumières et ambiance","course_level":2,"eval_levels":[1,2,2]},
          {"session":4,"title":"Gestion de projet","course_level":1,"eval_levels":[1,2,1]},
          {"session":4,"title":"Simulation computationnelle","course_level":4,"eval_levels":[3,3,4]},
          {"session":5,"title":"Techniques immersives","course_level":3,"eval_levels":[3,3,3,3]},
          {"session":5,"title":"Utilisabilité","course_level":2,"eval_levels":[2,3,2,3]},
          {"session":5,"title":"Project intégrateur de compétences","course_level":3,"eval_levels":[3,3,3]},
          {"session":6,"title":"Recherche, éthique et profession","course_level":1,"eval_levels":[0,1,1]},
          {"session":6,"title":"Créativité, innovation et pensée critique","course_level":4,"eval_levels":[3,4,3]},
          {"session":6,"title":"Composition et rendu","course_level":2,"eval_levels":[3,2,2]},
          {"session":6,"title":"Communication visuelle","course_level":2,"eval_levels":[0,1,2,2]},
          {"session":6,"title":"Stage","course_level":2,"eval_levels":[2,2,2,2]}
        ]
      }
    };

    const VIZ_LEVELS = [
      { id:0, color:'var(--l0)', icon:'img/AI_0_circle.png' },
      { id:1, color:'var(--l1)', icon:'img/AI_1_circle.png' },
      { id:2, color:'var(--l2)', icon:'img/AI_2_circle.png' },
      { id:3, color:'var(--l3)', icon:'img/AI_3_circle.png' },
      { id:4, color:'var(--l4)', icon:'img/AI_4_circle.png' },
    ];

    // granularity state: both start active
    let vizGran = { course: true, eval: true };

    function toggleGran(which) {
      const other = which === 'course' ? 'eval' : 'course';
      if (vizGran[which] && !vizGran[other]) {
        // turning off the only active one → turn the other on instead
        vizGran[which] = false;
        vizGran[other] = true;
      } else {
        vizGran[which] = !vizGran[which];
      }
      document.getElementById('gran-course').classList.toggle('active', vizGran.course);
      document.getElementById('gran-eval').classList.toggle('active', vizGran.eval);
      vizRender();
    }

    function vizBuildCounts(courses) {
      const counts = {};
      VIZ_LEVELS.forEach(l => counts[l.id] = { count: 0, titles: [] });
      courses.forEach(c => {
        if (vizGran.course && c.course_level !== null && c.course_level !== undefined) {
          counts[c.course_level].count++;
          counts[c.course_level].titles.push(c.title);
        }
        if (vizGran.eval) {
          c.eval_levels.forEach(lv => {
            counts[lv].count++;
            const lbl = (vizGran.course && vizGran.eval) ? `[éval.] ${c.title}` : c.title;
            if (!counts[lv].titles.includes(lbl)) counts[lv].titles.push(lbl);
          });
        }
      });
      return counts;
    }

    function vizRender() {
      const chart = document.getElementById('viz-chart');
      chart.innerHTML = '';
      Object.entries(VIZ_PROGRAMS).forEach(([progId, prog]) => {
        const block = document.createElement('div');
        block.className = 'viz-prog-block';
        const nameDiv = document.createElement('div');
        nameDiv.className = 'viz-prog-name';
        nameDiv.textContent = prog.name;
        block.appendChild(nameDiv);
        const row = document.createElement('div');
        row.className = 'viz-sessions';
        for (let s = 1; s <= 6; s++) {
          const col = document.createElement('div');
          col.className = 'viz-sess-col';
          const lbl = document.createElement('div');
          lbl.className = 'viz-sess-lbl';
          lbl.textContent = `S${s}`;
          col.appendChild(lbl);
          const courses = prog.courses.filter(c => c.session === s);
          const counts = vizBuildCounts(courses);
          const total = Object.values(counts).reduce((a,b) => a + b.count, 0);
          const stack = document.createElement('div');
          stack.className = 'viz-stack';
          if (total === 0) {
            stack.innerHTML = '<div class="viz-nodata"><span class="viz-nodata-txt">—</span></div>';
          } else {
            const MAX_H = 140;
            VIZ_LEVELS.forEach(lv => {
              const e = counts[lv.id];
              if (!e || e.count === 0) return;
              const h = Math.max(10, Math.round(e.count / total * MAX_H));
              const seg = document.createElement('div');
              seg.className = 'viz-seg';
              seg.dataset.lv = lv.id;
              seg.style.height = h + 'px';
              if (e.count > 1 || h > 18) {
                const cnt = document.createElement('span');
                cnt.className = 'viz-seg-cnt';
                cnt.textContent = e.count;
                seg.appendChild(cnt);
              }
              seg.addEventListener('mouseenter', ev => vizShowTT(ev, progId, s, lv, e.titles));
              seg.addEventListener('mousemove', vizMoveTT);
              seg.addEventListener('mouseleave', vizHideTT);
              stack.appendChild(seg);
            });
          }
          col.appendChild(stack);
          row.appendChild(col);
        }
        block.appendChild(row);
        chart.appendChild(block);
      });
    }

    function vizShowTT(e, progId, sess, lv, titles) {
      const tt = document.getElementById('viz-tooltip');
      document.getElementById('vtt-lv').style.color = lv.color;
      document.getElementById('vtt-lv').textContent = lv.lbl;
      document.getElementById('vtt-prog').textContent = VIZ_PROGRAMS[progId].name;
      document.getElementById('vtt-sess').textContent = `Session ${sess}`;
      const cl = document.getElementById('vtt-courses');
      cl.innerHTML = titles.map(t => `<div class="vtt-course">${t}</div>`).join('');
      tt.classList.add('visible');
      vizPosTT(e);
    }
    function vizMoveTT(e) { vizPosTT(e); }
    function vizPosTT(e) {
      const tt = document.getElementById('viz-tooltip');
      const m = 12, w = tt.offsetWidth || 260, h = tt.offsetHeight || 180;
      let x = e.clientX + m, y = e.clientY + m;
      if (x + w > window.innerWidth - m) x = e.clientX - w - m;
      if (y + h > window.innerHeight - m) y = e.clientY - h - m;
      tt.style.left = x + 'px'; tt.style.top = y + 'px';
    }
    function vizHideTT() { document.getElementById('viz-tooltip').classList.remove('visible'); }

    // Build legend with circle icons
    const leg = document.getElementById('viz-legend');
    VIZ_LEVELS.forEach(lv => {
      const item = document.createElement('div');
      item.className = 'viz-legend-item';
      item.innerHTML = `<img src="${lv.icon}" alt="Niveau ${lv.id}" style="width:2.8rem;height:2.8rem;object-fit:contain;flex-shrink:0;">`;
      leg.appendChild(item);
    });

    vizRender();
    })();
