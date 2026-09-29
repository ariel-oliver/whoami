import type { NextConfig } from "next";

// Served from the root of https://arielson.dev (see public/CNAME), so no basePath.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
