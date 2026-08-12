# 📝 Prompt de Construcción del Portafolio

Este documento es un registro del prompt original y del alcance acordado para construir el portafolio. Sirve de referencia para regenerar, replicar o auditar el proyecto.

---

## 🎯 Objetivo

Crear una página web tipo portafolio profesional y atractiva que muestre quién soy, mis habilidades, proyectos y formas de contacto, siguiendo las especificaciones de `docs/tarea.md` y el design system de `docs/design-01.json`.

## 🧱 Estructura de la Página (6 secciones)

1. **Hero** — presentación con nombre, título profesional, lema, CTAs y fondo visual
2. **Sobre mí** — descripción, stack tecnológico y experiencia
3. **Proyectos destacados** — galería con modales interactivos (nombre, descripción, stack, links)
4. **Servicios** — UI/UX, full stack, consultorías técnicas y apps
5. **Testimonios** — comentarios de clientes con modales expandidos
6. **Contacto** — formulario funcional, redes sociales y agenda de llamada

## 🖥️ Interacciones y UX

- Modales interactivos con info clara, buen contraste, botón de cierre y diseño responsive
- Transiciones suaves entre secciones
- Efectos hover en elementos interactivos
- Animaciones de entrada progresiva (scroll-triggered)
- Elementos gráficos modernos tipo Aceternity UI (auroras, glows, tarjetas flotantes)

## 🛠️ Stack Tecnológico

- **Framework:** Astro con TypeScript
- **Componentes:** React
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion + Aceternity UI
- **Build:** `astro build` → estático en `/dist`

## 🎨 Sistema de Diseño

Tema **Midnight Cyan** (dark mode, minimalista con acentos cian) según `docs/design-01.json`:

- Fondo: `#08111F` / tarjetas: `#0D1826`
- Texto claro: `#F4F8FC` · texto muted: `#9BAABD`
- Acento primario: `#17A8E5` · hover: `#54D6FF`
- Tipografía: Inter (System)
- Bordes: 8–10px en botones/badges, 12–14px en tarjetas

## 💾 Datos del Portfolio

- **Nombre:** Diego Luis Castro
- **Título:** Desarrollador Web FullStack
- **Ubicación:** Salta, Argentina
- **Email:** diegolu7@gmail.com · Tel: +54 9 3875640494
- **Proyectos:** ToolBox V3, Arcor en Casa, Plugins WooCommerce, Dashboard de ventas
- **Testimonios:** Álvaro Albornoz (Saphirus) · Pablo Méndez (Minimalart)

## ✅ Acceptance Criteria

- Build estático exitoso con `astro build`
- Typecheck sin errores (`tsc --noEmit`)
- Diseño responsive (mobile, tablet, desktop)
- Modales funcionales con cierre por botón y tecla `Escape`

---

## 🔁 Re-generación

Para reconstruir el proyecto desde cero con el mismo prompt:

```bash
npm create astro@latest -- --template minimal
```

Luego instalar: `@astrojs/react`, `@astrojs/tailwind`, `framer-motion`, `tailwindcss` y replicar la estructura de `src/` documentada en el README.