import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Extra widths so 150/200/230px offer art at 2x DPR hits ~300–460w
  // instead of jumping to deviceSizes 640w.
  images: {
    imageSizes: [32, 48, 64, 96, 128, 150, 200, 230, 256, 384, 400, 460],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ania-od-angielskiego.vercel.app",
          },
        ],
        destination: "https://www.ania-od-angielskiego.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
