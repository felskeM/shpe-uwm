import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  allowedDevOrigins: [
    '127.0.0.1',
    'localhost',
    '10.0.14.252'
  ],
};

export default withBundleAnalyzer(nextConfig);
