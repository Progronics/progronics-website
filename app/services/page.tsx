import type { Metadata } from "next"
import ServicesClient from "./ServicesClient"
import { buildMetadata, normalizeLocale } from "@/lib/seo"
import {
  webPageSchema,
  breadcrumbSchema,
  serviceListSchema,
  faqSchema,
  jsonLdString,
} from "@/lib/structured-data"
import { dict } from "@/lib/constants"

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("services")
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = normalizeLocale(lang)
 

  const services = (dict?.services_page?.cards ?? []).map(
    (card: { title: string; paragraphs?: string[] }) => ({
      title: card.title,
      description: Array.isArray(card.paragraphs) ? card.paragraphs[0] ?? "" : "",
    }),
  )

  const faqs = (dict?.faq_section?.cards ?? []) as {
    question: string
    answer: string
  }[]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            webPageSchema("services", locale),
            breadcrumbSchema(locale, [
              { name: "Home", path: "" },
              { name: "Services", path: "/services" },
            ]),
            serviceListSchema(locale, services),
            faqSchema(faqs),
          ),
        }}
      />
      <ServicesClient />
    </>
  )
}
