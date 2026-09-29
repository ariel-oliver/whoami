import type { NextConfig } from "next";

// The site is served from the root of https://arielson.dev. The deploy workflow
// passes the Pages base path, which is empty while the custom domain is set; it
// falls back to /<repo> only if the domain is removed.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
