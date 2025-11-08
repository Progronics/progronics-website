"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const services = [
    { name: "Application Development", href: "/services/app-dev" },
    { name: "Staff Augmentation", href: "/services/staff-augmentation" },
    { name: "Branding & Design", href: "/services/branding-design" },
    { name: "Optimization & Support", href: "/services/optimization-support" },
  ]

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/50 border-b border-border/20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">Ⓟ</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline text-foreground">Progronics</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-2 w-56 glass-morphic rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 animate-scale-in">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:pl-6 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border/30 pt-4 animate-slide-in-left">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                className="w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
              >
                Services
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    openDropdown === "services" && "rotate-180",
                  )}
                />
              </button>
              {openDropdown === "services" && (
                <div className="pl-4 space-y-1 animate-scale-in">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
