import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code2, Smartphone, Bot } from "lucide-react"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Application Development - Progronics",
  description: "Custom software, web, mobile, and AI solutions for your business.",
}

export default function AppDevPage() {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Enterprise and custom software tailored to your operations. Scalable, secure, and built with the latest technologies.",
    },
    {
      icon: Smartphone,
      title: "Web Development",
      description:
        "Fast, responsive, and secure web applications. User-friendly interfaces powered by modern frameworks.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Engaging mobile experiences for iOS and Android. Native and cross-platform solutions tailored to your needs.",
    },
    {
      icon: Bot,
      title: "Artificial Intelligence Solutions",
      description:
        "Smart algorithms and automation to enhance efficiency. Machine learning models that drive business value.",
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
                Transforming Ideas Into High-Performance Applications
              </h1>
              <p className="text-lg text-muted-foreground">
                From robust software systems to AI-driven platforms, we craft solutions that empower your business.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 border border-border min-h-96 flex items-center justify-center">
                <Code2 className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Transform Your Ideas Into Reality</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your application development needs and create a solution that exceeds expectations.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg">
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
