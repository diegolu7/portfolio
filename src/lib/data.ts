import toolboxImg from '../assets/img/toolbox_home.png';
import cfvpraxisImg from '../assets/img/CFVPraxis_elearning_home.png';
import arcorImg from '../assets/img/arcor_home.png';
import saphirusImg from '../assets/img/saphirus_home.png';
import dashboardImg from '../assets/img/dashboard_aec_home.png';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  color: string;
  icon: string;
  image?: string;
  repo: string;
  demo?: string;
}

export interface Testimonial {
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  full: string;
  initials: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const profile = {
  name: 'Diego Castro',
  title: 'Desarrollador Web FullStack',
  tagline:
    'Construyo soluciones web que combinan rendimiento, clean architecture y experiencia de usuario.',
  lema: 'Código limpio. Productos sólidos. Resultados medibles.',
  tags: ['PHP', 'WordPress', 'WooCommerce', 'Laravel', 'React.js', 'DevOps'],
  location: 'Salta, Argentina',
  email: 'diegolu7@gmail.com',
  phone: '+54 9 3875640494',
  whatsapp: '5493875640494',
  linkedin: 'https://linkedin.com/in/diegolu7',
  github: 'https://github.com/diegolu7',
  experienceYears: '+5',
  education: [
    'Tecnicatura Teclab (por finalizar)',
    'Lic. Análisis de Sistemas — UNSa (en curso)',
  ],
};

export const stats = [
  { value: '+5', label: 'Años de experiencia' },
  { value: '+40', label: 'Proyectos entregados' },
  { value: '+10', label: 'Integraciones API' },
  { value: '3', label: 'Especialidades core' },
  { value: '100%', label: 'Compromiso y calidad' },
];

export const skills = [
  {
    category: 'Backend',
    items: ['PHP 8.3', 'Laravel 12', 'Livewire', 'Blade', 'Node.js', 'MySQL', 'REST APIs'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'TypeScript', 'Material UI', 'jQuery', 'Tailwind CSS', 'Astro'],
  },
  {
    category: 'E-commerce',
    items: ['WordPress', 'WooCommerce', 'Plugins a medida', 'Tutor LMS', 'Pagos online', 'Alto tráfico'],
  },
  {
    category: 'Integraciones',
    items: ['APIs REST', 'SOAP', 'Webhooks', 'Swagger', 'Postman', 'n8n', 'SendGrid'],
  },
  {
    category: 'Inteligencia Artificial',
    items: ['opencode', 'ChatGPT', 'Codex', 'Prompt Engineering', 'Testing automático con IA'],
  },
  {
    category: 'Inteligencia Artificial',
    items: ['opencode', 'ChatGPT', 'Codex', 'Prompt Engineering', 'Testing automático con IA'],
  },
  {
    category: 'Metodologías',
    items: ['Agile', 'Scrum', 'Clean Architecture', 'Clean Code', 'QA', 'Troubleshooting'],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: 'cfvpraxis',
    role: 'Desarrollador FullStack PHP / WordPress / Laravel',
    company: 'CFV Praxis',
    period: 'Mar 2026 — Actualidad',
    location: 'Remoto · Salta, Argentina',
    current: true,
    summary:
      'Desarrollo y mantenimiento de soluciones web para entornos educativos, comerciales y corporativos sobre AWS.',
    highlights: [
      'ToolBox V3: app empresarial Laravel 12 + Livewire con arquitectura modular, KPIs, roles y permisos, desplegada en AWS EC2/RDS.',
      'Integración de sitio comercial (WooCommerce) con campus educativo (Tutor LMS): inscripción automática, sync de usuarios y acceso por tokens de único uso.',
      'Infraestructura, troubleshooting, pagos (Payway/Mercado Pago) y mejoras UX/UI en dashboards administrativos.',
    ],
    stack: ['Laravel 12', 'PHP 8.3', 'WordPress', 'WooCommerce', 'Tutor LMS', 'Livewire', 'AWS', 'Nginx', 'Redis'],
    icon: 'graduation',
  },
  {
    id: 'minimalart',
    role: 'Developer / FullStack Developer',
    company: 'Minimalart',
    period: 'Ago 2022 — Ago 2025',
    location: 'Remoto · Salta / CABA',
    summary:
      'Desarrollo y mantenimiento de soluciones para marcas como Arcor en Casa, Saphirus, Issuecolor y DirectConnectionTravel.',
    highlights: [
      'Arcor en Casa: e-commerce de alto tráfico en WordPress/WooCommerce con plugins a medida, optimización de performance y mantenimiento evolutivo.',
      'Dashboard legacy de ventas: frontend React + Material UI con backend Laravel y API documentada en Swagger.',
      'Saphirus: plugins custom, integraciones y resolución de bugs críticos del e-commerce.',
    ],
    stack: ['PHP', 'WordPress', 'WooCommerce', 'Laravel', 'React', 'Material UI', 'MySQL', 'API REST'],
    icon: 'briefcase',
  },
  {
    id: 'freelance',
    role: 'Desarrollador FullStack Freelance',
    company: 'Independiente',
    period: 'Ene 2020 — Ago 2022',
    location: 'Salta, Argentina',
    summary:
      'Desarrollo de soluciones web para clientes de distintos rubros con foco en e-commerce y presencia digital.',
    highlights: [
      'Landing pages, sitios institucionales y sitios adaptativos.',
      'Tiendas online en WooCommerce con lógica de negocio y diseño responsive.',
      'Gestión autónoma de proyectos y comunicación directa con clientes.',
    ],
    stack: ['PHP', 'WordPress', 'WooCommerce', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    icon: 'rocket',
  },
];

export const education: Certification[] = [
  { title: 'Tecnicatura en Programación', issuer: 'Instituto Teclab', year: 'En curso · a una materia de finalizar' },
  { title: 'Licenciatura en Análisis de Sistemas', issuer: 'Universidad Nacional de Salta', year: 'En curso' },
];

export const certifications: Certification[] = [
  { title: 'Docker para desarrolladores', issuer: 'DevTalles', year: '2026' },
  { title: 'Prompt Engineering I', issuer: 'Founderz', year: '2026' },
  { title: 'Estrategias de marketing y negocios digitales', issuer: 'UTN · FR Resistencia', year: '2026' },
  { title: 'Actualización Profesional en Inteligencia Artificial', issuer: 'Teclab', year: '2025' },
  { title: 'Metodologías Ágiles', issuer: 'Teclab', year: '2025' },
  { title: 'Clean Code en JavaScript', issuer: 'Platzi', year: '2023' },
  { title: 'Bases de Datos Relacionales', issuer: 'TodoCode', year: '2023' },
  { title: 'Programación Full Stack', issuer: 'NUCBA', year: '2022' },
  { title: 'Programación Backend', issuer: 'NUCBA', year: '2022' },
  { title: 'Front End Avanzado', issuer: 'NUCBA', year: '2022' },
  { title: 'Workshop E-commerce', issuer: 'Minimalart', year: '2022' },
  { title: 'Workshop QA', issuer: 'Minimalart', year: '2022' },
  { title: 'Programación en Java', issuer: 'Universidad Nacional de Salta', year: '2022' },
  { title: 'SQL Server', issuer: 'EducaciónIT', year: '2021' },
  { title: 'JavaScript', issuer: 'CourseIt', year: '2019' },
  { title: 'Desarrollo Web', issuer: 'CourseIt', year: '2018' },
  { title: 'Linux', issuer: 'EducaciónIT', year: '2018' },
];

export const projects: Project[] = [
  {
    id: 'toolbox-v3',
    name: 'Toolbox V3',
    tagline: 'Gestor de alumnos con datos clave para la toma de decisiones.',
    description:
      'Gestor de alumnos de CFV Praxis que consume información del sitio de e-learning y expone datos relevantes para la toma de decisiones. Construido en Laravel con Livewire y Blade, e integrado mediante webhooks con el ecosistema educativo.',
    stack: ['Laravel', 'Livewire', 'Blade', 'Webhooks', 'MySQL'],
    color: '#54D6FF',
    icon: 'box',
    image: toolboxImg.src,
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'cfvpraxis-comercial',
    name: 'CFV Praxis Comercial',
    tagline: 'Sitio comercial de venta de cursos online.',
    description:
      'Sitio comercial de CFV Praxis para la venta de cursos. Construido en WordPress con WooCommerce; incluye mantenimiento continuo del theme y de los plugins para asegurar estabilidad en las ventas.',
    stack: ['WordPress', 'WooCommerce', 'Theme custom', 'Plugins', 'PHP'],
    color: '#17A8E5',
    icon: 'cart',
    image: cfvpraxisImg.src,
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'arcor-en-casa',
    name: 'Arcor en Casa E-commerce',
    tagline: 'E-commerce WordPress/WooCommerce con desarrollo y mantenimiento de plugins.',
    description:
      'Mantenimiento integral del sitio de Arcor en Casa: gestión de plugins, múltiples desarrollos a medida y actualización de los flujos de entrega para mejorar la operación del e-commerce.',
    stack: ['WordPress', 'WooCommerce', 'Plugins a medida', 'PHP', 'Flujos de entrega'],
    color: '#17A8E5',
    icon: 'cart',
    image: arcorImg.src,
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'saphirus-ecommerce',
    name: 'Saphirus E-commerce',
    tagline: 'Tienda online con plugins a medida y resolución de bugs críticos.',
    description:
      'Tienda de Saphirus: se desarrollaron plugins a medida y se resolvieron bugs problemáticos que impactaban en la operación, mejorando la confiabilidad y el funcionamiento del store.',
    stack: ['WordPress', 'WooCommerce', 'Plugins a medida', 'PHP', 'Debugging'],
    color: '#54D6FF',
    icon: 'plug',
    image: saphirusImg.src,
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'plugins-woocommerce',
    name: 'Plugins WordPress a medida',
    tagline: 'Plugins e integraciones custom: import/export de datos y APIs WooCommerce.',
    description:
      'Desarrollo de múltiples plugins e integraciones a medida sobre WordPress/WooCommerce: importación y exportación de datos, integraciones con APIs y automatización de procesos de venta.',
    stack: ['PHP', 'WordPress', 'WooCommerce', 'APIs REST', 'Import/Export'],
    color: '#54D6FF',
    icon: 'plug',
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'dashboard-ventas',
    name: 'Dashboard de ventas',
    tagline: 'Métricas y comparativas del e-commerce de Arcor en Casa.',
    description:
      'Dashboard con métricas sobre el e-commerce de Arcor en Casa para comparar información de ventas, productos y categorías entre meses mediante gráficas. Frontend en React con Material UI y backend en Laravel con API documentada en Swagger.',
    stack: ['React', 'Material UI', 'Laravel', 'Swagger', 'MySQL'],
    color: '#17A8E5',
    icon: 'chart',
    image: dashboardImg.src,
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
];

export const services: Service[] = [
  {
    id: 'fullstack',
    title: 'Desarrollo Full Stack',
    description: 'Aplicaciones web completas y escalables con PHP, Laravel y React.',
    icon: 'code',
    items: ['Aplicaciones web a medida', 'APIs RESTful', 'Clean Architecture', 'Migraciones legacy'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce WordPress/WooCommerce',
    description: 'Tiendas online profesionales, plugins a medida y optimización de ventas.',
    icon: 'cart',
    items: ['WooCommerce setup', 'Plugins custom', 'Optimización de performance', 'Checkout optimizado'],
  },
  {
    id: 'devops',
    title: 'DevOps & Infraestructura',
    description: 'Despliegue, escalado y mantenimiento de infraestructura en la nube.',
    icon: 'server',
    items: ['AWS', 'Docker', 'Nginx', 'CI/CD pipelines'],
  },
  {
    id: 'api',
    title: 'Integraciones API y automatización',
    description: 'Conecto sistemas que trabajan juntos de forma automática y segura.',
    icon: 'plug',
    items: ['APIs REST', 'Webhooks', 'Swagger/OpenAPI', 'Automatización de procesos'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'alvaro',
    name: 'Álvaro Albornoz',
    role: 'Team Leader',
    company: 'Saphirus · Minimalart',
    quote: 'Buen compañero, comprometido y con una capacidad técnica que aporta muchísimo al equipo.',
    full: 'Trabajamos juntos en proyectos exigentes de Minimalart y siempre se destacó por su compromiso y su capacidad para resolver problemas complejos. Su enfoque en código limpio y buenas prácticas hizo que el equipo fuera mucho más productivo. Sin dudas alguien que suma desde el primer día.',
    initials: 'ÁA',
    color: '#54D6FF',
  },
  {
    id: 'pablo',
    name: 'Pablo Méndez',
    role: 'Team Leader',
    company: 'Arcor en Casa · Minimalart',
    quote: 'Confiable y de rápida adaptación. Sabe sostener productos complejos bajo presión.',
    full: 'Con Diego trabajamos en Arcor en Casa, un e-commerce con un tráfico muy alto donde los errores no perdonan. Siempre tuvo la claridad para priorizar, comunicar y ejecutar. Rápido para adaptarse a nuevas tecnologías y muy confiable cuando la presión es máxima. Una gran referencia para cualquier equipo técnico.',
    initials: 'PM',
    color: '#17A8E5',
  },
];