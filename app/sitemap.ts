import type { MetadataRoute } from "next"
import { LOCALES, PAGE_SEO, buildUrl, DEFAULT_LOCALE, type PageKey } from "@/lib/seo"

/**
 * Generates a localized sitemap. Every page is emitted once per locale with
 * hreflang alternates so Google can serve the correct language version.
 * The /qr utility page is intentionally excluded (it is noindex).
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

  const changeFrequency: Record<PageKey, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
    home: "weekly",
    services: "monthly",
    portfolio: "weekly",
    about: "monthly",
    contact: "monthly",
    careers: "weekly",
    privacy: "yearly",
  }

  const entries: MetadataRoute.Sitemap = []

  for (const key of Object.keys(PAGE_SEO) as PageKey[]) {
    const { path } = PAGE_SEO[key]

    // Build the hreflang alternates map for this page.
    const languages: Record<string, string> = {}
    for (const locale of LOCALES) {
      languages[locale] = buildUrl(locale, path)
    }
    languages["x-default"] = buildUrl(DEFAULT_LOCALE, path)

    for (const locale of LOCALES) {
      entries.push({
        url: buildUrl(locale, path),
        lastModified,
        changeFrequency: changeFrequency[key],
        priority: priorities[key],
        alternates: { languages },
      })
    }
  }

  return entries
}
