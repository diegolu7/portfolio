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

export const profile = {
  name: 'Diego Luis Castro',
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
    items: ['PHP', 'Laravel', 'Livewire', 'Blade', 'MySQL', 'REST APIs'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Astro'],
  },
  {
    category: 'E-commerce',
    items: ['WordPress', 'WooCommerce', 'Plugins a medida', 'Optimización', 'Alto tráfico'],
  },
  {
    category: 'DevOps',
    items: ['AWS', 'Docker', 'Nginx', 'CI/CD', 'Metabase'],
  },
  {
    category: 'Inteligencia Artificial',
    items: ['opencode', 'ChatGPT', 'Codex', 'Testing automático con IA'],
  },
  {
    category: 'Especialidades',
    items: ['E-commerce', 'Plataformas educativas', 'Dashboards', 'Integraciones API'],
  },
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
    image: '/img/toolbox_home.png',
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
    image: '/img/CFVPraxis_elearning_home.png',
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
    image: '/img/arcor_home.png',
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
    image: '/img/saphirus_home.png',
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
    image: '/img/dashboard_aec_home.png',
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