"use client"

import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"
import CTA from "@/components/landing/cta"
import Feature from "@/components/landing/feature"
import Hero from "@/components/landing/hero"
import Process from "@/components/landing/process"
import Services from "@/components/landing/services"
import Stats from "@/components/landing/stats"
import Technologies from "@/components/landing/technologies"
import Testimonials from "@/components/landing/testimonials"
import Why from "@/components/landing/why"
import { Navigation } from "@/components/navigation"

export default function Home() {

  return (
    <>

      <div className="h-screen absolute w-full">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />

      </div>

      <Navigation />
      <Hero />
      <Services />
       <Feature />
      <Why />
       <Process />
        <Technologies />
       <Stats />
     
     
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
     
    </>
  )
}
