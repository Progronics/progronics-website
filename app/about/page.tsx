import type { Metadata } from "next"
import { AboutPageClient } from "./page.client"
import { buildMetadata } from "@/lib/seo"
import { webPageSchema, breadcrumbSchema, jsonLdString } from "@/lib/structured-data"

export function generateMetadata(): Metadata {
  return buildMetadata("about")
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            webPageSchema("about"),
            breadcrumbSchema([
              { name: "Home", path: "" },
              { name: "About", path: "/about" },
            ]),
          ),
        }}
      />
      <AboutPageClient />
    </>
  )
}
