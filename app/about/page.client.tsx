"use client"

import World from "@/components/landing/world"
import MainContainer from "@/components/main-container"
import { TextEffect } from "@/components/ui/text-effect"
import { values } from "@/data/constants"

export function AboutPageClient() {


  return (
    <>
      <div className="fixed top-[10vh] w-screen -z-1 opacity-20">
        <World />
      </div>
      <MainContainer id="about" className="py-20 relative">

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Top Section */}
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold 
      text-white mb-6 leading-[1.1] tracking-tight break-words">
              Empowering Innovation
            </h2>

            <div
              className="text-[18px] sm:text-[20px] text-slate-300 leading-relaxed tracking-tight max-w-4xl"
            >
              Progronics is a forward-thinking IT company dedicated to helping businesses achieve
              digital excellence. We specialize in crafting innovative web, mobile, and enterprise
              solutions that empower organizations to scale and succeed in the digital era. With a
              commitment to quality, performance, and long-term partnerships, we turn technology into
              a catalyst for sustainable growth.
            </div>
          </div>

          {/* Who We Are Section */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[60px] font-bold 
    text-white mb-6 leading-[1.1] tracking-tight break-words">
            Who We Are
          </h2>

          <div
            className="text-lg sm:text-xl text-slate-300 leading-relaxed tracking-tight mb-4 max-w-3xl"
          >
            With a diverse team of engineers, designers, and strategists, we bring ideas to life through
            cutting-edge solutions.
          </div>

          <div
            className="text-lg sm:text-xl text-slate-300 leading-relaxed tracking-tight mb-20 max-w-3xl"
          >
            Our mission is to simplify technology and make it a powerful tool for growth. We believe
            in building long-term partnerships with our clients, growing together as we help them
            succeed in the digital world.
          </div>

          {/* Vision & Values */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[60px] font-bold 
    text-white mb-10 leading-[1.1] tracking-tight break-words">
            Vision & Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {values.map((item, index) => (
              <div
                key={index}
                className="space-y-3 p-5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm
        hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {item.title}
                </h3>

                <div
                  className="text-[16px] sm:text-[17px] text-slate-300 leading-relaxed tracking-tight"
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>

        </div>

      </MainContainer>
    </>
  )
}
