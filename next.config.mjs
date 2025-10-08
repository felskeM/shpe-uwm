/** @type {import('next').NextConfig} */
const isStatic = process.env.NEXT_STATIC_EXPORT === '1';
const repo = 'shpe-uwm'; // (for https://felskeM.github.io/shpe-uwm)

export default {
  // Only enable static export for GH Pages builds:
  output: isStatic ? 'export' : undefined,

  // GH Pages serves from /<repo>, so set a basePath & assetPrefix in static mode:
  basePath: isStatic ? `/${repo}` : '',
  assetPrefix: isStatic ? `/${repo}` : '',

  // next/image must be unoptimized in export mode (no server to optimize)
  images: { unoptimized: isStatic },

  // Helps GH Pages find folder-based index.html files
  trailingSlash: isStatic,

  experimental: {
    typedRoutes: true,
  },
};
