// next.config.ts
const repo = "shpe-uwm";
const isStatic =
  process.env.NEXT_STATIC_EXPORT === "1" || process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isStatic ? "export" : undefined,
  basePath: isStatic ? `/${repo}` : "",
  assetPrefix: isStatic ? `/${repo}` : "",
  images: { unoptimized: isStatic },
  trailingSlash: isStatic,
  typedRoutes: true,
  eslint: { ignoreDuringBuilds: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isStatic ? `/${repo}` : "",
  },
  // Allowed dev origins for Next.js 15 requirement
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://10.0.1.179:3000",
    "http://192.168.12.101:3000",
  ],
};
export default nextConfig;
