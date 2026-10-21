// ---------------------------------------------------------------------------
// Dados — edite aqui para adicionar/remover projectos e competências.
// Textos traduzíveis usam { pt, en }; texto simples vale para os dois idiomas.
// ---------------------------------------------------------------------------
const CATEGORIES = {
  energia: { pt: 'Energia', en: 'Energy' },
  educacao: { pt: 'Educação', en: 'Education' },
  governo: { pt: 'Governo & Social', en: 'Government & Social' },
  fintech: { pt: 'Fintech & Pagamentos', en: 'Fintech & Payments' },
  eventos: { pt: 'Eventos & Desporto', en: 'Events & Sports' },
  ia: { pt: 'IA & Agro', en: 'AI & Agri' },
  mobile: 'Mobile',
  erp: { pt: 'ERP & Gestão', en: 'ERP & Management' },
};

const PROJECTS = [
  {
    title: 'SolarEc — FUNAE, F.P.',
    desc: {
      pt: 'Sistema de venda de energia pré-paga e gestão de mini-redes solares: vendas e emissão de tokens STS, rede de contadores e caixas, segurança RBAC.',
      en: 'Prepaid energy sales and solar mini-grid management system: sales and STS token issuance, meter and cashier network, RBAC security.',
    },
    img: 'solarec.webp',
    url: 'https://teste-solarec.funaeprepago.co.mz/auth/login',
    cats: ['energia', 'fintech'],
    tags: ['Next.js', { pt: 'Energia pré-paga', en: 'Prepaid energy' }, 'STS', 'RBAC'],
  },
  {
    title: { pt: 'AIISMG — IA para o pequeno agricultor', en: 'AIISMG — AI for smallholder farmers' },
    desc: {
      pt: 'Plataforma que liga pequenos produtores a previsões climáticas localizadas e recomendações de cultivo por USSD e SMS — sem precisar de internet.',
      en: 'Platform that connects smallholder farmers to localised weather forecasts and crop recommendations via USSD and SMS — no internet required.',
    },
    img: 'aiismg.webp',
    url: 'https://aiismg.cloud/',
    cats: ['ia'],
    tags: [{ pt: 'IA / LLMs', en: 'AI / LLMs' }, 'USSD', 'SMS', { pt: 'Contexto rural', en: 'Rural context' }],
  },
  {
    title: 'PALMA Wallet — Palma Seguros',
    desc: {
      pt: 'Plataforma de cobrança diária e gestão operacional: pagamentos via M-Pesa, e-Mola e mKesh, gestão de caixa, consultas e emissão de comprovativos.',
      en: 'Daily collections and operations platform: M-Pesa, e-Mola and mKesh payments, cash management, policy lookups and receipt issuance.',
    },
    img: 'palma.webp',
    url: 'https://palma-wallet.palmaseguros.co.mz',
    cats: ['fintech'],
    tags: ['M-Pesa', 'e-Mola', 'mKesh', { pt: 'Conciliação', en: 'Reconciliation' }],
  },
  {
    title: 'Fénix Delivery',
    desc: {
      pt: 'App de entregas de comida, bebidas e mercearia, disponível na App Store e Google Play, com landing page web.',
      en: 'Food, drinks and grocery delivery app, available on the App Store and Google Play, with a web landing page.',
    },
    img: 'fenix.webp',
    url: 'https://fenixdelivery.co.mz/',
    cats: ['mobile'],
    tags: ['iOS', 'Android', 'Delivery'],
    stores: {
      play: 'https://play.google.com/store/apps/details?id=com.eniomarcosm.fenixdelivery',
      apple: 'https://apps.apple.com/mz/app/f%C3%A9nix-delivery/id6751499374',
    },
  },
  {
    title: { pt: 'SIIP — Universidade Jean Piaget', en: 'SIIP — Jean Piaget University' },
    desc: {
      pt: 'Sistema Integrado do Instituto Piaget: inscrições, pautas, horários e cartão de estudante; sumários, presenças e notas para docentes; registo académico, RH e finanças para os serviços.',
      en: 'Piaget Institute Integrated System: enrolment, grade sheets, timetables and student ID; lesson logs, attendance and grading for lecturers; academic records, HR and finance for staff.',
    },
    img: 'siip.webp',
    url: 'https://siip.unipiaget.ac.mz/',
    cats: ['educacao'],
    tags: [{ pt: 'Gestão académica', en: 'Academic management' }, 'Microsoft login', { pt: 'Finanças', en: 'Finance' }],
  },
  {
    title: 'SIGA — Colégio Liduva',
    desc: {
      pt: 'Gestão académica e financeira: alunos, encarregados, matrículas, propinas, pagamentos e avaliação num só lugar.',
      en: 'Academic and financial management: students, guardians, enrolment, tuition, payments and assessment in one place.',
    },
    img: 'siga.webp',
    url: 'https://siga.colegioliduva.edu.mz/',
    cats: ['educacao'],
    tags: [{ pt: 'Gestão escolar', en: 'School management' }, { pt: 'Propinas', en: 'Tuition' }, { pt: 'Avaliação', en: 'Assessment' }],
  },
  {
    title: { pt: 'Portal da Juventude — MJD', en: 'Youth Portal — MJD' },
    desc: {
      pt: 'Plataforma oficial do Ministério da Juventude e Desportos para oportunidades, programas, emprego e financiamento para mais de 12 milhões de jovens.',
      en: 'Official platform of the Ministry of Youth and Sports for opportunities, programmes, jobs and funding for over 12 million young people.',
    },
    img: 'juventude.webp',
    url: 'https://juventude.mjd.gov.mz/',
    cats: ['governo'],
    tags: [{ pt: 'Governo', en: 'Government' }, { pt: 'Portal público', en: 'Public portal' }, { pt: 'Programas', en: 'Programmes' }],
  },
  {
    title: 'Mulheres Podem',
    desc: {
      pt: 'Gestão de membros com ID digital, pagamentos M-Pesa/e-Mola, benefícios em parceiros e acompanhamento de impacto social.',
      en: 'Membership management with digital ID, M-Pesa/e-Mola payments, partner benefits and social impact tracking.',
    },
    img: 'mulheres-podem.webp',
    url: 'https://mulheres-podem.vitae-erp.co.mz/',
    cats: ['governo', 'fintech'],
    tags: [{ pt: 'ID digital', en: 'Digital ID' }, 'M-Pesa', 'e-Mola', { pt: 'Login por SMS', en: 'SMS login' }],
  },
  {
    title: { pt: 'ANJE — Bilhetes de Eventos', en: 'ANJE — Event Ticketing' },
    desc: {
      pt: 'Plataforma oficial de bilheteira da Associação Nacional de Jovens Empresários: conferências, feiras e eventos para a juventude empreendedora.',
      en: 'Official ticketing platform of the National Association of Young Entrepreneurs: conferences, fairs and events for young entrepreneurs.',
    },
    img: 'anje.webp',
    url: 'https://anje-eventos.anje.org.mz',
    cats: ['eventos', 'fintech'],
    tags: [{ pt: 'Bilheteira', en: 'Ticketing' }, { pt: 'Pagamentos', en: 'Payments' }, { pt: 'Eventos', en: 'Events' }],
  },
  {
    title: { pt: 'PMI Moçambique — Eventos', en: 'PMI Mozambique — Events' },
    desc: {
      pt: 'Plataforma de eventos e conferências do PMI Moçambique, com agenda, inscrições e notificação de participantes.',
      en: 'Events and conference platform for PMI Mozambique, with agenda, registration and attendee notifications.',
    },
    img: 'pmi.webp',
    url: 'https://pmi-eventos.pmimozambique.org/',
    cats: ['eventos'],
    tags: [{ pt: 'Eventos', en: 'Events' }, { pt: 'Inscrições', en: 'Registration' }, 'Newsletter'],
  },
  {
    title: 'SM GPS Platform',
    desc: {
      pt: 'Gestão de provas de ciclismo e atletismo: eventos, inscrições, resultados e área do atleta.',
      en: 'Cycling and running race management: events, registration, results and athlete area.',
    },
    img: 'smgps.webp',
    url: 'https://smgps-mz.com',
    cats: ['eventos'],
    tags: [{ pt: 'Desporto', en: 'Sports' }, { pt: 'Inscrições', en: 'Registration' }, { pt: 'Resultados', en: 'Results' }],
  },
  {
    title: 'Vitae SMS',
    desc: {
      pt: 'Sistema de gestão do ecossistema Vitae ERP, com autenticação segura e painel de administração.',
      en: 'Management system within the Vitae ERP ecosystem, with secure authentication and an admin dashboard.',
    },
    img: 'vitae-sms.webp',
    url: 'https://sms.vitae-erp.co.mz/',
    cats: ['erp'],
    tags: ['Vitae ERP', { pt: 'Gestão', en: 'Management' }, 'Dashboard'],
  },
];

