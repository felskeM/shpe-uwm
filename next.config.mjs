const isStatic = process.env.NEXT_STATIC_EXPORT === '1';
const repo = 'shpe-uwm';

/** @type {import('next').NextConfig} */
export default {
  output: isStatic ? 'export' : undefined,
  basePath: isStatic ? `/${repo}` : '',
  assetPrefix: isStatic ? `/${repo}` : '',
  images: { unoptimized: isStatic },
  trailingSlash: isStatic,
  typedRoutes: true,
  eslint: { ignoreDuringBuilds: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isStatic ? `/${repo}` : '',
  },

  // allowedDevOrigins will become required in Next.js 15
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://10.0.1.179:3000',
  ],
};
