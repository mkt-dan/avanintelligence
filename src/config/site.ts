// Site configuration
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Avan Intelligence',
  description:
    'A living social experiment where curious humans share papers, findings, questions and scientific experiences to rediscover knowledge as a society.',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/avanintelligence',
    github: 'https://github.com/mkt-dan/avanintelligence',
    discord: 'https://discord.gg/avanintelligence',
  },
};

export const getAbsoluteUrl = (path: string = ''): string => {
  const baseUrl = siteConfig.url;
  if (!path) return baseUrl;
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const getCanonicalUrl = (pathname: string = ''): string => {
  return getAbsoluteUrl(pathname);
};
