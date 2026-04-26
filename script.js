/* ─── LANGUAGE TRANSLATIONS ─────────────────────────── */
const translations = {
  en: {
    nav_impact: "Impact",
    nav_exp: "Experience",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_hire: "Hire Me",
    hero_available: "Available for opportunities",
    hero_title: "AI Agent Orchestrator & Intelligent Automation Specialist",
    hero_sub: "B.S. Computer Science · Specialist in rapid delivery of autonomous systems through AI Agent Orchestration, Solution Validation (QA), and system integration. <strong>Proven success in delivering 9 production-grade automation solutions.</strong>",
    hero_cta_impact: "See My Impact",
    hero_cta_cv: "Download CV",
    hero_cta_linkedin: "LinkedIn ↗",
    bento_header: "Verified Impact",
    bento_live: "Live",
    bento_label: "Net Business Value Delivered",
    impact_tag: "By The Numbers",
    impact_title: "Measurable <span class=\"gradient-text\">Business Impact</span>",
    impact_sub: "Every automation delivers quantified ROI — not activity, results.",
    m1_label: "Total Business Impact Managed",
    m1_detail: "Net profit + risk mitigation combined",
    m2_label: "Net Direct Profit Generated",
    m2_detail: "Recovered with positive ROI",
    m3_label: "Financial Risk Mitigated",
    m3_detail: "SUNAFIL ($151K) + Promotions ($53K)",
    m4_label: "Man-Hours Freed",
    m4_detail: "Across 9 automated processes in production",
    m5_label: "Bots in Production",
    m5_detail: "SAP, Kronos, Inaltele, OpenAI API & more",
    m6_label: "Time-to-Market (Cloud-Native)",
    m6_detail: "GCP Cloud Run + .NET via agentic delivery",
    exp_tag: "Career",
    exp_title: "Professional <span class=\"gradient-text\">Experience</span>",
    exp_p_role: "AI Automation Specialist",
    exp_p_period: "Jul 2024 – Present",
    exp_p_a1: "<strong>Orchestrated OpenAI API integration</strong> with A360 to autonomously generate web & SEO content — freed <strong>1,858+ man-hours</strong>.",
    exp_p_a2: "<strong>Delivered Cloud-Native PO generation solution</strong> on GCP/.NET via agentic code generation in <strong>2.5 weeks</strong> using CI/CD on Azure DevOps.",
    exp_p_a3: "<strong>Eliminated ~$53,300 USD/month in financial risk</strong> by leading logical architecture and QA of the promotions upload process.",
    exp_p_a4: "<strong>Mitigated $151,842 USD in SUNAFIL regulatory risk</strong> by systematizing overtime tracking across Kronos and Sharepoint.",
    exp_p_a5: "<strong>Modernized data pipelines</strong>: replaced fragile UI scraping with direct Oracle DB queries and Python transformation scripts.",
    exp_p_a6: "Built and scaled RPA corporate infrastructure from scratch — <strong>9 bots in concurrent production</strong> including SAP iRPA monitoring.",
    exp_g_company: "GLOBAL HITSS (Telecommunications)",
    exp_g_role: "RPA Automation Consultant",
    exp_g_period: "Apr 2023 – Jun 2024",
    exp_g_a1: "<strong>Developed 4 critical automation processes</strong> for Claro Peru enabling mass activation/deactivation of cloud storage plans.",
    exp_g_a2: "<strong>Designed resilient bot architectures</strong> with dynamic retry mechanisms for unstable legacy environments.",
    exp_g_a3: "<strong>Produced full technical documentation</strong> (PDD/SDD) leading Process Discovery sessions directly with end-users.",
    exp_s_role: "Fullstack Developer",
    exp_s_period: "May 2022 – Dec 2022",
    exp_s_a1: "<strong>Engineered a scalable document tracking system</strong> for Movistar using Node.js + TypeScript under Agile/Scrum.",
    exp_s_a2: "<strong>Ensured 100% SUNAT compliance</strong> by developing electronic invoicing modules.",
    exp_m_role: "Fullstack Developer",
    exp_m_period: "Mar 2022 – Jul 2022",
    exp_m_a1: "Designed Entity-Relationship diagrams and developed billing systems backend + frontend.",
    proj_tag: "Projects",
    proj_title: "Key <span class=\"gradient-text\">Automations</span>",
    proj1_badge: "Cloud Native",
    proj1_title: "PO Generation — GCP Cloud Run",
    proj1_desc: "Migrated RPA-based PO generation to a serverless Cloud-Native Job on GCP/.NET with CI/CD on Azure DevOps and Microsoft Graph API integration. Shipped in <strong>2.5 weeks</strong> via agentic code orchestration.",
    proj2_badge: "$53K+ Risk Eliminated",
    proj2_title: "Promotions Upload — Risk Elimination",
    proj2_desc: "Led logical architecture and QA of critical promotions upload flow preventing ~S/ 200,000 in misconfiguration losses per month. Deployed as a Job for business-rule validation before full portal launch.",
    proj3_badge: "AI Integration",
    proj3_title: "Web Descriptions & SEO — OpenAI API",
    proj3_desc: "Integrated OpenAI API via REST actions in A360 to autonomously generate product descriptions and SEO copy at scale, eliminating manual content workflows and freeing <strong>1,858+ hours</strong>.",
    proj4_badge: "$151K Regulatory Risk",
    proj4_title: "Overtime Control — SUNAFIL Compliance",
    proj4_desc: "Systematized complex overtime tracking across Kronos, Excel, and Sharepoint, mitigating ~$151,842 USD in SUNAFIL regulatory sanctions through automated reconciliation pipelines.",
    proj5_badge: "DB Migration",
    proj5_title: "Oracle DB Direct Access",
    proj5_desc: "Replaced fragile UI-based data extraction (JSatellite screen clicks) with direct Oracle DB queries via connection strings. Combined with Python scripts to replace lengthy native A360 action flows.",
    proj6_title: "Document Tracking System",
    proj6_desc: "Engineered a scalable document tracking system for Movistar using Node.js + TypeScript within a strict Agile/Scrum framework with Git-based collaboration (branches + PRs).",
    skills_tag: "Expertise",
    skills_title: "Technical <span class=\"gradient-text\">Skills</span>",
    skills_g1_title: "AI & Orchestration",
    skills_g1_s1: "LLM Orchestration (OpenAI API)",
    skills_g1_s2: "Agentic Code Generation",
    skills_g1_s3: "AI-Assisted SDLC",
    skills_g1_s4: "Business Logic Validation (QA)",
    skills_g2_title: "RPA & Automation",
    skills_g2_s1: "Automation Anywhere A360 (Master)",
    skills_g2_s2: "Process Design (PDD/SDD)",
    skills_g2_s3: "Bot Architecture & Resilience",
    skills_g2_s4: "SAP iRPA Monitoring",
    skills_g3_title: "Cloud & DevOps",
    skills_g3_s1: "GCP Cloud Run (Jobs)",
    skills_g3_s2: "Azure DevOps (CI/CD)",
    skills_g3_s3: "Microsoft Graph API",
    skills_g3_s4: "GitHub",
    skills_g4_title: "Engineering",
    skills_g4_s1: "Python (scripting, data transform)",
    skills_g4_s2: "SQL (Oracle DB, SQLite)",
    skills_g4_s3: "Node.js / TypeScript",
    skills_g4_s4: ".NET (orchestrated delivery)",
    skills_g5_title: "Enterprise Systems",
    skills_g6_title: "Process & Leadership",
    skills_g6_s1: "Process Discovery & Analysis",
    skills_g6_s2: "Requirements Engineering",
    skills_g6_s3: "Agile / Scrum",
    skills_g6_s4: "17 Technical Docs (PDD/SDD)",
    certs_tag: "Credentials",
    certs_title: "Certifications & <span class=\"gradient-text\">Education</span>",
    cert2_title: "Advanced Automation Certification",
    cert3_title: "Essentials Automation Certification",
    cert4_title: "B.S. in Computer Science",
    contact_tag: "Let's Talk",
    contact_title: "Ready to <span class=\"gradient-text\">Automate</span> Your Business?",
    contact_sub: "I specialize in delivering autonomous systems that generate real, measurable ROI. Let's discuss your operational bottlenecks.",
    contact_loc_label: "Location",
    contact_loc_val: "Lima, Peru · Open to Remote",
    contact_phone_label: "Phone / WhatsApp",
    footer_title: "AI Agent Orchestrator",
    footer_sub: "Built to showcase real impact, not just activities."
  },
  es: {
    nav_impact: "Impacto",
    nav_exp: "Experiencia",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",
    nav_hire: "Contrátame",
    hero_available: "Disponible para oportunidades",
    hero_title: "Orquestador de Agentes de IA y Especialista en Automatización Inteligente",
    hero_sub: "Bachiller en Ciencias de la Computación · Especialista en entrega acelerada de sistemas autónomos mediante orquestación de agentes, validación de soluciones (QA) e integración de sistemas. <strong>Éxito comprobado en la entrega de 9 soluciones de automatización de grado de producción.</strong>",
    hero_cta_impact: "Ver mi Impacto",
    hero_cta_cv: "Descargar CV",
    hero_cta_linkedin: "LinkedIn ↗",
    bento_header: "Impacto Verificado",
    bento_live: "En vivo",
    bento_label: "Valor Neto de Negocio Entregado",
    impact_tag: "En Cifras",
    impact_title: "Impacto de Negocio <span class=\"gradient-text\">Medible</span>",
    impact_sub: "Cada automatización entrega un ROI cuantificado — no actividad, resultados.",
    m1_label: "Impacto de Negocio Total Gestionado",
    m1_detail: "Beneficio neto + mitigación de riesgos combinados",
    m2_label: "Beneficio Directo Neto Generado",
    m2_detail: "Recuperado con ROI positivo",
    m3_label: "Riesgo Financiero Mitigado",
    m3_detail: "SUNAFIL ($151K) + Promociones ($53K)",
    m4_label: "Horas-Hombre Liberadas",
    m4_detail: "En 9 procesos automatizados en producción",
    m5_label: "Bots en Producción",
    m5_detail: "SAP, Kronos, Inaltele, OpenAI API y más",
    m6_label: "Time-to-Market (Cloud-Native)",
    m6_detail: "GCP Cloud Run + .NET vía entrega agéntica",
    exp_tag: "Trayectoria",
    exp_title: "Experiencia <span class=\"gradient-text\">Profesional</span>",
    exp_p_role: "Especialista en Automatización con IA",
    exp_p_period: "Jul 2024 – Presente",
    exp_p_a1: "<strong>Orquesté la integración de la API de OpenAI</strong> con A360 para generar contenido web y SEO de forma autónoma — liberando <strong>1,858+ horas-hombre</strong>.",
    exp_p_a2: "<strong>Entregué una solución Cloud-Native de generación de OCs</strong> en GCP/.NET mediante generación agéntica de código en <strong>2.5 semanas</strong> usando CI/CD en Azure DevOps.",
    exp_p_a3: "<strong>Eliminé ~$53,300 USD/mes en riesgo financiero</strong> liderando la arquitectura lógica y el QA del proceso de carga de promociones.",
    exp_p_a4: "<strong>Mitigué $151,842 USD en riesgo regulatorio (SUNAFIL)</strong> sistematizando el control de horas extra en Kronos y Sharepoint.",
    exp_p_a5: "<strong>Modernicé pipelines de datos</strong>: reemplacé el raspado de interfaz frágil por consultas directas a Oracle DB y scripts de transformación en Python.",
    exp_p_a6: "Construí y escalé la infraestructura corporativa de RPA desde cero — <strong>9 bots en producción simultánea</strong> incluyendo monitoreo de SAP iRPA.",
    exp_g_company: "GLOBAL HITSS (Telecomunicaciones)",
    exp_g_role: "Consultor de Automatización RPA",
    exp_g_period: "Abr 2023 – Jun 2024",
    exp_g_a1: "<strong>Desarrollé 4 procesos críticos de automatización</strong> para Claro Perú habilitando la activación/desactivación masiva de planes cloud.",
    exp_g_a2: "<strong>Diseñé arquitecturas de bots resilientes</strong> con mecanismos de reintento dinámico para entornos legados inestables.",
    exp_g_a3: "<strong>Elaboré documentación técnica completa</strong> (PDD/SDD) liderando sesiones de Process Discovery directo con usuarios finales.",
    exp_s_role: "Desarrollador Fullstack",
    exp_s_period: "May 2022 – Dic 2022",
    exp_s_a1: "<strong>Ingenieré un sistema escalable de tracking de documentos</strong> para Movistar usando Node.js + TypeScript bajo Agile/Scrum.",
    exp_s_a2: "<strong>Aseguré el cumplimiento del 100% con SUNAT</strong> mediante el desarrollo de módulos de facturación electrónica.",
    exp_m_role: "Desarrollador Fullstack",
    exp_m_period: "Mar 2022 – Jul 2022",
    exp_m_a1: "Diseñé diagramas Entidad-Relación y desarrollé el backend + frontend de sistemas de facturación.",
    proj_tag: "Proyectos",
    proj_title: "Automatizaciones <span class=\"gradient-text\">Clave</span>",
    proj1_badge: "Cloud Native",
    proj1_title: "Generación de OCs — GCP Cloud Run",
    proj1_desc: "Migración de generación de OCs basada en RPA a un Job Cloud-Native en GCP/.NET con CI/CD en Azure DevOps e integración con Graph API. Entregado en <strong>2.5 semanas</strong> vía orquestación de código agéntica.",
    proj2_badge: "$53K+ Riesgo Eliminado",
    proj2_title: "Carga de Promociones — Eliminación de Riesgo",
    proj2_desc: "Liderazgo de arquitectura lógica y QA de flujo crítico de carga de promociones previniendo pérdidas de ~S/ 200,000 mensuales. Desplegado como Job para validación de reglas de negocio.",
    proj3_badge: "Integración de IA",
    proj3_title: "Descripciones Web y SEO — OpenAI API",
    proj3_desc: "Integración de OpenAI API vía acciones REST en A360 para generar autónomamente descripciones de productos y textos SEO a escala, eliminando flujos manuales y liberando <strong>1,858+ horas</strong>.",
    proj4_badge: "$151K Riesgo Regulatorio",
    proj4_title: "Control de Horas Extra — Cumplimiento SUNAFIL",
    proj4_desc: "Sistematización del tracking de horas extra en Kronos, Excel y Sharepoint, mitigando ~$151,842 USD en sanciones de SUNAFIL mediante pipelines de conciliación automatizados.",
    proj5_badge: "Migración de BD",
    proj5_title: "Acceso Directo a Oracle DB",
    proj5_desc: "Reemplazo de extracción frágil por interfaz por consultas directas a Oracle DB. Combinado con scripts de Python para sustituir flujos extensos de acciones nativas en A360.",
    proj6_title: "Sistema de Tracking de Documentos",
    proj6_desc: "Ingeniería de un sistema escalable para Movistar usando Node.js + TypeScript bajo un marco de trabajo Agile/Scrum estricto con colaboración vía Git.",
    skills_tag: "Especialidad",
    skills_title: "Habilidades <span class=\"gradient-text\">Técnicas</span>",
    skills_g1_title: "IA y Orquestación",
    skills_g1_s1: "Orquestación de LLMs (OpenAI API)",
    skills_g1_s2: "Generación Agéntica de Código",
    skills_g1_s3: "SDLC Asistido por IA",
    skills_g1_s4: "Validación de Lógica de Negocio (QA)",
    skills_g2_title: "RPA y Automatización",
    skills_g2_s1: "Automation Anywhere A360 (Master)",
    skills_g2_s2: "Diseño de Procesos (PDD/SDD)",
    skills_g2_s3: "Arquitectura y Resiliencia de Bots",
    skills_g2_s4: "Monitoreo de SAP iRPA",
    skills_g3_title: "Cloud y DevOps",
    skills_g3_s1: "GCP Cloud Run (Jobs)",
    skills_g3_s2: "Azure DevOps (CI/CD)",
    skills_g3_s3: "Microsoft Graph API",
    skills_g3_s4: "GitHub",
    skills_g4_title: "Ingeniería",
    skills_g4_s1: "Python (scripting, transformación)",
    skills_g4_s2: "SQL (Oracle DB, SQLite)",
    skills_g4_s3: "Node.js / TypeScript",
    skills_g4_s4: ".NET (entrega orquestada)",
    skills_g5_title: "Sistemas Enterprise",
    skills_g6_title: "Procesos y Liderazgo",
    skills_g6_s1: "Process Discovery y Análisis",
    skills_g6_s2: "Ingeniería de Requerimientos",
    skills_g6_s3: "Agile / Scrum",
    skills_g6_s4: "17 Documentos Técnicos (PDD/SDD)",
    certs_tag: "Credenciales",
    certs_title: "Certificaciones y <span class=\"gradient-text\">Educación</span>",
    cert2_title: "Certificación de Automatización Avanzada",
    cert3_title: "Certificación de Automatización Essentials",
    cert4_title: "Bachiller en Ciencias de la Computación",
    contact_tag: "Hablemos",
    contact_title: "¿Listo para <span class=\"gradient-text\">Automatizar</span> tu Negocio?",
    contact_sub: "Me especializo en entregar sistemas autónomos que generan un ROI real y medible. Discutamos tus cuellos de botella operativos.",
    contact_loc_label: "Ubicación",
    contact_loc_val: "Lima, Perú · Disponible Remoto",
    contact_phone_label: "Teléfono / WhatsApp",
    footer_title: "Orquestador de Agentes de IA",
    footer_sub: "Construido para mostrar impacto real, no solo actividades."
  }
};

