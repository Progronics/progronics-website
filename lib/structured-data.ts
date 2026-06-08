import {
  SITE_NAME,
  SITE_URL,
  buildUrl,
  normalizeLocale,
  PAGE_SEO,
  type Locale,
  type PageKey,
} from "@/lib/seo"

/**
 * Centralized JSON-LD (schema.org) builders. Each returns a plain object that
 * is serialized into a <script type="application/ld+json"> tag.
 */

const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

const SERVICE_NAMES = [
  "Web Development",
  "Mobile App Development",
  "Custom Software Development",
  "UI/UX Design",
  "AI Automation",
  "DevOps Engineering",
  "Staff Augmentation",
  "Embedded Systems & IoT Development",
  "Branding and Marketing",
]

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: "Progronics Solutions LLP",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/combined.png`,
    description:
      "Progronics is a professional IT services company delivering end-to-end digital solutions including web and mobile app development, custom software engineering, UI/UX design, branding, embedded systems, and staff augmentation.",
    email: "info@progronics.com",
    telephone: "+92-310-4735145",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: SERVICE_NAMES.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: ["en", "zh", "ar"],
  }
}

/** WebPage schema tied back to the site WebSite + Organization graph nodes. */
export function webPageSchema(page: PageKey, localeInput: string) {
  const locale = normalizeLocale(localeInput)
  const seo = PAGE_SEO[page]
  const meta = seo.locales[locale]
  const url = buildUrl(locale, seo.path)

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: locale,
  }
}

interface Crumb {
  name: string
  path: string
}

export function breadcrumbSchema(locale: Locale, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: buildUrl(locale, crumb.path),
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

export function serviceListSchema(
  locale: Locale,
  services: { title: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Progronics Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": ORGANIZATION_ID },
      },
    })),
  }
}

export function portfolioListSchema(
  projects: { title: string; description: string; url?: string; img?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Progronics Portfolio",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        ...(project.url ? { url: project.url } : {}),
        ...(project.img ? { image: `${SITE_URL}${project.img}` } : {}),
        creator: { "@id": ORGANIZATION_ID },
      },
    })),
  }
}

/** Renders one or more schema objects as a combined JSON-LD string. */
export function jsonLdString(...schemas: object[]): string {
  return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)
}