const SKILLS = [
  {
    title: { pt: 'Qualidade & Testes', en: 'Quality & Testing' },
    items: [{ pt: 'Testes unitários', en: 'Unit testing' }, { pt: 'Integração', en: 'Integration' }, 'E2E', { pt: 'Regressão', en: 'Regression' }, 'API', 'Jest', 'Playwright', 'Postman', { pt: 'Planos & casos de teste', en: 'Test plans & cases' }, 'Jira', 'GitHub Issues', 'Scrum', 'Kanban'],
  },
  {
    title: { pt: 'Linguagens & Frameworks', en: 'Languages & Frameworks' },
    items: ['PHP / Laravel', 'Vue.js / Quasar', 'JavaScript', 'TypeScript', 'Node.js', 'Next.js', 'NestJS', 'React Native', 'Java / Spring Boot', 'Python'],
  },
  {
    title: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence' },
    items: [{ pt: 'LLMs & APIs de IA', en: 'LLMs & AI APIs' }, { pt: 'Sistemas inteligentes', en: 'Intelligent systems' }, { pt: 'Chatbots de atendimento', en: 'Customer service chatbots' }, 'n8n', { pt: 'IA via USSD', en: 'AI over USSD' }],
  },
  {
    title: { pt: 'Pagamentos & Integrações', en: 'Payments & Integrations' },
    items: ['RESTful APIs', 'M-Pesa', 'e-Mola', 'mKesh', 'ERP Primavera', 'SMS / USSD', 'ETL', { pt: 'Conciliação', en: 'Reconciliation' }, { pt: 'Migração de dados', en: 'Data migration' }],
  },
  {
    title: { pt: 'Bases de Dados', en: 'Databases' },
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', { pt: 'Modelagem de dados', en: 'Data modelling' }],
  },
  {
    title: 'DevOps & Infra',
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Git', 'PM2 / Nginx', 'Prometheus', 'Grafana', 'AWS', 'GCP'],
  },
  {
    title: { pt: 'Segurança', en: 'Security' },
    items: [{ pt: 'Autenticação / Autorização', en: 'Authentication / Authorisation' }, { pt: 'Protecção de dados', en: 'Data protection' }, { pt: 'Gestão de vulnerabilidades', en: 'Vulnerability management' }, 'VPN IPsec / IKEv2'],
  },
];

