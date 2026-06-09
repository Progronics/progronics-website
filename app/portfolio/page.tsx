import type { Metadata } from "next"
import { PortfolioClient } from "./PortfolioClient"
import { projects } from "@/data/constants"
import { buildMetadata, normalizeLocale } from "@/lib/seo"
import {
  webPageSchema,
  breadcrumbSchema,
  portfolioListSchema,
  jsonLdString,
} from "@/lib/structured-data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return buildMetadata("portfolio", lang)
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = normalizeLocale(lang)

  const projectList = projects.map((project) => ({
    title: project.title,
    description: project.description,
    url: project.url,
    img: project.img,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            webPageSchema("portfolio", locale),
            breadcrumbSchema(locale, [
              { name: "Home", path: "" },
              { name: "Portfolio", path: "/portfolio" },
            ]),
            portfolioListSchema(projectList),
          ),
        }}
      />
      <PortfolioClient />
    </>
  )
}
