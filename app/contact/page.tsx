import type { Metadata } from "next"
import ContactClient from "./ContactClient"
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
  return buildMetadata("contact", lang)
}

export default async function ContactPage({
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
            webPageSchema("contact", locale),
            breadcrumbSchema(locale, [
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
