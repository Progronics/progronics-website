"use client"

import World from "@/components/landing/world"
import MainContainer from "@/components/main-container"
import { TextEffect } from "@/components/ui/text-effect"
import { values } from "@/data/constants"

export function AboutPageClient() {
 

  return (
    <>
      <div className="fixed top-[10vh] w-screen z-0 opacity-20">
        <World />
      </div>
      <MainContainer id="about" className="py-20 relative">

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 ">

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">Empowering Innovation</h2>
            <TextEffect per='word' as='h3' preset='blur' className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
              Progronics is a forward-thinking IT company dedicated to helping businesses achieve digital excellence. We specialize in crafting innovative web, mobile, and enterprise solutions that empower organizations to scale and succeed in the digital era. With a commitment to quality, performance, and long-term partnerships, we turn technology into a catalyst for sustainable growth.
            </TextEffect>
          </div>




          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[60px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">Who We Are</h2>
          <TextEffect per='word' as='h3' preset='blur' className="text-lg text-slate-300 leading-tight tracking-tight mb-6">
            With a diverse team of engineers, designers, and strategists, we bring ideas to life through
            cutting-edge solutions.
          </TextEffect>
          <TextEffect per='word' as='h3' preset='blur' className="text-lg text-slate-300 leading-tight tracking-tight mb-16">
            Our mission is to simplify technology and make it a powerful tool for growth. We believe in building
            long-term partnerships with our clients, growing together as we help them succeed in the digital
            world.
          </TextEffect>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[60px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">Vision & Values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {values.map((item, index) => (

              <div key={index} className="space-y-2">

                <h3 className="text-xl font-semibold text-white leading-h2 tracking-tighter">{item.title}</h3>
                <TextEffect per='word' as='h3' preset='scale' className="text-[16px] text-slate-300 leading-tight tracking-tight">
                  {item.description}
                </TextEffect>
              </div>


            ))}
          </div>

        </div>
      </MainContainer>
    </>
  )
}