/* ─── LANGUAGE LOGIC ─────────────────────────────────── */
const langToggleBtn = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

const setLanguage = (lang) => {
  localStorage.setItem('lang', lang);
  langText.textContent = lang === 'en' ? 'ES' : 'EN';
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update dynamic elements that might need specific formatting
  updateDynamicContent(lang);
};

const getPreferredLang = () => {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const browserLang = navigator.language.split('-')[0];
  return translations[browserLang] ? browserLang : 'en';
};

function updateDynamicContent(lang) {
  // Re-run counters or update labels if necessary
  // For now, let's just make sure titles are updated
}

langToggleBtn.addEventListener('click', () => {
  const currentLang = localStorage.getItem('lang') || 'en';
  setLanguage(currentLang === 'en' ? 'es' : 'en');
});

// Initialize Language
setLanguage(getPreferredLang());


/* ─── THEME TOGGLE (LIGHT/DARK) ─────────────────────── */
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check local storage or system preference
const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  if (theme === 'dark') {
    themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
  } else {
    themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
  }
};

// Initialize theme
setTheme(getPreferredTheme());

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

/* ─── NAVBAR SCROLL EFFECT ─────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)';
  } else {
    navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
  }
});

/* ─── ACTIVE NAV LINK ──────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active-link',
          link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => observer.observe(s));

/* ─── SCROLL REVEAL ────────────────────────────────── */
const revealEls = document.querySelectorAll(
  '.metric-card, .tl-card, .project-card, .skill-group, .cert-card, .contact-card, .section-title, .section-sub, .section-tag'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 40);
      revealObs.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -80px 0px' });
