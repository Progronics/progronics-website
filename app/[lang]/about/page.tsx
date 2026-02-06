import { getDictionary } from "../dictionaries"
import { AboutPageClient } from "./page.client"

export const metadata = {
  title: "About Us - Progronics",
  description: "Learn about Progronics, our mission, values, and the team behind our success.",
}

export default async function AboutPage({ params }: PageProps<'/[lang]'>) {

  
  return <AboutPageClient />
}
