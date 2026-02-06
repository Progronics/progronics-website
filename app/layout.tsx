import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import type React from "react";


import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import HolyLoader from "holy-loader";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });


export const metadata: Metadata = {
  title: "Progronics - IT Solutions & Technology Innovation",
  description:
    "Transform your business with Progronics. We deliver enterprise software development, staff augmentation, branding & design, and optimization services for digital innovation.",
  generator: "v0.app",
  keywords: [
    "IT solutions",
    "software development",
    "staff augmentation",
    "web development",
    "app development",
    "digital transformation",
    "technology consulting",
    "cloud solutions",
    "UI/UX design",
    "software engineering",
  ],
  authors: [{ name: "Progronics" }],
  creator: "Progronics",
  publisher: "Progronics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://progronics.com",
    siteName: "Progronics",
    title: "Progronics - IT Solutions & Technology Innovation",
    description:
      "Transform your business with Progronics. Enterprise software development, staff augmentation, branding & design, and optimization services.",
    images: [
      {
        url: "/placeholder.svg?height=1200&width=1200",
        width: 1200,
        height: 1200,
        alt: "Progronics - Technology Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Progronics - IT Solutions & Technology Innovation",
    description:
      "Transform your business with Progronics. Enterprise software development, staff augmentation, branding & design.",
    creator: "@progronics",
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "Progronics",
              url: "https://progronics.com",
              logo: "Progronics",
              description:
                "Progronics is a professional IT services company delivering end-to-end digital solutions including web and mobile app development, custom software engineering, UI/UX design, branding, embedded systems, and staff augmentation. We help businesses innovate, scale, and transform through modern technology.",
              email: "info@progronics.com",
              telephone: "+92-310-4735145",
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Software Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Software Consultancy",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "UI/UX Design",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Staff Augmentation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Embedded Systems Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Branding and Marketing",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <HolyLoader />
        {children}
      </body>
    </html>
  )
}
