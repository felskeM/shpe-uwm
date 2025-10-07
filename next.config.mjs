// next.config.mjs
import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const isPages = process.env.GITHUB_PAGES === "true"; // set in Actions only
const repo = "shpe-uwm"; // <<< your repo name

const nextConfig = {
  // --- Static Export for GitHub Pages ---
  output: "export",

  // Next/Image doesn't run an optimizer on static export
  images: { unoptimized: true },

  // GitHub Pages serves under /<repo> (NOT root). Keep dev local paths clean.
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,

  // (Optional) directory-style URLs are often safer on Pages
  // trailingSlash: true,

  // Existing stuff
  eslint: { ignoreDuringBuilds: true },

  // Dev-only; harmless here but not needed in prod
  allowedDevOrigins: ["127.0.0.1", "localhost", "10.0.14.252"],
};

export default withBundleAnalyzer(nextConfig);
