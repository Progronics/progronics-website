"use client"

import Aurora from "@/components/Aurora"
import CTA from "@/components/landing/cta"
import Feature from "@/components/landing/feature"
import Hero from "@/components/landing/hero"
import Process from "@/components/landing/process"
import Services from "@/components/landing/services"
import Technologies from "@/components/landing/technologies"
import Why from "@/components/landing/why"
import useScrollSpy from "@/lib/useScrollSpy"

export default function Home() {

  const sectionIds = ["hero", "services", "features", "why", "process", "technologies", "cta"];
  const activeSection = useScrollSpy(sectionIds, 100);

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
      <Hero />
      <Services active={activeSection === "services"}/>
      <Feature active={activeSection === "features"}/>
      <Why active={activeSection === "why"}/>
      <Process active={activeSection === "process"}/>
      <Technologies active={activeSection === "technologies"}/> 
      <CTA />
      

    </>
  )
}
