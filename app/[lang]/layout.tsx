import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import type React from "react";
import { getDictionary } from "./dictionaries";
import { LocaleProvider } from "@/store/LocaleContext";

export default async function LangLayout({
  children, params
}: Readonly<{
  children: React.ReactNode, params: { lang: string }
}>) {

  const { lang } = await params
  if (!lang) return (
    <div>Loading...</div>
  )
  const dict = await getDictionary(lang as "en" | "zh" | "ar")

  return (
    
    <>
      <LocaleProvider dict={dict} lang={lang as "en" | "zh" | "ar"}>
      <Navigation  />
      {children}
      <Footer />
    </LocaleProvider>
    </>
  )
}
