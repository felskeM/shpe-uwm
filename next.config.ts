/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {},
  // Don’t use Next’s optimizer at all – just serve /public images directly
  unoptimized: true,
};

export default nextConfig;
