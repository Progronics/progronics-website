import type { Metadata } from "next"
import MainPages from "./page.client"
import { buildMetadata, type Locale } from "@/lib/seo"
import { webPageSchema, jsonLdString } from "@/lib/structured-data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return buildMetadata("home", lang)
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(webPageSchema("home", lang as Locale)),
        }}
      />
      <MainPages />
    </>
  )
}
