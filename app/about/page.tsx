import type { Metadata } from "next"
import { AboutPageClient } from "./page.client"
import { buildMetadata, normalizeLocale } from "@/lib/seo"
import {
  webPageSchema,
  breadcrumbSchema,
  jsonLdString,
} from "@/lib/structured-data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return buildMetadata("about", lang)
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = normalizeLocale(lang)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            webPageSchema("about", locale),
            breadcrumbSchema(locale, [
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
