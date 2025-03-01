import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Optional: Ensures all URLs end with a slash
};

export default nextConfig;
