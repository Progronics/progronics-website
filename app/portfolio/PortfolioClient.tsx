"use client"

import CTA from "@/components/landing/cta"
import MainContainer from "@/components/main-container"
import Masonry from "@/components/Masonry"
import { TextEffect } from "@/components/ui/text-effect"
import { projects } from "@/data/constants"

export function PortfolioClient() {


 

  return (

    <MainContainer id="portfolio" className="py-20 relative">

       <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">Recent Projects</h2>
          <TextEffect per='word' as='h3' preset='blur' className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
            Explore case studies of projects we've delivered across various industries.
            Discover how our innovative solutions have empowered businesses to overcome challenges, enhance efficiency, and achieve measurable results.

          </TextEffect>
        </div>
      </div>


      <div className="flex items-center justify-center w-[98vw]">
        <div className="h-[1700px] sm:h-[700px] w-[90vw] self-center">
          <Masonry
            items={projects}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </MainContainer>
  )
}
