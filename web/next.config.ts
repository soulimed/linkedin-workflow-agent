import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages (and any static host).
 * Set NEXT_PUBLIC_BASE_PATH=/repo-name when deploying to project Pages
 * (https://user.github.io/repo-name). Leave unset for custom domains / Vercel root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
