"use client"

import Aurora from "@/components/Aurora"
import FloatingLines from "@/components/FloatingLines"
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
         <FloatingLines 
    enabledWaves={['top', 'middle', 'bottom']}
    // Array - specify line count per wave; Number - same count for all waves
    lineCount={[5, 5, 5]}
    // Array - specify line distance per wave; Number - same distance for all waves
    lineDistance={[8, 6, 4]}
    bendRadius={5.0}
    bendStrength={-0.5}
    interactive={true}
    parallax={true}
  />

      </div>
      <Hero />
      <Services 
      // active={activeSection === "services"}
      />
      <Feature active={activeSection === "features"}/>
      <Why active={activeSection === "why"}/>
      <Process active={activeSection === "process"}/>
      <Technologies active={activeSection === "technologies"}/> 
      <CTA />
      

    </>
  )
}
