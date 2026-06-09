import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Block API, admin, private routes and the noindex QR utility page
      // (both the bare path and all locale-prefixed variants).
      disallow: ["/admin", "/api", "/private", "/qr", "/*/qr"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
