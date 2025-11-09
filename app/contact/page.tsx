"use client"

import MainContainer from "@/components/main-container"
import ContactForm from "@/components/contact-form"
import { TextEffect } from "@/components/ui/text-effect"
import { Mail, MapPin, Phone } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { Send } from "@/components/animate-ui/icons/send"
import { PhoneCall } from "@/components/animate-ui/icons/phone-call"
import { MapPinIcon } from "@/components/animate-ui/icons/map-pin"

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
    
      <MainContainer id="contact" className="py-20 relative">

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 ">

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">Let's Talk</h2>
            <TextEffect per='word' as='h3' preset='blur' className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
              Get in touch with our team and let's explore how we can help transform your vision into reality.
            </TextEffect>
          </div>




         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 ">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-tight tracking-tight">
                  Have a question or ready to start a project? We'd love to hear from you. Reach out using any of the
                  methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPinIcon animateOnHover />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <PhoneCall animateOnHover />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+92 (323) 4784400</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Send animateOnHover />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@progronics.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Response time: Within 24 hours</p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>



        </div>
      </MainContainer>

      
  )
}