const EXPERIENCE = [
  {
    period: { pt: '2024 — Presente', en: '2024 — Present' },
    role: { pt: 'Chefe da Secção de Tecnologias Educativas', en: 'Head of Educational Technology' },
    org: 'Universidade Aberta ISCED (UnISCED)',
    place: 'Beira',
    current: true,
    points: [
      { pt: 'Liderança técnica da secção: definição de soluções, revisão de código, mentoria de programadores e transferência de conhecimento.', en: 'Technical lead of the section: solution design, code review, developer mentoring and knowledge transfer.' },
      { pt: 'Gestão e evolução de sistemas críticos usados por mais de 30.000 estudantes em ensino a distância (EaD).', en: 'Running and evolving critical systems used by more than 30,000 distance-learning students.' },
      { pt: 'Administração da infra-estrutura de produção (Linux, Docker), com observabilidade, backups automatizados e planos de continuidade.', en: 'Production infrastructure administration (Linux, Docker) with observability, automated backups and continuity plans.' },
      { pt: 'Conformidade com normas de segurança, privacidade e protecção de dados; boas práticas de QA e testes de regressão.', en: 'Compliance with security, privacy and data-protection standards; QA best practices and regression testing.' },
    ],
    tags: ['EaD / LMS', 'Linux', 'Docker', 'QA'],
  },
  {
    period: { pt: '2025 — Presente', en: '2025 — Present' },
    role: { pt: 'Consultor Sénior em Desenvolvimento de Software', en: 'Senior Software Development Consultant' },
    org: 'Vitae Consultoria e Serviços (Vitae ERP)',
    place: 'Maputo',
    current: true,
    points: [
      { pt: 'Aplicações web, móveis e PWA de alta utilização (Next.js, NestJS, React Native) com pagamentos por carteiras móveis.', en: 'High-traffic web, mobile and PWA apps (Next.js, NestJS, React Native) with mobile-wallet payments.' },
      { pt: 'Integração de APIs e serviços de terceiros, incluindo a emissão de tokens de energia pré-paga na plataforma SolarEc do FUNAE.', en: 'API and third-party integrations, including prepaid energy token issuance on FUNAE’s SolarEc platform.' },
      { pt: 'Testes de APIs e integrações em sandbox: callbacks, cenários de erro e conciliação.', en: 'Sandbox testing of APIs and integrations: callbacks, error scenarios and reconciliation.' },
      { pt: 'Implantação e operação em produção (SMS, seguros, bilhética, sistemas municipais) com CI/CD e monitorização.', en: 'Deploying and operating production platforms (SMS, insurance, ticketing, municipal systems) with CI/CD and monitoring.' },
    ],
    tags: ['Next.js', 'NestJS', 'React Native', 'M-Pesa / e-Mola', 'CI/CD'],
  },
  {
    period: '2021 — 2025',
    role: { pt: 'Consultor Sénior em Desenvolvimento de Software', en: 'Senior Software Development Consultant' },
    org: 'MACH DIGITAL',
    place: 'Maputo',
    points: [
      { pt: 'Bots de atendimento ao cliente com LLMs (Node.js, Python, n8n) e automação de processos.', en: 'Customer-service bots powered by LLMs (Node.js, Python, n8n) and process automation.' },
      { pt: 'Backend em NestJS e Spring Boot; pagamentos móveis em sistemas de venda de serviços e entregas com georreferenciamento.', en: 'NestJS and Spring Boot backends; mobile payments for service sales and geo-referenced delivery systems.' },
      { pt: 'Soluções USSD com IA aplicada para zonas rurais com conectividade limitada.', en: 'AI-powered USSD solutions for rural areas with limited connectivity.' },
      { pt: 'Equipas ágeis (Scrum/Kanban) com revisões de código e testes automatizados em pipelines GitHub Actions.', en: 'Agile teams (Scrum/Kanban) with code reviews and automated tests in GitHub Actions pipelines.' },
    ],
    tags: ['LLMs', 'n8n', 'NestJS', 'Spring Boot', 'USSD'],
  },
  {
    period: '2023 — 2024',
    role: { pt: 'Programador de Sistemas', en: 'Systems Developer' },
    org: 'Universidade Aberta ISCED (UnISCED)',
    place: 'Beira',
    points: [
      { pt: 'Desenvolvimento de sistemas académicos e plataformas EaD com APIs REST/JSON.', en: 'Built academic systems and distance-learning platforms with REST/JSON APIs.' },
      { pt: 'Testes funcionais, de integração e de API (Postman); reprodução, documentação e validação de defeitos.', en: 'Functional, integration and API testing (Postman); reproducing, documenting and verifying defects.' },
    ],
    tags: ['REST APIs', 'Postman', 'EaD'],
  },
  {
    period: '2022 — 2024',
    role: { pt: 'Técnico Informático e Programador de Software', en: 'IT Technician & Software Developer' },
    org: 'Universidade Jean Piaget de Moçambique',
    place: 'Beira',
    points: [
      { pt: 'APIs RESTful e sistema de gestão financeira e académica da universidade com Next.js, NestJS e Python.', en: 'RESTful APIs and the university’s financial and academic management system with Next.js, NestJS and Python.' },
      { pt: 'Integração com o ERP Primavera (módulos académicos, financeiros e administrativos), ETL e migração de dados.', en: 'Primavera ERP integration (academic, finance and admin modules), ETL and data migration.' },
      { pt: 'Gestão de redes, servidores e monitorização contínua.', en: 'Network and server management with continuous monitoring.' },
    ],
    tags: ['Next.js', 'NestJS', 'Python', 'Primavera'],
  },
  {
    period: '2019 — 2021',
    role: { pt: 'Desenvolvedor Full-Stack (Estagiário)', en: 'Full-Stack Developer (Intern)' },
    org: 'Universidade Zambeze',
    place: 'Beira',
    points: [
      { pt: 'Sistema de Gestão Académica em PHP/Laravel e plataforma de ensino a distância (Moodle), optimizando processos académicos e a gestão de emolumentos.', en: 'Academic Management System in PHP/Laravel and a Moodle distance-learning platform, streamlining academic processes and fee management.' },
    ],
    tags: ['Laravel', 'Moodle'],
  },
];

