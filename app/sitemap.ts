import type { MetadataRoute } from 'next';

export const dynamic = 'force-static'; // required for static export
export const revalidate = 86400;  
const isGh = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGh ? '/shpe-uwm' : '');

// Site URL depending on deployment target
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isGh ? 'https://felskem.github.io' : (process.env.CF_PAGES_URL ?? 'https://shpe-uwm.pages.dev'));

const routes = ['/', '/about', '/contact', '/events', '/officers', '/sponsors'];
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((p) => ({
    url: `${siteUrl}${basePath}${p === '/' ? '' : p}`,
    lastModified: now,
    changeFrequency: p === '/events' ? 'weekly' : 'monthly',
    priority: p === '/' ? 1.0 : p === '/events' ? 0.8 : 0.6,
  }));
}
