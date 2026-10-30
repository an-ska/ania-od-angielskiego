import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: siteConfig.contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}${siteConfig.paths.maturaPodstawowa}`,
      lastModified: siteConfig.contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}${siteConfig.paths.angielskiWIt}`,
      lastModified: siteConfig.contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
