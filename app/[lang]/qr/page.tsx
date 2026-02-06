import { Suspense } from "react"
import QrPage from "./page.client"


export default function AboutPage() {
  return <Suspense fallback={<div>Loading...</div>}>
    <QrPage />
  </Suspense>
}
