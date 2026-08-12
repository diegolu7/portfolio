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
    name: 'ToolBox V3 (CFV Praxis)',
    tagline: 'Plataforma interna empresarial con arquitectura limpia.',
    description:
      'Sistema interno de gestión para CFV Praxis. Reconstrucción completa del producto aplicando Clean Architecture, separación clara de responsabilidades y módulos altamente testables. Livewire y Blade para una experiencia reactiva sin sacrificar simplicidad.',
    stack: ['Laravel', 'Livewire', 'Blade', 'Clean Architecture', 'MySQL'],
    color: '#54D6FF',
    icon: 'box',
    image: '/img/toolbox_home.png',
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'cfvpraxis-elearning',
    name: 'CFV Praxis E-learning',
    tagline: 'Plataforma educativa online con cursos y seguimiento.',
    description:
      'Plataforma educativa de CFV Praxis para dictar cursos online. Gestión de contenidos, matrículas, seguimiento de progreso de alumnos e integraciones con el ecosistema de la organización.',
    stack: ['Laravel', 'Livewire', 'Blade', 'MySQL', 'AWS'],
    color: '#17A8E5',
    icon: 'graduation',
    image: '/img/CFVPraxis_elearning_home.png',
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'arcor-en-casa',
    name: 'Arcor en Casa (Minimalart)',
    tagline: 'E-commerce WooCommerce de alto tráfico con rendimiento optimizado.',
    description:
      'Tienda oficial de Arcor gestionada por Minimalart. Implementación y optimización de performance para soportar alto tráfico y campañas grandes, mejorando tiempos de carga, caché y estabilidad en picos de demanda.',
    stack: ['WordPress', 'WooCommerce', 'Performance', 'Alto tráfico', 'Nginx'],
    color: '#17A8E5',
    icon: 'cart',
    image: '/img/arcor_home.png',
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'saphirus-ecommerce',
    name: 'Saphirus E-commerce',
    tagline: 'Tienda online con plugins WooCommerce a medida.',
    description:
      'Desarrollo y soporte del e-commerce de Saphirus en el ecosistema Minimart. Implementación de plugins WooCommerce a medida que automatizan procesos de venta, integran sistemas de pago y mejoran la conversión del checkout.',
    stack: ['WordPress', 'WooCommerce', 'Plugins a medida', 'PHP', 'APIs REST'],
    color: '#54D6FF',
    icon: 'plug',
    image: '/img/saphirus_home.png',
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'plugins-woocommerce',
    name: 'Plugins WooCommerce a medida',
    tagline: 'Extensiones custom integradas con APIs REST.',
    description:
      'Desarrollo de plugins WooCommerce personalizados para clientes, conectando tiendas con sistemas externos mediante APIs REST, documentadas con Swagger y probadas con Postman. Automatización de procesos de venta e integración logística.',
    stack: ['PHP', 'WooCommerce', 'APIs REST', 'Swagger', 'Postman'],
    color: '#54D6FF',
    icon: 'plug',
    repo: 'https://github.com/diegolu7',
    demo: undefined,
  },
  {
    id: 'dashboard-ventas',
    name: 'Dashboard de ventas legacy',
    tagline: 'Panel de analítica de ventas en tiempo real.',
    description:
      'Dashboard de ventas para un sistema legacy migrado a una arquitectura moderna. Backend en Laravel con React, MySQL como fuente de datos y Metabase para analítica avanzada y reportes ejecutivos.',
    stack: ['Laravel', 'React', 'MySQL', 'Metabase', 'Docker'],
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