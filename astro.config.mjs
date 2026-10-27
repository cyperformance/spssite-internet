import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sportpaixsante.fr',
  // Génère nos-actions.html plutôt que nos-actions/index.html :
  // les adresses de l'ancien site restent valides.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [sitemap()],
});
