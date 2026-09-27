import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100 % statique, généré dans out/ : s'héberge n'importe où (Vercel, Netlify, GitHub Pages…).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // Une seule page 404 pour les deux mises en page racines (FR et EN).
    globalNotFound: true,
  },
};

export default nextConfig;
