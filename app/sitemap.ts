import type { MetadataRoute } from "next"
import { PAGE_SEO, buildUrl, type PageKey } from "@/lib/seo"

/**
 * Generates the sitemap. One URL per page — no locale prefixes.
 * The /qr utility page is intentionally excluded (noindex).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const priorities: Record<PageKey, number> = {
    home: 1,
    services: 0.9,
    portfolio: 0.8,
    about: 0.8,
    contact: 0.8,
    careers: 0.7,
    privacy: 0.4,
  }

  const changeFrequency: Record<
    PageKey,
    MetadataRoute.Sitemap[number]["changeFrequency"]
  > = {
    home: "weekly",
    services: "monthly",
    portfolio: "weekly",
    about: "monthly",
    contact: "monthly",
    careers: "weekly",
    privacy: "yearly",
  }

  return (Object.keys(PAGE_SEO) as PageKey[]).map((key) => ({
    url: buildUrl(PAGE_SEO[key].path),
    lastModified,
    changeFrequency: changeFrequency[key],
    priority: priorities[key],
  }))
}
