import type { NextConfig } from "next";

// GitHub Pages serves project sites from /<repo>. The deploy workflow passes
// that prefix in PAGES_BASE_PATH; local dev and custom domains leave it empty.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
