import type { Metadata } from "next"

/**
 * Central SEO configuration for Progronics.
 *
 * Everything that touches canonical URLs, hreflang, Open Graph, Twitter cards
 * and structured data flows through here so metadata stays unique and
 * consistent across every page and locale.
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

export const LOCALES = ["en", "zh", "ar"] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = "en"

/** Maps our short locale codes to fully-qualified Open Graph / hreflang locales. */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
  ar: "ar_AE",
}

export const HREFLANG: Record<Locale, string> = {
  en: "en",
  zh: "zh",
  ar: "ar",
}

export const RTL_LOCALES: Locale[] = ["ar"]

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function normalizeLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : DEFAULT_LOCALE
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

interface LocalizedMeta {
  title: string
  description: string
}

interface PageSeo {
  /** Path WITHOUT the locale prefix, e.g. "/services". Home is "". */
  path: string
  keywords?: string[]
  locales: Record<Locale, LocalizedMeta>
}

/**
 * Unique, keyword-relevant titles and descriptions for every page in every
 * supported language. No two entries share a title or description.
 */
export const PAGE_SEO: Record<PageKey, PageSeo> = {
  home: {
    path: "",
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
    locales: {
      en: {
        title: "Progronics | IT Solutions & Custom Software Development",
        description:
          "Progronics builds intelligent web and mobile apps, custom software, UI/UX design, and AI automation. Partner with our engineering team to scale your business.",
      },
      zh: {
        title: "Progronics | IT 解决方案与定制软件开发",
        description:
          "Progronics 提供智能网站与移动应用、定制软件、UI/UX 设计及 AI 自动化服务。携手我们的工程团队，助力企业成长。",
      },
      ar: {
        title: "Progronics | حلول تقنية المعلومات وتطوير البرمجيات المخصصة",
        description:
          "تبني Progronics تطبيقات ويب وجوال ذكية وبرمجيات مخصصة وتصميم واجهات المستخدم وأتمتة الذكاء الاصطناعي. اعمل مع فريقنا الهندسي لتنمية أعمالك.",
      },
    },
  },
  services: {
    path: "/services",
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
    locales: {
      en: {
        title: "Our Services | Web, Mobile, AI & Software Development",
        description:
          "Explore Progronics services: digital product development, enterprise web apps, mobile engineering, AI automation, UI/UX, branding, DevOps, and dedicated teams.",
      },
      zh: {
        title: "我们的服务 | 网站、移动、AI 与软件开发",
        description:
          "探索 Progronics 服务：数字产品开发、企业级网站应用、移动工程、AI 自动化、UI/UX、品牌设计、DevOps 及专属团队。",
      },
      ar: {
        title: "خدماتنا | تطوير الويب والجوال والذكاء الاصطناعي والبرمجيات",
        description:
          "اكتشف خدمات Progronics: تطوير المنتجات الرقمية، تطبيقات الويب للمؤسسات، هندسة الجوال، أتمتة الذكاء الاصطناعي، تصميم واجهات المستخدم، والفرق المخصصة.",
      },
    },
  },
  about: {
    path: "/about",
    keywords: [
      "about Progronics",
      "software company",
      "IT company Pakistan",
      "technology partner",
      "our mission",
      "engineering team",
    ],
    locales: {
      en: {
        title: "About Progronics | Our Mission, Values & Engineering Team",
        description:
          "Learn about Progronics, our mission to deliver future-ready technology, the values that guide us, and the engineering team behind our digital solutions.",
      },
      zh: {
        title: "关于 Progronics | 我们的使命、价值观与工程团队",
        description:
          "了解 Progronics、我们打造面向未来技术的使命、指引我们的价值观，以及支撑数字解决方案的工程团队。",
      },
      ar: {
        title: "عن Progronics | رسالتنا وقيمنا وفريقنا الهندسي",
        description:
          "تعرّف على Progronics ورسالتنا في تقديم تقنية جاهزة للمستقبل والقيم التي توجّهنا والفريق الهندسي الذي يقف وراء حلولنا الرقمية.",
      },
    },
  },
  portfolio: {
    path: "/portfolio",
    keywords: [
      "portfolio",
      "case studies",
      "software projects",
      "web app projects",
      "mobile app projects",
      "client work",
      "Progronics projects",
    ],
    locales: {
      en: {
        title: "Portfolio | Web, Mobile & Software Case Studies",
        description:
          "Browse Progronics case studies, including CRMs, SaaS platforms, mobile apps, and real-time games we have designed, built, and shipped for clients.",
      },
      zh: {
        title: "作品集 | 网站、移动与软件案例研究",
        description:
          "浏览 Progronics 案例研究，包括我们为客户设计、构建并交付的 CRM、SaaS 平台、移动应用及实时游戏。",
      },
      ar: {
        title: "أعمالنا | دراسات حالة للويب والجوال والبرمجيات",
        description:
          "تصفّح دراسات حالة Progronics، بما في ذلك أنظمة إدارة العملاء ومنصات SaaS وتطبيقات الجوال والألعاب الفورية التي صممناها ونفّذناها لعملائنا.",
      },
    },
  },
  careers: {
    path: "/careers",
    keywords: [
      "careers",
      "IT jobs",
      "software developer jobs",
      "tech jobs Pakistan",
      "join Progronics",
      "hiring developers",
    ],
    locales: {
      en: {
        title: "Careers at Progronics | Join Our Technology Team",
        description:
          "Build your career at Progronics. Apply to join a team of developers, designers, and engineers working on web, mobile, AI, and IoT projects.",
      },
      zh: {
        title: "Progronics 招聘 | 加入我们的技术团队",
        description:
          "在 Progronics 开启你的职业生涯。申请加入由开发者、设计师和工程师组成的团队，参与网站、移动、AI 与物联网项目。",
      },
      ar: {
        title: "الوظائف في Progronics | انضم إلى فريقنا التقني",
        description:
          "ابنِ مسيرتك المهنية في Progronics. قدّم للانضمام إلى فريق من المطورين والمصممين والمهندسين في مشاريع الويب والجوال والذكاء الاصطناعي وإنترنت الأشياء.",
      },
    },
  },
  contact: {
    path: "/contact",
    keywords: [
      "contact Progronics",
      "hire developers",
      "get a quote",
      "IT consultation",
      "software development contact",
    ],
    locales: {
      en: {
        title: "Contact Progronics | Get in Touch With Our Team",
        description:
          "Contact Progronics to discuss your project. Reach our team by phone, email, or message and get a response within one business day.",
      },
      zh: {
        title: "联系 Progronics | 与我们的团队取得联系",
        description:
          "联系 Progronics 讨论您的项目。通过电话、邮件或留言与我们的团队联系，并在一个工作日内获得回复。",
      },
      ar: {
        title: "اتصل بـ Progronics | تواصل مع فريقنا",
        description:
          "تواصل مع Progronics لمناقشة مشروعك. اتصل بفريقنا عبر الهاتف أو البريد الإلكتروني أو الرسائل واحصل على رد خلال يوم عمل واحد.",
      },
    },
  },
  privacy: {
    path: "/privacy",
    keywords: ["privacy policy", "data protection", "personal data", "cookies policy"],
    locales: {
      en: {
        title: "Privacy Policy | How Progronics Protects Your Data",
        description:
          "Read the Progronics privacy policy to understand what personal data we collect, how we use and protect it, and the choices you have over your information.",
      },
      zh: {
        title: "隐私政策 | Progronics 如何保护您的数据",
        description:
          "阅读 Progronics 隐私政策，了解我们收集哪些个人数据、如何使用和保护这些数据，以及您对个人信息所拥有的选择权。",
      },
      ar: {
        title: "سياسة الخصوصية | كيف تحمي Progronics بياناتك",
        description:
          "اقرأ سياسة خصوصية Progronics لفهم البيانات الشخصية التي نجمعها وكيفية استخدامها وحمايتها والخيارات المتاحة لك بشأن معلوماتك.",
      },
    },
  },
}

/** Builds a fully-qualified, locale-prefixed URL. */
export function buildUrl(locale: Locale, path: string): string {
  const cleanPath = path && !path.startsWith("/") ? `/${path}` : path
  return `${SITE_URL}/${locale}${cleanPath}`
}

/** Generates the hreflang alternates map (including x-default). */
export function buildLanguageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) {
    languages[HREFLANG[locale]] = buildUrl(locale, path)
  }
  languages["x-default"] = buildUrl(DEFAULT_LOCALE, path)
  return languages
}

/**
 * Builds a complete, unique Metadata object for a given page and locale,
 * including canonical URL, hreflang alternates, Open Graph and Twitter cards.
 */
export function buildMetadata(page: PageKey, localeInput: string): Metadata {
  const locale = normalizeLocale(localeInput)
  const seo = PAGE_SEO[page]
  const meta = seo.locales[locale]
  const canonical = buildUrl(locale, seo.path)

  return {
    title: meta.title,
    description: meta.description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(seo.path),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      url: canonical,
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      creator: TWITTER_HANDLE,
      images: [OG_IMAGE.url],
    },
  }
}