// Ícones das competências (assets/icons/*.svg). Os "mono" seguem a cor do texto.
const ICONS = {
  Jest: 'jest', Playwright: 'playwright', Postman: 'postman', Jira: 'jira', 'GitHub Issues': 'github',
  'PHP / Laravel': 'laravel', 'Vue.js / Quasar': 'vuedotjs', JavaScript: 'javascript', TypeScript: 'typescript',
  'Node.js': 'nodedotjs', 'Next.js': 'nextdotjs', NestJS: 'nestjs', 'React Native': 'react',
  'Java / Spring Boot': 'spring', Python: 'python', n8n: 'n8n',
  PostgreSQL: 'postgresql', MySQL: 'mysql', 'SQL Server': 'sqlserver', MongoDB: 'mongodb',
  Docker: 'docker', Kubernetes: 'kubernetes', 'GitHub Actions': 'githubactions', Jenkins: 'jenkins', Git: 'git',
  'PM2 / Nginx': 'nginx', Prometheus: 'prometheus', Grafana: 'grafana', AWS: 'aws', GCP: 'googlecloud',
};
const MONO_ICONS = new Set(['github', 'nextdotjs', 'aws']);

function skillChip(item) {
  const label = tr(item);
  const ic = ICONS[label];
  if (!ic) return `<li>${label}</li>`;
  const icon = MONO_ICONS.has(ic)
    ? `<span class="ic ic-mono" style="--ic:url(assets/icons/${ic}.svg)" aria-hidden="true"></span>`
    : `<img class="ic" src="assets/icons/${ic}.svg" alt="" width="16" height="16" loading="lazy" />`;
  return `<li class="has-ic">${icon}${label}</li>`;
}

