/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {},
  typedRoutes: true,
  eslint: { ignoreDuringBuilds: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
};

export default nextConfig;
