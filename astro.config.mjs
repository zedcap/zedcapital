// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ZedCap marketing splash. Static output — deployed to GitHub Pages.
// Faithful rebuild of the live design at zedcapital.xyz.
//
// VALIDATION DEPLOY: GitHub Pages project site at
//   https://zedcap.github.io/zedcapital/
// so `site` is the github.io host and `base` is the repo subpath. On
// custom-domain cutover (zedcapital.xyz), revert to
//   site: 'https://zedcapital.xyz', base: '/'
//
// Hand-built Astro, sharp image service, build to the default dist/.
export default defineConfig({
  output: 'static',
  site: 'https://zedcap.github.io',
  base: '/zedcapital',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [sitemap()],
});
