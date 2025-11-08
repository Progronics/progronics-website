import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, Palette, Lightbulb } from "lucide-react"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Branding & Design - Progronics",
  description: "Digital marketing, UI/UX design, and brand strategy services.",
}

export default function BrandingDesignPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Social media, SEO, and campaigns that convert. Data-driven strategies to grow your brand.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive, delightful, and user-first interfaces. Beautiful designs that drive engagement.",
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description:
        "Defining your identity, voice, and visual presence. Strategic positioning that resonates with your audience.",
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-foreground">Creating Brands That Inspire Trust and Connection</h1>
              <p className="text-lg text-muted-foreground">
                Design and marketing strategies that make your business stand out in the digital landscape.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-lg">
                <Link href="/contact">Start Your Brand Journey</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-12 border border-border min-h-96 flex items-center justify-center">
                <Palette className="w-32 h-32 text-secondary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 hover:shadow-lg transition-all"
                >
                  <div className="mb-4 inline-flex p-3 bg-secondary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary/5 to-accent/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Elevate Your Brand?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's work together to create a brand that stands out and drives results.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-lg">
            <Link href="/contact" className="flex items-center gap-2">
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
