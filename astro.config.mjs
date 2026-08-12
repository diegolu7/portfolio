// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Para GitHub Pages se usa BASE_PATH=/portfolio/ en producción.
// Localmente (sin variable) queda en la raíz '/'.
// https://astro.build/config
export default defineConfig({
  site: 'https://diegolu7.github.io',
  base: process.env.BASE_PATH || '/',
  integrations: [react(), tailwind()],
});