import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // add config here if/when needed
  experimental: {}
};

module.exports = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

export default withBundleAnalyzer(nextConfig);