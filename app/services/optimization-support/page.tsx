import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Clock, Cloud } from "lucide-react"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Optimization & Support - Progronics",
  description: "Quality assurance, 24/7 support, maintenance, and cloud optimization services.",
}

export default function OptimizationSupportPage() {
  const services = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Automated and manual testing for perfect performance. Comprehensive QA strategies to ensure reliability.",
    },
    {
      icon: Clock,
      title: "Support & Maintenance",
      description: "24/7 monitoring and updates for peace of mind. Proactive maintenance to prevent downtime.",
    },
    {
      icon: Cloud,
      title: "Cloud Optimization",
      description: "Improve scalability, performance, and cost efficiency. Leverage cloud technologies effectively.",
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-foreground">
                Ensuring Your Systems Run Flawlessly — All The Time
              </h1>
              <p className="text-lg text-muted-foreground">
                Continuous optimization, quality assurance, and technical support you can rely on.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg">
                <Link href="/contact">Get Support Now</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 border border-border min-h-96 flex items-center justify-center">
                <Cloud className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
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
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Need Reliable Support & Optimization?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's ensure your systems perform at peak efficiency with our comprehensive support services.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
