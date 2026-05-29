import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/showqath-s-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
