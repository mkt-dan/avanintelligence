import { siteConfig } from '@/config/site';

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/map',
    '/feed',
    '/papers',
    '/experiences',
    '/manifesto',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
