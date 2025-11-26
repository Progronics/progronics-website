"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ]

  const moreLinks = [
    // { name: "Blog", href: "/blog" },
    // { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  return (
    pathname.includes("portfolio") ? null :
      <footer className="bg-[#f6f6f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-2">
               <Image src={"/combined.png"} width={200} height={200} alt="Progronics Solutions"/>
              </div> 
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-secondary mb-2">Quick Links</h3>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-md text-secondary hover:text-primary transition-transform duration-200 hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h3 className="font-semibold text-secondary mb-2">More</h3>
              <ul className="space-y-1">
                {moreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-md text-secondary hover:text-primary transition-transform duration-200 hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-primary pt-4">
            <p className="text-center text-sm text-muted-foreground">
              © {currentYear} Progronics. All rights reserved. | Enterprise IT Solutions & Digital Innovation
            </p>
          </div>
        </div>
      </footer>

  )
}
