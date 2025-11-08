"use client"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Code2, Palette, Users, Zap } from "lucide-react"
import Link from "next/link"

export function ServicesClient() {
  const departments = [
    {
      icon: Code2,
      title: "Application Development",
      description: "Transforming ideas into high-performance applications.",
      subtext: "From robust software systems to AI-driven platforms, we craft solutions that empower your business.",
      href: "/services/app-dev",
      color: "from-primary",
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Scale your team with top-tier IT professionals.",
      subtext: "Flexible staffing solutions to boost productivity and accelerate delivery.",
      href: "/services/staff-augmentation",
      color: "from-accent",
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Creating brands that inspire trust and connection.",
      subtext: "Design and marketing strategies that make your business stand out.",
      href: "/services/branding-design",
      color: "from-secondary",
    },
    {
      icon: Zap,
      title: "Optimization & Support",
      description: "Ensuring your systems run flawlessly — all the time.",
      subtext: "Continuous optimization, quality assurance, and technical support.",
      href: "/services/optimization-support",
      color: "from-primary/80",
    },
  ]

  const faqs = [
    {
      question: "What types of applications do you develop?",
      answer:
        "We develop a wide range of applications including web applications, mobile apps (iOS & Android), enterprise software, AI/ML solutions, and cloud-based platforms. Our expertise spans various industries and tech stacks.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple projects may take 2-3 months, while complex enterprise solutions can take 6-12 months or more. We provide detailed timelines during the discovery phase.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "We provide comprehensive post-launch support including maintenance, bug fixes, performance optimization, feature updates, and technical assistance to ensure your application runs smoothly.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Yes, we specialize in integrating new solutions with your existing systems and tech stack. Our team handles API development, data migration, and ensures seamless integration with minimal disruption.",
    },
    {
      question: "What is your approach to project management?",
      answer:
        "We use Agile methodology with regular sprint cycles, transparent communication, and frequent progress updates. You'll have a dedicated project manager and clear visibility into development progress.",
    },
    {
      question: "How do you ensure code quality?",
      answer:
        "We implement rigorous quality assurance processes including code reviews, automated testing, continuous integration, and comprehensive testing phases before deployment to ensure production-ready code.",
    },
  ]

  const benefits = [
    {
      title: "Expert Team",
      description:
        "Access to experienced professionals with deep technical expertise across multiple domains and technologies.",
    },
    {
      title: "Flexible Engagement",
      description: "Choose from various engagement models including fixed-price, time & materials, or dedicated teams.",
    },
    {
      title: "Proven Track Record",
      description: "500+ successful projects delivered to clients across various industries globally.",
    },
    {
      title: "Agile Process",
      description: "Fast-paced development with iterative cycles, regular updates, and responsive to changes.",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous QA processes ensuring bug-free, scalable, and maintainable solutions.",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div >
        <section className="py-20 bg-gradient-to-b from-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-12 ">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">A Complete Spectrum of IT Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From building modern applications to scaling your brand — Progronics covers every aspect of digital
                transformation.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Services Grid */}
      <div >
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, index) => {
                const Icon = dept.icon
                return (
                  <Link key={index} href={dept.href}>
                    <div
                      className="group bg-card rounded-2xl p-8 border border-border hover:border-primary hover:shadow-xl  h-full cursor-pointer "
                     
                    >
                      <div
                        className={`mb-6 inline-flex p-4 bg-gradient-to-br ${dept.color} to-accent/20 rounded-xl group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {dept.title}
                      </h3>
                      <p className="text-primary font-semibold mb-4 group-hover:text-accent transition-colors">
                        {dept.description}
                      </p>
                      <p className="text-muted-foreground mb-6">{dept.subtext}</p>

                      <div className="flex items-center text-primary group-hover:text-accent transition-colors font-semibold gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </div>

      <div >
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 ">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Partner With Progronics</h2>
              <p className="text-lg text-muted-foreground">Six key advantages for your business growth</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:shadow-lg "
                >
                  <div className="w-12 h-12 bg-linear-to-br from-primary to-accent rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div >
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 ">
              <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Everything you need to know about our services</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50  "
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors">
                    <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground border-t border-border pt-4">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div >
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose a service and let's discuss how we can help your business thrive.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
