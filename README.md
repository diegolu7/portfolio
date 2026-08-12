# 🚀 Mi Portafolio — Diego Castro

Portafolio personal de **Diego Castro, Desarrollador Web FullStack**, construido con **Astro + React + Tailwind CSS**. Es un sitio 100% estático con animaciones, modales interactivos y diseño responsive.

## 🛠️ Stack Tecnológico

| Capa          | Tecnología                                  |
| ------------- | ------------------------------------------- |
| Framework     | [Astro](https://astro.build) con TypeScript |
| Componentes   | React                                       |
| Estilos       | Tailwind CSS                                |
| Animaciones   | Framer Motion                               |
| Build         | `astro build` → estático en `/dist`         |

## 📦 Requisitos previos

- **Node.js** ≥ 18 (recomendado 20+)
- **npm** (incluido con Node)

## ▶️ Cómo levantar el proyecto

### 1. Instalar dependencias

```bash
npm install
```

### 2. Entorno de desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador. El servidor se recarga automáticamente con cada cambio (`--host` para acceder desde la red local).

### 3. Build de producción

```bash
npm run build
```

Genera el sitio estático optimizado en la carpeta `dist/`.

### 4. Previsualizar el build

```bash
npm run preview
```

Sirve la versión de producción en [http://localhost:4321](http://localhost:4321).

## 📝 Scripts disponibles

| Comando           | Descripción                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo con hot-reload      |
| `npm run build`   | Compila el sitio estático en `dist/`       |
| `npm run preview` | Previsualiza el build de producción        |
| `npm run astro`   | CLI de Astro (ej. `npm run astro check`)   |

## 🗂️ Estructura del proyecto

```
mi-portafolio/
├── public/                 # Assets estáticos (favicon)
├── src/
│   ├── components/
│   │   ├── sections/       # Hero, About, Projects, Services, Testimonials, Contact
│   │   └── ui/             # Icon, Modal, Reveal, SectionHeading
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── data.ts         # Datos del portfolio (perfil, proyectos, servicios…)
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css      # Temas y estilos base
├── docs/                   # Documentación (tarea, design system, prompts)
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json
```

## 🎨 Sistema de diseño

El sistema visual **Midnight Cyan** (dark mode con acentos cian) está documentado en [`docs/design-01.json`](./docs/design-01.json) e implementado en `tailwind.config.cjs` y `src/styles/global.css`.

## 📚 Documentación

- [Tarea / especificaciones](./docs/tarea.md)
- [Design system](./docs/design-01.json)
- [Prompts](./docs/prompts/)