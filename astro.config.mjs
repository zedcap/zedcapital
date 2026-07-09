// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ZedCap marketing splash. Static output — deployed to GitHub Pages.
// Faithful rebuild of the live design at zedcapital.xyz.
//
// Custom-domain deploy: served at the apex zedcapital.xyz via public/CNAME.
//
// Hand-built Astro, sharp image service, build to the default dist/.
export default defineConfig({
  output: 'static',
  site: 'https://zedcapital.xyz',
  base: '/',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [sitemap()],
});
