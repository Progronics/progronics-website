"use client"

import MainContainer from "@/components/main-container"
import Masonry from "@/components/Masonry"
import { projects } from "@/data/constants"
import { useLocale } from "@/store/LocaleContext"

export function PortfolioClient() {

  const {dict} = useLocale()

  const finalDict = projects.map((item)=>{
    return {...item, ...dict.projects[item.id]}
  })

 if(!dict){
  return (<div>Loading...</div>)
 }

  return (

    <MainContainer id="portfolio" className="py-20 relative">

       <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-16 ">

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">{dict.portfolio_section.title}</h2>
          <div className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
            {dict.portfolio_section.description}
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center w-[98vw]">
        <div className="h-[1700px] sm:h-[700px] w-[90vw] self-center">
          <Masonry
            items={finalDict}
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
