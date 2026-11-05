import type { Metadata } from "next"
import { Suspense } from "react"
import QrPage from "./page.client"

export const metadata: Metadata = {
  title: "Contact Card",
  alternates: { canonical: "/qr" },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
}

export default function QrUtilityPage() {
  return <Suspense fallback={<div>Loading...</div>}>
    <QrPage />
  </Suspense>
}
