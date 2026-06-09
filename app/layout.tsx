import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import type React from "react";

import HolyLoader from "holy-loader";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import {
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE
} from "@/lib/seo";
import {
  jsonLdString,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Progronics | IT Solutions & Custom Software Development",
    template: "%s | Progronics",
  },
  description:
    "Progronics builds intelligent web and mobile apps, custom software, UI/UX design, and AI automation. Partner with our engineering team to scale your business.",
  applicationName: SITE_NAME,
  generator: "v0.app",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
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
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Progronics | IT Solutions & Custom Software Development",
    description:
      "Progronics builds intelligent web and mobile apps, custom software, UI/UX design, and AI automation for businesses worldwide.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Progronics | IT Solutions & Custom Software Development",
    description:
      "Progronics builds intelligent web and mobile apps, custom software, UI/UX design, and AI automation for businesses worldwide.",
    creator: TWITTER_HANDLE,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString(organizationSchema(), websiteSchema()),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${inter.className} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <HolyLoader />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
