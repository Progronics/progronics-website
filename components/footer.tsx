"use client"
import { useLocale } from "@/store/LocaleContext"
import { DictionatiesTypes } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const { dict, lang } = useLocale()

  if (!dict) {
    return (<div>Loading...</div>)
  }

  const quickLinks: { name: keyof DictionatiesTypes["nav_bar"], href: string }[] = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "services", href: "/services" },
    { name: "portfolio", href: "/portfolio" },
  ]

  const moreLinks: { name: keyof DictionatiesTypes["more_links"], href: string }[] = [
    { name: "contact", href: "/contact" },
    { name: "careers", href: "/careers" },
    { name: "privacy policy", href: "/privacy" },
  ]

  

  return (
    pathname.includes("portfolio") ? null :
      <footer className="bg-[#f6f6f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 items-start">

            {/* Brand */}

            <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/combined.png"
                  width={160}
                  height={160}
                  alt="Progronics Solutions"
                />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="font-medium text-sm text-secondary mb-1">
                {dict.quick_links}
              </h3>
              <ul className="space-y-0.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${lang}${link.href}`}
                      className="text-sm text-secondary hover:text-primary transition-all"
                    >
                      {dict.nav_bar[link.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div className="text-center md:text-left">
              <h3 className="font-medium text-sm text-secondary mb-1">
                {dict.more}
              </h3>
              <ul className="space-y-0.5">
                {moreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                     href={`/${lang}${link.href}`}
                      className="text-sm text-secondary hover:text-primary transition-all"
                    >
                      {dict.more_links[link.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/40 pt-2">
            <p className="text-center text-xs text-muted-foreground">
              © {currentYear} {dict.all_rights_reserved}
            </p>
          </div>
        </div>
      </footer>



  )
}
