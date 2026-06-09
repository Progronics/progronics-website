import type { Metadata } from "next"
import PrivacyClient from "./PrivacyClient"
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
  return buildMetadata("privacy", lang)
}

export default async function PrivacyPage({
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
            webPageSchema("privacy", locale),
            breadcrumbSchema(locale, [
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
