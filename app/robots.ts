import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/private"],
    },
    sitemap: "https://progronics.com/sitemap.xml",
    host: "https://progronics.com",
  }
}
