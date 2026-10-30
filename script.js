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
  saas: 'SaaS',
};

const PROJECTS = [
  {
    title: 'SolarEc — FUNAE, F.P.',
    desc: {
      pt: 'Venda de energia pré-paga e gestão de mini-redes solares do Fundo de Energia: emissão de tokens STS de 20 dígitos em tempo real, rede de contadores e caixas, segurança RBAC. Inclui a app do cliente para comprar energia por M-Pesa e e-Mola e reclamar por texto, voz ou foto — sem criar conta.',
      en: 'Prepaid energy sales and solar mini-grid management for the Energy Fund: real-time 20-digit STS token issuance, meter and cashier network, RBAC security. Includes the customer app to buy energy via M-Pesa and e-Mola and file complaints by text, voice or photo — no account needed.',
    },
    img: 'solarec.webp',
    url: 'https://solarec.funae.co.mz/',
    app: { img: 'solarec-app.webp', url: 'https://app.funae.co.mz/' },
    links: [
      { label: { pt: 'Back-office ↗', en: 'Back-office ↗' }, url: 'https://solarec.funae.co.mz/' },
      { label: { pt: 'App do cliente ↗', en: 'Customer app ↗' }, url: 'https://app.funae.co.mz/' },
    ],
    cats: ['energia', 'fintech', 'mobile'],
    tags: ['Next.js', { pt: 'Energia pré-paga', en: 'Prepaid energy' }, 'STS', 'RBAC', { pt: 'App PWA', en: 'PWA app' }],
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
    app: { img: 'fenix-app.webp', url: 'https://apps.apple.com/mz/app/f%C3%A9nix-delivery/id6751499374' },
    cats: ['mobile'],
    tags: ['iOS', 'Android', 'Delivery'],
    stores: {
      play: 'https://play.google.com/store/apps/details?id=com.eniomarcosm.fenixdelivery',
      apple: 'https://apps.apple.com/mz/app/f%C3%A9nix-delivery/id6751499374',
    },
  },
  {
    title: { pt: 'Mahala — Loja Online', en: 'Mahala — Online Store' },
    desc: {
      pt: 'App de compras online em Moçambique: catálogo das melhores marcas, preços em MZN e USD, entregas para todo o país, reembolso garantido, pagamento seguro e suporte 24/7.',
      en: 'Online shopping app for Mozambique: a catalogue of top brands, MZN and USD pricing, nationwide delivery, guaranteed refunds, secure payment and 24/7 support.',
    },
    phones: ['mahala-1.webp', 'mahala-2.webp'],
    url: 'https://apps.apple.com/mz/app/mahala/id6749211168',
    cats: ['mobile'],
    tags: ['iOS', 'Android', 'E-commerce', { pt: 'Entregas', en: 'Delivery' }],
    stores: {
      play: 'https://play.google.com/store/apps/details?id=com.machgroup.mahalaapp',
      apple: 'https://apps.apple.com/mz/app/mahala/id6749211168',
    },
  },
  {
    title: "Gentleman's Barber Shop",
    desc: {
      pt: 'App de marcações da barbearia: escolha do serviço, data e horário disponível, pagamento por M-Pesa ou e-Mola e histórico de visitas — controlo total dos agendamentos de forma simples e elegante.',
      en: 'Barbershop booking app: choose a service, date and available time slot, pay with M-Pesa or e-Mola and see your visit history — full control of appointments, simply and elegantly.',
    },
    phones: ['gentlemans-1.webp', 'gentlemans-2.webp'],
    url: 'https://apps.apple.com/mz/app/gentlemans-barber-shop/id6761983515',
    cats: ['mobile', 'fintech'],
    tags: ['iOS', 'Android', { pt: 'Marcações', en: 'Bookings' }, 'M-Pesa', 'e-Mola'],
    stores: {
      play: 'https://play.google.com/store/apps/details?id=com.gentlemans.barber',
      apple: 'https://apps.apple.com/mz/app/gentlemans-barber-shop/id6761983515',
    },
  },
  {
    title: 'Freshcut Barbershop',
    desc: {
      pt: 'App de marcações rápidas para barbearia: serviços de corte, barba e cuidados, escolha da unidade no mapa e do horário, programa de fidelidade com pontos e pacotes mensais por assinatura.',
      en: 'Quick-booking barbershop app: haircut, beard and grooming services, branch picker on a map and time slots, a points-based loyalty programme and monthly subscription packages.',
    },
    phones: ['freshcut-1.webp', 'freshcut-2.webp'],
    url: 'https://apps.apple.com/mz/app/freshcut-barbershop-moz/id6802670698',
    cats: ['mobile'],
    tags: ['iOS', 'Android', { pt: 'Marcações', en: 'Bookings' }, { pt: 'Fidelidade', en: 'Loyalty' }, { pt: 'Assinaturas', en: 'Subscriptions' }],
    stores: {
      play: 'https://play.google.com/store/apps/details?id=com.freshcuts.barber',
      apple: 'https://apps.apple.com/mz/app/freshcut-barbershop-moz/id6802670698',
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
    title: { pt: 'SIGA — Sistema de Gestão Escolar', en: 'SIGA — School Management System' },
    desc: {
      pt: 'Gestão académica e financeira para escolas: matrículas, propinas, avaliação e comunicação com os encarregados — tudo num só lugar. Perfis e permissões por colaborador; faturas, recibos e reconciliação bancária. Exemplo em produção: Colégio Liduva.',
      en: 'Academic and financial management for schools: enrolment, tuition, assessment and communication with guardians — all in one place. Per-staff roles and permissions; invoices, receipts and bank reconciliation. Live example: Colégio Liduva.',
    },
    img: 'siga.webp',
    url: 'https://siga.colegioliduva.edu.mz/',
    cats: ['educacao'],
    tags: [{ pt: 'Gestão escolar', en: 'School management' }, { pt: 'Propinas', en: 'Tuition' }, { pt: 'Avaliação', en: 'Assessment' }, 'RBAC'],
  },
  {
    title: { pt: 'Biblioteca Virtual — UnISCED', en: 'Virtual Library — UnISCED' },
    desc: {
      pt: 'Repositório digital da Universidade Aberta ISCED: livros de referência, materiais de estudo, artigos e infográficos organizados por comunidades e colecções, com pesquisa por autor, assunto e data — acesso 100% online, 24/7.',
      en: 'Digital repository of the Open University ISCED: reference books, study materials, articles and infographics organised by communities and collections, searchable by author, subject and date — 100% online, 24/7.',
    },
    img: 'biblioteca.webp',
    url: 'https://biblioteca.unisced.edu.mz/',
    cats: ['educacao'],
    tags: ['DSpace', 'Angular', { pt: 'Repositório digital', en: 'Digital repository' }, { pt: 'Ensino a distância', en: 'Distance learning' }],
  },
  {
    title: { pt: 'Convida — convites e listas de presentes', en: 'Convida — invitations & gift registries' },
    desc: {
      pt: 'SaaS de convites online para casamentos, aniversários e chás: página personalizada com fotos, música e contagem decrescente, confirmação de presença, lista de presentes sem repetições, contribuições por M-Pesa, e-Mola e mKesh e links pessoais partilhados por WhatsApp.',
      en: 'Online invitation SaaS for weddings, birthdays and showers: a custom page with photos, music and countdown, RSVP, a no-duplicates gift registry, M-Pesa, e-Mola and mKesh contributions and personal links shared via WhatsApp.',
    },
    img: 'convida.webp',
    url: 'https://convida.kokwana.cloud/',
    cats: ['saas', 'eventos', 'fintech'],
    tags: ['SaaS', 'RSVP', { pt: 'Lista de presentes', en: 'Gift registry' }, 'WhatsApp', 'M-Pesa'],
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

// Experiência agrupada por organização; cada uma pode ter vários cargos (mais recente primeiro).
// O período da organização é calculado a partir dos cargos.
const EXPERIENCE = [
  {
    org: 'Universidade Aberta ISCED (UnISCED)',
    url: 'https://unisced.edu.mz/',
    place: 'Beira',
    roles: [
      {
        period: { pt: '2024 — Presente', en: '2024 — Present' },
        role: { pt: 'Chefe da Secção de Tecnologias Educativas', en: 'Head of Educational Technology' },
        current: true,
        points: [
          { pt: 'Liderança técnica da secção: definição de soluções, revisão de código, mentoria de programadores e transferência de conhecimento.', en: 'Technical lead of the section: solution design, code review, developer mentoring and knowledge transfer.' },
          { pt: 'Gestão e evolução de sistemas críticos usados por mais de 30.000 estudantes em ensino a distância (EaD).', en: 'Running and evolving critical systems used by more than 30,000 distance-learning students.' },
          { pt: 'Administração da infra-estrutura de produção (Linux, Docker), com observabilidade, backups automatizados e planos de continuidade.', en: 'Production infrastructure administration (Linux, Docker) with observability, automated backups and continuity plans.' },
          { pt: 'Conformidade com normas de segurança, privacidade e protecção de dados; boas práticas de QA e testes de regressão.', en: 'Compliance with security, privacy and data-protection standards; QA best practices and regression testing.' },
        ],
        tags: [{ pt: 'Liderança técnica', en: 'Tech lead' }, { pt: 'EaD / LMS', en: 'E-learning / LMS' }, 'Linux', 'Docker', 'QA'],
      },
      {
        period: '2023 — 2024',
        role: { pt: 'Programador de Sistemas', en: 'Software Developer' },
        points: [
          { pt: 'Desenvolvimento de sistemas académicos, plataformas de ensino a distância e apps móveis com Node.js, Next.js/React e React Native, integrados por APIs REST/JSON.', en: 'Built academic systems, distance-learning platforms and mobile apps with Node.js, Next.js/React and React Native, connected through REST/JSON APIs.' },
          { pt: 'Testes funcionais, de integração e de API; reprodução, documentação e validação de defeitos com a equipa.', en: 'Functional, integration and API testing; reproducing, documenting and verifying defects with the team.' },
        ],
        tags: ['Node.js', 'Next.js', 'React', 'React Native', 'REST APIs'],
      },
    ],
  },
  {
    org: 'Vitae Consultoria e Serviços (Vitae ERP)',
    url: 'https://vitae-erp.co.mz/',
    place: 'Maputo',
    roles: [
      {
        period: { pt: '2025 — Presente', en: '2025 — Present' },
        role: { pt: 'Consultor Sénior em Desenvolvimento de Software', en: 'Senior Software Development Consultant' },
        current: true,
        points: [
          { pt: 'Aplicações web, móveis e PWA de alta utilização (Next.js, NestJS, React Native) com pagamentos por M-Pesa, e-Mola e mKesh.', en: 'High-traffic web, mobile and PWA apps (Next.js, NestJS, React Native) with M-Pesa, e-Mola and mKesh payments.' },
          { pt: 'Integração de APIs e serviços de terceiros, incluindo a emissão de tokens de energia pré-paga na plataforma SolarEc do FUNAE.', en: 'API and third-party integrations, including prepaid energy token issuance on FUNAE’s SolarEc platform.' },
          { pt: 'Testes de APIs e integrações em sandbox: callbacks, cenários de erro e conciliação.', en: 'Sandbox testing of APIs and integrations: callbacks, error scenarios and reconciliation.' },
          { pt: 'Implantação e operação em produção (SMS, seguros, bilhética, sistemas municipais) com CI/CD e monitorização.', en: 'Deploying and operating production platforms (SMS, insurance, ticketing, municipal systems) with CI/CD and monitoring.' },
        ],
        tags: ['Next.js', 'NestJS', 'React Native', 'PWA', 'M-Pesa / e-Mola / mKesh', 'CI/CD'],
      },
    ],
  },
  {
    org: 'MACH DIGITAL',
    url: 'https://mach.co.mz/',
    place: 'Maputo',
    roles: [
      {
        period: '2021 — 2025',
        role: { pt: 'Consultor Sénior em Desenvolvimento de Software', en: 'Senior Software Development Consultant' },
        points: [
          { pt: 'Bots de atendimento ao cliente com LLMs (Node.js, Python, n8n) e automação de processos.', en: 'Customer-service bots powered by LLMs (Node.js, Python, n8n) and process automation.' },
          { pt: 'Backend em NestJS e Spring Boot; pagamentos móveis em sistemas de venda de serviços e entregas com georreferenciamento.', en: 'NestJS and Spring Boot backends; mobile payments for service sales and geo-referenced delivery systems.' },
          { pt: 'Soluções USSD com IA aplicada para zonas rurais com conectividade limitada.', en: 'AI-powered USSD solutions for rural areas with limited connectivity.' },
          { pt: 'Equipas ágeis (Scrum/Kanban) com revisões de código e testes automatizados em pipelines GitHub Actions.', en: 'Agile teams (Scrum/Kanban) with code reviews and automated tests in GitHub Actions pipelines.' },
        ],
        tags: [{ pt: 'IA / LLMs', en: 'AI / LLMs' }, 'n8n', 'NestJS', 'Spring Boot', 'USSD', 'GitHub Actions'],
      },
    ],
  },
  {
    org: 'Universidade Jean Piaget de Moçambique',
    url: 'https://unipiaget.ac.mz/',
    place: 'Beira',
    roles: [
      {
        period: '2022 — 2024',
        role: { pt: 'Técnico Informático e Programador de Software', en: 'IT Technician & Software Developer' },
        points: [
          { pt: 'APIs RESTful e sistema de gestão financeira e académica da universidade com Next.js, NestJS e Python.', en: 'RESTful APIs and the university’s financial and academic management system with Next.js, NestJS and Python.' },
          { pt: 'Integração com o ERP Primavera (módulos académicos, financeiros e administrativos), ETL e migração de dados.', en: 'Primavera ERP integration (academic, finance and admin modules), ETL and data migration.' },
          { pt: 'Gestão de redes, servidores e monitorização contínua.', en: 'Network and server management with continuous monitoring.' },
        ],
        tags: ['Next.js', 'NestJS', 'Python', 'ERP Primavera', 'ETL'],
      },
    ],
  },
  {
    org: 'Universidade Zambeze',
    url: 'https://unizambeze.ac.mz/',
    place: 'Beira',
    roles: [
      {
        period: '2019 — 2021',
        role: { pt: 'Desenvolvedor Full-Stack (Estagiário)', en: 'Full-Stack Developer (Intern)' },
        points: [
          { pt: 'Sistema de Gestão Académica em PHP/Laravel e plataforma de ensino a distância (Moodle), optimizando processos académicos e a gestão de emolumentos.', en: 'Academic Management System in PHP/Laravel and a Moodle distance-learning platform, streamlining academic processes and fee management.' },
        ],
        tags: ['PHP / Laravel', 'Moodle', 'MySQL'],
      },
    ],
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

// Ícones de linha próprios para conceitos sem logótipo (traço = cor do texto)
const LINE_ICONS = {
  unit: '<path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/><path d="M7 15h10"/>',
  integration: '<path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><rect x="7" y="7" width="10" height="10" rx="2"/>',
  e2e: '<circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="6" r="2.5"/><path d="M7.5 18H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7.5"/>',
  regression: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 8v4l3 2"/>',
  api: '<path d="M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1"/>',
  testplan: '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 2h6v4H9zM9 13l2 2 4-4"/>',
  scrum: '<path d="M21 12a9 9 0 0 1-15.5 6.3M3 12A9 9 0 0 1 18.5 5.7"/><path d="M18 2v4h-4M6 22v-4h4"/>',
  kanban: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M5.5 7h2M11 7h2M11 11h2M16.5 7h2"/>',
  sparkles: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  brain: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M9 13v1M15 13v1M2 13v3M22 13v3"/><circle cx="12" cy="3" r="1"/>',
  ussd: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 6h6v4H9zM9 14h.01M12 14h.01M15 14h.01M9 17h.01M12 17h.01M15 17h.01"/>',
  rest: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.3 11l7.4-3.8M8.3 13l7.4 3.8"/>',
  wallet: '<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/><path d="M21 10h-5a2 2 0 0 0 0 4h5z"/>',
  erp: '<path d="M12 2 2 7l10 5 10-5z"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5"/>',
  sms: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/>',
  etl: '<path d="M3 6h7M3 12h4M3 18h7"/><path d="M14 6h7l-3-3M21 6l-3 3M14 18h7l-3-3M21 18l-3 3"/><path d="M10 6v12"/>',
  reconcile: '<path d="M12 3v18M5 21h14"/><path d="M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  migration: '<ellipse cx="9" cy="5" rx="6" ry="2.5"/><path d="M3 5v12c0 1.4 2.7 2.5 6 2.5M15 5v5"/><path d="M3 11c0 1.4 2.7 2.5 6 2.5"/><path d="M14 17h8M19 14l3 3-3 3"/>',
  modelling: '<rect x="3" y="3" width="7" height="5" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="8.5" y="16" width="7" height="5" rx="1"/><path d="M6.5 8v3h11V8M12 11v5"/>',
  auth: '<circle cx="8" cy="15" r="4"/><path d="M10.8 12.2 21 2M17 6l3 3M14.5 8.5l2 2"/>',
  protect: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  vuln: '<path d="M8 2l1.9 1.9M16 2l-1.9 1.9"/><path d="M9 7.1V6a3 3 0 0 1 6 0v1.1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6zM12 20v-9M6.5 13H3M21 13h-3.5M6 9 3 7M18 9l3-2M6 17l-3 2M18 17l3 2"/>',
  vpn: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
};
const LINE_ICON_FOR = {
  'Testes unitários': 'unit', 'Unit testing': 'unit', 'Integração': 'integration', Integration: 'integration',
  E2E: 'e2e', 'Regressão': 'regression', Regression: 'regression', API: 'api',
  'Planos & casos de teste': 'testplan', 'Test plans & cases': 'testplan', Scrum: 'scrum', Kanban: 'kanban',
  'LLMs & APIs de IA': 'sparkles', 'LLMs & AI APIs': 'sparkles',
  'Sistemas inteligentes': 'brain', 'Intelligent systems': 'brain',
  'Chatbots de atendimento': 'bot', 'Customer service chatbots': 'bot',
  'IA via USSD': 'ussd', 'AI over USSD': 'ussd',
  'RESTful APIs': 'rest', 'M-Pesa': 'wallet', 'e-Mola': 'wallet', mKesh: 'wallet',
  'ERP Primavera': 'erp', 'SMS / USSD': 'sms', ETL: 'etl',
  'Conciliação': 'reconcile', Reconciliation: 'reconcile',
  'Migração de dados': 'migration', 'Data migration': 'migration',
  'Modelagem de dados': 'modelling', 'Data modelling': 'modelling',
  'Autenticação / Autorização': 'auth', 'Authentication / Authorisation': 'auth',
  'Protecção de dados': 'protect', 'Data protection': 'protect',
  'Gestão de vulnerabilidades': 'vuln', 'Vulnerability management': 'vuln',
  'VPN IPsec / IKEv2': 'vpn',
};

function skillChip(item) {
  const label = tr(item);
  const ic = ICONS[label];
  let icon = '';
  if (ic) {
    icon = MONO_ICONS.has(ic)
      ? `<span class="ic ic-mono" style="--ic:url(assets/icons/${ic}.svg)" aria-hidden="true"></span>`
      : `<img class="ic" src="assets/icons/${ic}.svg" alt="" width="16" height="16" loading="lazy" />`;
  } else if (LINE_ICON_FOR[label]) {
    icon = `<svg class="ic ic-line" viewBox="0 0 24 24" aria-hidden="true">${LINE_ICONS[LINE_ICON_FOR[label]]}</svg>`;
  }
  return icon ? `<li class="has-ic">${icon}${label}</li>` : `<li>${label}</li>`;
}

// Textos da página em inglês (o português está no próprio index.html)
const EN = {
  'nav.about': 'About',
  'nav.exp': 'Experience',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.edu': 'Education',
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
  'about.f2v': '<span><img class="flag" src="assets/flags/mz.svg" alt="" width="20" height="14" /> Portuguese (native)</span><span><img class="flag" src="assets/flags/us.svg" alt="" width="20" height="14" /> English (fluent)</span>',
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
  'proj.sub': 'A selection of what I’ve built, tested and maintain — from apps with over 100,000 users to institutional platforms. The mobile apps I’ve published (e-EDM, Fénix Delivery, Mahala, Freshcut, Gentleman’s Barber Shop) are on <a href="https://play.google.com/store/apps/dev?id=6170142633097762997" target="_blank" rel="noopener">Google Play ↗</a> and the <a href="https://apps.apple.com/ci/developer/mach-digital/id1829310148" target="_blank" rel="noopener">App Store ↗</a>.',
  'edm.tag': 'Featured · Energy',
  'edm.title': 'e-EDM — Official app of Electricidade de Moçambique',
  'edm.desc': 'The official EDM web and mobile app, used by over <strong>100,000 users</strong> to buy Credelec, file complaints, find service teams, get outage notices and contact customer care. Development, regression testing, API testing and ongoing production maintenance.',
  'edm.chips': '<li>Web + iOS + Android</li><li>REST APIs</li><li>Mobile payments</li><li>QA / Regression</li><li>CI/CD</li>',
  'edm.open': 'Open web app ↗',
  'proj.more': '…plus more internal systems, APIs and integrations that aren’t public.',
  'skills.kicker': '04 — Skills',
  'skills.title': 'Everyday toolkit.',
  'contact.kicker': '06 — Contact',
  'edu.kicker': '05 — Education',
  'edu.title': 'Academic background and certifications.',
  'edu.degree': 'BSc in Computer Engineering',
  'edu.note': 'During my degree I joined the university’s own development team, where I built the Academic Management System in PHP/Laravel and the Moodle distance-learning platform.',
  'edu.certs': 'Certifications',
  'cert.c3': 'Introduction to Cybersecurity',
  'exp.kicker': '02 — Experience',
  'exp.title': 'Where I’ve been working.',
  'contact.title': 'Let’s build something <span class="grad">reliable</span>?',
  'contact.sub': 'Projects, QA/CI-CD consulting or a chat about your system — I reply quickly.',
  'contact.phone': 'Phone',
  'contact.alt': 'Alternative',
  'footer.country': 'Mozambique',
};

const UI = {
  pt: { now: 'Actual', all: 'Todos', open: 'Abrir', shot: 'Captura de ecrã de', top: 'Voltar ao topo', title: 'Énio Marcos Massingue · Engenheiro de Software & QA' },
  en: { now: 'Current', all: 'All', open: 'Open', shot: 'Screenshot of', top: 'Back to top', title: 'Énio Marcos Massingue · Software Engineer & QA' },
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
  toTop.setAttribute('aria-label', UI[lang].top);
  toTop.title = UI[lang].top;
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
const toTop = document.getElementById('toTop');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 8);
  toTop.classList.toggle('show', scrollY > innerHeight * 0.8);
}, { passive: true });

// "#top" é o próprio header sticky: o browser acha que já está visível e não faz scroll
document.querySelectorAll('a[href="#top"]').forEach((a) =>
  a.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('open');
    scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    history.replaceState(null, '', location.pathname + location.search);
  })
);

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
  const links = [
    ...(p.stores ? [{ label: 'App Store', url: p.stores.apple }, { label: 'Google Play', url: p.stores.play }] : []),
    ...(p.links || []),
  ];
  const stores = links.length
    ? `<div class="card-stores">${links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${tr(l.label)}</a>`).join('')}</div>`
    : '';
  // Projectos com app móvel mostram o ecrã do telemóvel sobreposto à captura web
  const phone = p.app
    ? `<a class="phone card-phone" href="${p.app.url}" target="_blank" rel="noopener" aria-label="${UI[lang].open} ${hostOf(p.app.url)}">
        <img src="assets/shots/${p.app.img}" alt="${UI[lang].shot} ${hostOf(p.app.url)}" loading="lazy" width="500" height="1000" />
      </a>`
    : '';
  return `
    <article class="card reveal in" data-cats="${p.cats.join(' ')}">
      <div class="card-media">
        ${p.phones
          ? // Apps só móveis: dois ecrãs lado a lado em vez da janela do browser
            `<a class="app-stage" href="${p.url}" target="_blank" rel="noopener" aria-label="${UI[lang].open} ${title}">
              ${p.phones.map((img) => `<span class="phone"><img src="assets/shots/${img}" alt="${UI[lang].shot} ${title}" loading="lazy" width="300" height="650" /></span>`).join('')}
            </a>`
          : `<a class="browser" href="${p.url}" target="_blank" rel="noopener" aria-label="${UI[lang].open} ${title}">
              <div class="browser-bar"><i></i><i></i><i></i><span>${hostOf(p.url)}</span></div>
              <img src="assets/shots/${p.img}" alt="${UI[lang].shot} ${title}" loading="lazy" width="1200" height="750" />
            </a>`}
        ${phone}
      </div>
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
  // "2023 — 2024" / { pt: '2024 — Presente', ... } → [início, fim]
  const span = (r) => tr(r.period).split(' — ');
  timelineEl.innerHTML = EXPERIENCE.map((x) => {
    const current = x.roles.some((r) => r.current);
    const start = Math.min(...x.roles.map((r) => +span(r)[0]));
    const last = span(x.roles[0]);
    const period = x.roles.length > 1 ? `${start} — ${last[1] ?? last[0]}` : tr(x.roles[0].period);
    const multi = x.roles.length > 1;
    return `
    <li class="tl-item reveal${first ? '' : ' in'}${current ? ' current' : ''}">
      <div class="tl-meta">
        <span class="tl-period">${period}</span>
        ${current ? `<span class="tl-now">${UI[lang].now}</span>` : ''}
      </div>
      <div class="tl-card">
        <p class="tl-org"><a href="${x.url}" target="_blank" rel="noopener">${x.org} <span aria-hidden="true">↗</span></a> · ${x.place}</p>
        ${x.roles.map((r) => `
        <div class="tl-role${multi ? ' tl-role-multi' : ''}">
          <h3>${tr(r.role)}</h3>
          ${multi ? `<p class="tl-role-period">${tr(r.period)}</p>` : ''}
          <ul class="tl-points">${r.points.map((p) => `<li>${tr(p)}</li>`).join('')}</ul>
          <ul class="chips">${r.tags.map((t) => `<li>${tr(t)}</li>`).join('')}</ul>
        </div>`).join('')}
      </div>
    </li>`;
  }).join('');
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