// Textos da página em inglês (o português está no próprio index.html)
const EN = {
  'nav.about': 'About',
  'nav.exp': 'Experience',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.contact': 'Contact',
  'hero.badge': 'Available for new projects',
  'hero.role': 'Software Engineer · QA · CI/CD',
  'hero.lead': 'I build, test and run mission-critical systems in production in Mozambique — from <strong>e-EDM</strong> (Electricidade de Moçambique) to <strong>FUNAE</strong>’s prepaid energy sales. At <strong>UnISCED</strong> I lead the educational technology that powers distance learning for more than 30,000 students, and I also build government, payments and AI platforms for rural communities.',
  'hero.cta1': 'View projects',
  'hero.cta2': 'Get in touch',
  'stats.1': 'years in production',
  'stats.2': 'systems delivered',
  'stats.3': 'users served',
  'stats.4': 'industries served',
  'about.kicker': '01 — About',
  'about.title': 'Software that makes life easier — and doesn’t break in production.',
  'about.p1': 'I’m a Computer Engineer specialising in <strong>software development, CI/CD and quality assurance (QA)</strong>, with over 5 years developing, testing and maintaining mission-critical web apps, mobile apps and APIs in production.',
  'about.p2': 'I plan and run manual and automated tests (functional, regression, integration and API), design test cases and manage defects hand-in-hand with development teams. I work daily with REST/JSON web services, payment and third-party integrations, CI/CD pipelines and agile environments.',
  'about.p3': 'Rigorous, analytical and detail-oriented — whether working independently or as part of a team.',
  'about.f1': 'Location',
  'about.f2': 'Languages',
  'about.f2v': 'Portuguese (native) · English (fluent)',
  'about.f3': 'Focus',
  'about.f3v': 'Full-stack · QA · DevOps · Applied AI',
  'about.f4': 'Sectors',
  'about.f4v': 'Energy, Education, Government, Fintech, Events, Agriculture',
  'pillar.p1h': 'Development',
  'pillar.p1p': 'Web, mobile and APIs with Laravel, Vue/Quasar, Next.js, NestJS, React Native and Spring Boot.',
  'pillar.p2h': 'Quality & Testing',
  'pillar.p2p': 'Test plans and cases, automation with Jest and Playwright, API testing with Postman, continuous regression.',
  'pillar.p3h': 'CI/CD & Infra',
  'pillar.p3p': 'GitHub Actions, Jenkins, Docker, Kubernetes, Nginx/PM2 and observability with Prometheus and Grafana.',
  'pillar.p4h': 'Payments & Integrations',
  'pillar.p4p': 'M-Pesa, e-Mola, mKesh, Primavera ERP, SMS/USSD, ETL, reconciliation and data migration.',
  'proj.kicker': '03 — Projects',
  'proj.title': 'Systems in production.',
  'proj.sub': 'A selection of what I’ve built, tested and maintain — from apps with over 100,000 users to institutional platforms.',
  'edm.tag': 'Featured · Energy',
  'edm.title': 'e-EDM — Official app of Electricidade de Moçambique',
  'edm.desc': 'The official EDM web and mobile app, used by over <strong>100,000 users</strong> to buy Credelec, file complaints, find service teams, get outage notices and contact customer care. Development, regression testing, API testing and ongoing production maintenance.',
  'edm.chips': '<li>Web + iOS + Android</li><li>REST APIs</li><li>Mobile payments</li><li>QA / Regression</li><li>CI/CD</li>',
  'edm.open': 'Open web app ↗',
  'proj.more': '…plus more internal systems, APIs and integrations that aren’t public.',
  'skills.kicker': '04 — Skills',
  'skills.title': 'Everyday toolkit.',
  'contact.kicker': '05 — Contact',
  'exp.kicker': '02 — Experience',
  'exp.title': 'Where I’ve been working.',
  'contact.title': 'Let’s build something <span class="grad">reliable</span>?',
  'contact.sub': 'Projects, QA/CI-CD consulting or a chat about your system — I reply quickly.',
  'contact.phone': 'Phone',
  'footer.country': 'Mozambique',
  'footer.top': 'Back to top ↑',
};

