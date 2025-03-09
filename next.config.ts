import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // Optional: Ensures all URLs end with a slash,
  output: "export",
  images: {
    unoptimized: true, // Needed for static export if using Next.js Image
  },
};

export default nextConfig;
