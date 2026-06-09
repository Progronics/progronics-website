import type { Metadata } from "next"
import PrivacyClient from "./PrivacyClient"
import { buildMetadata } from "@/lib/seo"
import { webPageSchema, breadcrumbSchema, jsonLdString } from "@/lib/structured-data"

export function generateMetadata(): Metadata {
  return buildMetadata("privacy")
}

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            webPageSchema("privacy"),
            breadcrumbSchema([
              { name: "Home", path: "" },
              { name: "Privacy Policy", path: "/privacy" },
            ]),
          ),
        }}
      />
      <PrivacyClient />
    </>
  )
}
