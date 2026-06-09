import type { Metadata } from "next"
import CareersClient from "./CareersClient"
import { buildMetadata } from "@/lib/seo"
import { webPageSchema, breadcrumbSchema, jsonLdString } from "@/lib/structured-data"

export function generateMetadata(): Metadata {
  return buildMetadata("careers")
}

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            webPageSchema("careers"),
            breadcrumbSchema([
              { name: "Home", path: "" },
              { name: "Careers", path: "/careers" },
            ]),
          ),
        }}
      />
      <CareersClient />
    </>
  )
}