const UI = {
  pt: { now: 'Actual', all: 'Todos', open: 'Abrir', shot: 'Captura de ecrã de', title: 'Énio Marcos Massingue · Engenheiro de Software & QA' },
  en: { now: 'Current', all: 'All', open: 'Open', shot: 'Screenshot of', title: 'Énio Marcos Massingue · Software Engineer & QA' },
};

// ---------------------------------------------------------------------------
// Idioma
// ---------------------------------------------------------------------------
const root = document.documentElement;
let lang = root.lang === 'en' ? 'en' : 'pt';
const tr = (v) => (v && typeof v === 'object' ? v[lang] : v);

// Guarda o português original de cada elemento traduzível
const i18nEls = [...document.querySelectorAll('[data-i18n]')];
i18nEls.forEach((el) => (el.dataset.pt = el.innerHTML));

function applyStaticText() {
  i18nEls.forEach((el) => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === 'en' && EN[key] ? EN[key] : el.dataset.pt;
  });
  document.title = UI[lang].title;
  langBtn.textContent = lang === 'en' ? 'PT' : 'EN';
  langBtn.setAttribute('aria-label', lang === 'en' ? 'Mudar para português' : 'Switch to English');
}

const langBtn = document.getElementById('langToggle');
langBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'pt' : 'en';
  root.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  render();
});

// ---------------------------------------------------------------------------
// Tema claro/escuro
// ---------------------------------------------------------------------------
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// ---------------------------------------------------------------------------
// Menu mobile
// ---------------------------------------------------------------------------
const menuBtn = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach((a) =>
  a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); })
);
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), { passive: true });

// ---------------------------------------------------------------------------
// Projectos + filtros
// ---------------------------------------------------------------------------
const grid = document.getElementById('projectGrid');
const filters = document.getElementById('filters');
const featured = document.getElementById('featured');
const hostOf = (url) => new URL(url).host;
let activeFilter = 'all';

