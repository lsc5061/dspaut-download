import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4322, // Set to 4322 to prevent port collision with main (3000) and support (4321)
  }
});
