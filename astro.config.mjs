import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://download.dspaut.com',
  server: {
    port: 4322, // Set to 4322 to prevent port collision with main (3000) and support (4321)
  },
  integrations: [sitemap()]
});
