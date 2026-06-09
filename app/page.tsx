import type { Metadata } from "next"
import MainPages from "./page.client"
import { buildMetadata } from "@/lib/seo"
import { webPageSchema, jsonLdString } from "@/lib/structured-data"

export function generateMetadata(): Metadata {
  return buildMetadata("home")
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(webPageSchema("home")),
        }}
      />
      <MainPages />
    </>
  )
}
