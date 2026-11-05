import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Allow crawlers to access /qr so they can see its noindex directive.
      disallow: ["/admin", "/api", "/private"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
