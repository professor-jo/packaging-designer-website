// @ts-check
import { defineConfig } from 'astro/config';

// Netlify serves the site from the domain root. The GitHub Pages copy (built by
// GitHub Actions) lives under /packaging-designer-website/ and needs a base path.
const onGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: onGitHubPages ? 'https://professor-jo.github.io' : 'https://guavamango.netlify.app',
  base: onGitHubPages ? '/packaging-designer-website' : undefined,
});
