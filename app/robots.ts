import type { MetadataRoute } from 'next';

const isGh = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGh ? '/shpe-uwm' : '');

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isGh ? 'https://felskem.github.io' : (process.env.CF_PAGES_URL ?? 'https://shpe-uwm.pages.dev'));

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}${basePath}/sitemap.xml`,
  };
}
