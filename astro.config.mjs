// @ts-check
import { defineConfig } from 'astro/config';

// zedcapital.xyz: hand-built static files in public/, copied verbatim to dist/.
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
});
