import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
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
