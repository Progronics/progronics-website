import type { Metadata } from "next"

/**
 * Central SEO configuration for Progronics.
 *
 * All canonical URLs, Open Graph, Twitter cards, and structured data flow
 * through here so metadata stays unique and consistent across every page.
 */

export const SITE_URL = "https://www.progronics.com"
export const SITE_NAME = "Progronics"
export const TWITTER_HANDLE = "@progronics"

export const OG_IMAGE = {
  url: "/images/combined.png",
  width: 1200,
  height: 630,
  alt: "Progronics - IT Solutions & Technology Innovation",
}

/** Page identifiers used across the site. */
export type PageKey =
  | "home"
  | "services"
  | "about"
  | "portfolio"
  | "careers"
  | "contact"
  | "privacy"

interface PageSeo {
  /** Absolute path, e.g. "/services". Home is "". */
  path: string
  title: string
  description: string
  keywords?: string[]
}

/**
 * Unique, keyword-relevant titles and descriptions for every page.
 * No two entries share a title or description.
 */
export const PAGE_SEO: Record<PageKey, PageSeo> = {
  home: {
    path: "",
    title: "Progronics | IT Solutions & Custom Software Development",
    description:
      "Progronics builds intelligent web and mobile apps, custom software, UI/UX design, and AI automation. Partner with our engineering team to scale your business.",
    keywords: [
      "IT solutions",
      "software development company",
      "web development",
      "mobile app development",
      "custom software",
      "UI/UX design",
      "staff augmentation",
      "digital transformation",
      "Progronics",
    ],
  },
  services: {
    path: "/services",
    title: "Our Services | Web, Mobile, AI & Software Development",
    description:
      "Explore Progronics services: digital product development, enterprise web apps, mobile engineering, AI automation, UI/UX, branding, DevOps, and dedicated teams.",
    keywords: [
      "IT services",
      "software development services",
      "web development services",
      "mobile app development services",
      "custom software development",
      "UI UX design services",
      "AI automation",
      "DevOps",
      "staff augmentation",
      "IoT development",
    ],
  },
  about: {
    path: "/about",
    title: "About Progronics | Our Mission, Values & Engineering Team",
    description:
      "Learn about Progronics, our mission to deliver future-ready technology, the values that guide us, and the engineering team behind our digital solutions.",
    keywords: [
      "about Progronics",
      "software company",
      "IT company Pakistan",
      "technology partner",
      "our mission",
      "engineering team",
    ],
  },
  portfolio: {
    path: "/portfolio",
    title: "Portfolio | Web, Mobile & Software Case Studies",
    description:
      "Browse Progronics case studies, including CRMs, SaaS platforms, mobile apps, and real-time games we have designed, built, and shipped for clients.",
    keywords: [
      "portfolio",
      "case studies",
      "software projects",
      "web app projects",
      "mobile app projects",
      "client work",
      "Progronics projects",
    ],
  },
  careers: {
    path: "/careers",
    title: "Careers at Progronics | Join Our Technology Team",
    description:
      "Build your career at Progronics. Apply to join a team of developers, designers, and engineers working on web, mobile, AI, and IoT projects.",
    keywords: [
      "careers",
      "IT jobs",
      "software developer jobs",
      "tech jobs Pakistan",
      "join Progronics",
      "hiring developers",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact Progronics | Get in Touch With Our Team",
    description:
      "Contact Progronics to discuss your project. Reach our team by phone, email, or message and get a response within one business day.",
    keywords: [
      "contact Progronics",
      "hire developers",
      "get a quote",
      "IT consultation",
      "software development contact",
    ],
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | How Progronics Protects Your Data",
    description:
      "Read the Progronics privacy policy to understand what personal data we collect, how we use and protect it, and the choices you have over your information.",
    keywords: ["privacy policy", "data protection", "personal data", "cookies policy"],
  },
}

/** Builds a fully-qualified URL for a page path. */
export function buildUrl(path: string): string {
  if (!path || path === "/") return SITE_URL
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${cleanPath}`
}

/**
 * Builds a complete, unique Metadata object for a given page,
 * including canonical URL, Open Graph and Twitter cards.
 */
export function buildMetadata(page: PageKey): Metadata {
  const seo = PAGE_SEO[page]
  const canonical = buildUrl(seo.path)

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: canonical,
      title: seo.title,
      description: seo.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      creator: TWITTER_HANDLE,
      images: [OG_IMAGE.url],
    },
  }
}
