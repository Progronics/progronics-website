"use client"

import World from "@/components/landing/world";
import MainContainer from "@/components/main-container";
import { dict } from "@/lib/constants";

export function AboutPageClient() {

  
  if (!dict) return (
    <div>Loading...</div>
  )
  return (
    <>
      <div className="fixed top-[10vh] w-screen -z-1 opacity-20">
        <World />
      </div>
      <MainContainer id="about" className="py-20 relative">

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Top Section */}
          <div className="mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold 
      text-white mb-6 leading-[1.1] tracking-tight break-words">
              {dict.about_section.title}
            </h1>

            <div
              className="text-[18px] sm:text-[20px] text-slate-300 leading-relaxed tracking-tight max-w-4xl"
            >
              {dict.about_section.description}
            </div>
          </div>

          {/* Who We Are Section */}
          <section className="mb-28">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:p-9">
                <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

                <p className="relative mb-5 text-sm font-medium uppercase tracking-[0.32em] text-cyan-300/80">
                  Who we are
                </p>

                <h2 className="relative text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  {dict.about_section.who}
                </h2>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-7 backdrop-blur-xl sm:p-9">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl" />

                <h3 className="relative mb-5 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  {dict.about_section.who_title}
                </h3>

                <p className="relative max-w-3xl text-lg leading-8 text-slate-300">
                  {dict.about_section.who_description}
                </p>
              </div>
            </div>
          </section>

          {/* Vision & Values */}
          <section>
            <div className="mb-12 max-w-4xl">

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {dict.about_section.who_vision}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {dict.about_values.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/20" />

                  <div className="relative">
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>

                    <p className="text-[16px] leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

      </MainContainer>
    </>
  )
}
