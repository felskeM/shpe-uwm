import type { MetadataRoute } from 'next';

export const dynamic = 'force-static'; // required for static export
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const siteUrl = process.env.CF_PAGES_URL ?? 'https://shpe-uwm.pages.dev';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}${basePath}/sitemap.xml`,
  };
}