revealEls.forEach(el => revealObs.observe(el));

/* ─── COUNTER ANIMATION ────────────────────────────── */
function animateCounter(el, card) {
  const target = parseFloat(card.dataset.value);
  const prefix = card.dataset.prefix || '';
  const suffix = card.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease out expo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = eased * target;

    // Format display
    if (suffix === '+ hrs') {
      el.textContent = Math.round(current).toLocaleString() + suffix;
    } else if (suffix === ' bots') {
      el.textContent = Math.round(current) + suffix;
    } else if (suffix === '.5 weeks') {
      el.textContent = (current >= target ? '2' : '0') + suffix;
    } else {
      // money format
      el.textContent = prefix + Math.round(current).toLocaleString();
    }

    if (progress < 1) requestAnimationFrame(tick);
    else {
      if (suffix === '+ hrs') el.textContent = '1,858' + suffix;
      else if (suffix === ' bots') el.textContent = '9' + suffix;
      else if (suffix === '.5 weeks') el.textContent = '2' + suffix;
      else el.textContent = prefix + Number(target).toLocaleString();
    }
  }
  requestAnimationFrame(tick);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card = entry.target;
      const valueEl = card.querySelector('.metric-value');
      animateCounter(valueEl, card);
      counterObs.unobserve(card);
    }
  });
}, { rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.metric-card').forEach(card => counterObs.observe(card));

/* ─── SMOOTH SCROLL FOR NAV ─────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
