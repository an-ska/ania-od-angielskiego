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
  ];
}
