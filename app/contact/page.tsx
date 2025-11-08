"use client"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone } from "lucide-react"
import type React from "react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", company: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div >
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 ">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Let's Talk About Your Next Big Idea</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get in touch with our team and let's explore how we can help transform your vision into reality.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div >
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8 ">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                  <p className="text-muted-foreground mb-8">
                    Have a question or ready to start a project? We'd love to hear from you. Reach out using any of the
                    methods below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        123 Tech Avenue
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">hello@progronics.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">Response time: Within 24 hours</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 ">
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg"
                    >
                      Send Message
                    </Button>

                    {submitted && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm font-medium text-green-800">
                          Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Additional CTA */}
      <div >
        <section className="py-20 border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Questions?</h2>
            <p className="text-lg text-muted-foreground">
              Check out our services or visit our about page to learn more about what we do.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