function card(p) {
  const title = tr(p.title);
  const stores = p.stores
    ? `<div class="card-stores">
        <a href="${p.stores.apple}" target="_blank" rel="noopener">App Store</a>
        <a href="${p.stores.play}" target="_blank" rel="noopener">Google Play</a>
      </div>`
    : '';
  return `
    <article class="card reveal in" data-cats="${p.cats.join(' ')}">
      <a class="browser" href="${p.url}" target="_blank" rel="noopener" aria-label="${UI[lang].open} ${title}">
        <div class="browser-bar"><i></i><i></i><i></i><span>${hostOf(p.url)}</span></div>
        <img src="assets/shots/${p.img}" alt="${UI[lang].shot} ${title}" loading="lazy" width="1200" height="750" />
      </a>
      <div class="card-body">
        <div class="card-cats">${p.cats.map((c) => `<span class="tag">${tr(CATEGORIES[c])}</span>`).join('')}</div>
        <h3><a href="${p.url}" target="_blank" rel="noopener">${title} <span aria-hidden="true">↗</span></a></h3>
        <p>${tr(p.desc)}</p>
        <ul class="chips">${p.tags.map((t) => `<li>${tr(t)}</li>`).join('')}</ul>
        ${stores}
      </div>
    </article>`;
}

const used = new Set(['energia', ...PROJECTS.flatMap((p) => p.cats)]);
const filterKeys = ['all', ...Object.keys(CATEGORIES).filter((k) => used.has(k))];

function applyFilter() {
  filters.querySelectorAll('.filter').forEach((b) => {
    const on = b.dataset.filter === activeFilter;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on);
  });
  grid.querySelectorAll('.card').forEach((c) => {
    c.hidden = !(activeFilter === 'all' || c.dataset.cats.split(' ').includes(activeFilter));
  });
  // O projecto em destaque (e-EDM) pertence a Energia e Mobile
  featured.hidden = !['all', 'energia', 'mobile'].includes(activeFilter);
}

function renderProjects(first) {
  // Na primeira renderização os cartões entram com animação; depois aparecem já visíveis
  grid.innerHTML = PROJECTS.map(card).join('');
  if (first) grid.querySelectorAll('.card').forEach((c) => c.classList.remove('in'));
  filters.innerHTML = filterKeys
    .map((k) => `<button role="tab" class="filter" data-filter="${k}">${k === 'all' ? UI[lang].all : tr(CATEGORIES[k])}</button>`)
    .join('');
  applyFilter();
}

filters.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  applyFilter();
});

// ---------------------------------------------------------------------------
// Competências
// ---------------------------------------------------------------------------
const skillsEl = document.getElementById('skills');
function renderSkills(first) {
  skillsEl.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill reveal${first ? '' : ' in'}">
      <h3>${tr(s.title)}</h3>
      <ul class="chips">${s.items.map(skillChip).join('')}</ul>
    </div>`
  ).join('');
}

const timelineEl = document.getElementById('timeline');
function renderExperience(first) {
  timelineEl.innerHTML = EXPERIENCE.map(
    (x) => `
    <li class="tl-item reveal${first ? '' : ' in'}${x.current ? ' current' : ''}">
      <div class="tl-meta">
        <span class="tl-period">${tr(x.period)}</span>
        ${x.current ? `<span class="tl-now">${UI[lang].now}</span>` : ''}
      </div>
      <div class="tl-card">
        <h3>${tr(x.role)}</h3>
        <p class="tl-org">${x.org} · ${x.place}</p>
        <ul class="tl-points">${x.points.map((p) => `<li>${tr(p)}</li>`).join('')}</ul>
        <ul class="chips">${x.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
      </div>
    </li>`
  ).join('');
}

function render(first = false) {
  applyStaticText();
  renderProjects(first);
  renderSkills(first);
  renderExperience(first);
}
render(true);

// ---------------------------------------------------------------------------
// Animações de entrada + contadores
// ---------------------------------------------------------------------------
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => (reduce ? el.classList.add('in') : io.observe(el)));

if (!reduce) {
  const counterIO = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix || '';
    const t0 = performance.now(), dur = 1200;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
      el.textContent = v + suf;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => counterIO.observe(el));
}

document.getElementById('year').textContent = new Date().getFullYear();
