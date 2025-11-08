"use client"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PortfolioClientPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      industry: "Retail & E-commerce",
      problem: "Client needed a scalable e-commerce solution",
      solution: "Built a modern web platform with AI recommendations",
      result: "300% increase in online sales within 6 months",
      color: "from-primary",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      industry: "Finance",
      problem: "Legacy system was outdated and slow",
      solution: "Developed cross-platform mobile app with enhanced UX",
      result: "50K+ active users in first quarter",
      color: "from-accent",
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      industry: "Technology",
      problem: "Complex data visualization needs",
      solution: "Created intuitive analytics dashboard",
      result: "Enterprise client retention increased to 95%",
      color: "from-secondary",
    },
    {
      id: 4,
      title: "Healthcare Management System",
      industry: "Healthcare",
      problem: "Fragmented patient data across systems",
      solution: "Integrated system with secure data management",
      result: "Improved patient care coordination by 80%",
      color: "from-primary/80",
    },
    {
      id: 5,
      title: "Cloud Migration Project",
      industry: "Enterprise",
      problem: "On-premise infrastructure causing downtime",
      solution: "Migrated to cloud with zero downtime strategy",
      result: "40% reduction in infrastructure costs",
      color: "from-accent/80",
    },
    {
      id: 6,
      title: "AI Marketing Platform",
      industry: "Marketing Technology",
      problem: "Manual campaign optimization was time-consuming",
      solution: "Built AI-powered optimization engine",
      result: "2.5x improvement in campaign performance",
      color: "from-secondary/80",
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div >
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 ">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Our Recent Work</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore case studies of projects we've delivered across various industries.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Portfolio Grid */}
      <div >
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-xl border border-border hover:border-primary hover:shadow-xl transition-all overflow-hidden "
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-br ${project.color} to-accent/20 h-40 p-6 flex items-end`}>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Industry</p>
                      <p className="text-sm text-muted-foreground">{project.industry}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Challenge</p>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Result</p>
                      <p className="text-sm text-muted-foreground font-medium text-accent">{project.result}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-lg group-hover:border-primary group-hover:text-primary bg-transparent"
                    >
                      <a href="#" className="flex items-center gap-2">
                        View Case Study
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div >
        <section className="py-20 border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help achieve your business goals.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
