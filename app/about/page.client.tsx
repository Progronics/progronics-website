"use client"

import { Footer } from "@/components/footer"
import Stats from "@/components/landing/stats"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export function AboutPageClient() {
  const values = [
    { title: "Integrity", description: "Honest and transparent in all our dealings." },
    { title: "Innovation", description: "Pushing boundaries and embracing new technologies." },
    { title: "Collaboration", description: "Working together with our clients as true partners." },
    { title: "Excellence", description: "Delivering exceptional results every single time." },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div >
        <section className="py-20 bg-gradient-to-b from-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Empowering Innovation Through Technology and Talent
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Progronics is a forward-thinking IT company dedicated to helping businesses achieve digital excellence.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Company Overview */}
      <div >
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Who We Are</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With a diverse team of engineers, designers, and strategists, we bring ideas to life through
                  cutting-edge solutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is to simplify technology and make it a powerful tool for growth. We believe in building
                  long-term partnerships with our clients, growing together as we help them succeed in the digital
                  world.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-border min-h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Vision and Values */}
      <div >
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Vision & Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="bg-card rounded-xl p-8 border border-border ">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become a global leader in digital innovation, empowering businesses worldwide to achieve their
                  digital transformation goals through cutting-edge technology and world-class talent.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border ">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To simplify technology and make it a powerful tool for growth. We're committed to delivering
                  exceptional solutions that drive real business value for our clients.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 "
                
                >
                  <div className="mb-4 inline-flex p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
     <Stats />

      {/* CTA */}
      <div >
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how Progronics can help your business thrive in the digital world.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
