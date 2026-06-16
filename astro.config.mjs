import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.NEXT_PUBLIC_BASE_URL || 'https://avanintelligence.com',
  integrations: [react(), sitemap()],
  output: 'static',
});
