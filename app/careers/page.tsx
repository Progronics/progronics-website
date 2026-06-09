import type { Metadata } from "next"
import CareersClient from "./CareersClient"
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
  return buildMetadata("careers", lang)
}

export default async function CareersPage({
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
            webPageSchema("careers", locale),
            breadcrumbSchema(locale, [
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
