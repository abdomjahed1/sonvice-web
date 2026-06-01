// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://abdomjahed1.github.io',
  base: 'sonvice-web',
  vite: {
    plugins: [tailwindcss()]
  }
});