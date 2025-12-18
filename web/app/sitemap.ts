import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { parsePublishedAt } from "../lib/date";
import { getBlogEssays } from "./(blog)/utils";

const blogEssays = await getBlogEssays();

const essaySitemapEntries = blogEssays.map((essay) => ({
  url: `${siteConfig.url}/essay/${essay.slug}`,
  lastModified: parsePublishedAt(essay.metadata.publishedAt),
  changeFrequency: "monthly",
  priority: 0.4,
})) satisfies MetadataRoute.Sitemap;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/essays`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/research`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Generate Essays Sitemap Entries
    ...essaySitemapEntries,
  ];
}
