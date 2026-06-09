import type { Metadata } from "next"
import ContactClient from "./ContactClient"
import { buildMetadata } from "@/lib/seo"
import { webPageSchema, breadcrumbSchema, jsonLdString } from "@/lib/structured-data"

export function generateMetadata(): Metadata {
  return buildMetadata("contact")
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            webPageSchema("contact"),
            breadcrumbSchema([
              { name: "Home", path: "" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        }}
      />
      <ContactClient />
    </>
  )
}
