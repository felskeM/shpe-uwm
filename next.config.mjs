/** @type {import('next').NextConfig} */
const isStatic = process.env.NEXT_STATIC_EXPORT === '1';
const repo = 'shpe-uwm';

export default {
  output: isStatic ? 'export' : undefined,
  basePath: isStatic ? `/${repo}` : '',
  assetPrefix: isStatic ? `/${repo}` : '',
  images: { unoptimized: isStatic },
  trailingSlash: isStatic,
  typedRoutes: true,
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    // remove experimental.typedRoutes;
  },
};
