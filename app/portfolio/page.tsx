import type { Metadata } from "next"
import { PortfolioClient } from "./PortfolioClient"
import { projects } from "@/data/constants"
import { buildMetadata } from "@/lib/seo"
import {
  webPageSchema,
  breadcrumbSchema,
  portfolioListSchema,
  jsonLdString,
} from "@/lib/structured-data"

export function generateMetadata(): Metadata {
  return buildMetadata("portfolio")
}

export default function PortfolioPage() {
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
            webPageSchema("portfolio"),
            breadcrumbSchema([
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
