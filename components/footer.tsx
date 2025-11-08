import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

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
    { name: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <footer className="bg-card border-t border-border ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-lg text-foreground">Progronics</span>
            </div>
            <p className="text-sm text-muted-foreground">Innovating Tomorrow's Technology, Today.</p>
            <p className="text-xs text-muted-foreground mt-4">
              Enterprise IT solutions and digital transformation services.
            </p>
          </div>

          {/* Quick Links */}
          <div >
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/app-dev"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/staff-augmentation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Staff Augmentation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding-design"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Branding & Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/optimization-support"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div >
            <h3 className="font-semibold text-foreground mb-4">More</h3>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          {/* <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-2 hover:bg-muted rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-2 hover:bg-muted rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-2 hover:bg-muted rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div> */}
        </div>

        <div className="border-t border-border pt-8 ">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Progronics. All rights reserved. | Enterprise IT Solutions & Digital Innovation
          </p>
        </div>
      </div>
    </footer>
  )
}
