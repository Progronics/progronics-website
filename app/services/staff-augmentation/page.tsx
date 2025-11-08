import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Briefcase, MessageSquare } from "lucide-react"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Staff Augmentation - Progronics",
  description: "Scale your team with top-tier IT professionals and dedicated resources.",
}

export default function StaffAugmentationPage() {
  const services = [
    {
      icon: Users,
      title: "Dedicated Developers",
      description:
        "Hire expert engineers for your specific needs. Fully vetted professionals ready to integrate with your team.",
    },
    {
      icon: Briefcase,
      title: "Dedicated Teams",
      description:
        "Complete, managed teams for long-term projects. Full-stack expertise with project management included.",
    },
    {
      icon: MessageSquare,
      title: "IT Consulting",
      description: "Strategic guidance for sustainable technology growth. Expert advice to optimize your tech stack.",
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-foreground">Scale Your Team With Top-Tier IT Professionals</h1>
              <p className="text-lg text-muted-foreground">
                Flexible staffing solutions to boost productivity and accelerate delivery.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-lg">
                <Link href="/contact">Request A Team</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-12 border border-border min-h-96 flex items-center justify-center">
                <Users className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Staffing Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-accent" />
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
      <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Expand Your Team?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's find the perfect professionals to meet your project requirements.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-lg">
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
