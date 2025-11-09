import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import type React from "react";


import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
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
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Progronics",
              url: "https://progronics.com",
              logo: "https://progronics.com/logo.png",
              description:
                "Enterprise IT solutions provider specializing in software development, staff augmentation, branding & design, and optimization services.",
              sameAs: [
                "https://www.linkedin.com/company/progronics",
                "https://twitter.com/progronics",
                "https://www.facebook.com/progronics",
              ],
              contact: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "info@progronics.com",
                telephone: "+1-800-PROGRONICS",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Innovation Drive",
                addressLocality: "Tech Valley",
                addressRegion: "CA",
                postalCode: "94000",
                addressCountry: "US",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Progronics",
              image: "https://progronics.com/logo.png",
              description: "Professional IT solutions and software development services",
              telephone: "+1-800-PROGRONICS",
              email: "info@progronics.com",
              url: "https://progronics.com",
              priceRange: "$$",
              serviceArea: {
                "@type": "Country",
                name: "US",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Navigation />
        {children}
        <Footer />

      </body>
    </html>
  )
}
