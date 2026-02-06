
"use client"

import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-output"
import AnimatedListDemo from "@/components/animated-list-demo"
import { cn } from "@/lib/utils"
import { useLocale } from "@/store/LocaleContext"
import {
  BarChart3Icon,
  CpuIcon,
  WorkflowIcon,
  ZapIcon
} from "lucide-react"
import GrowthChart from "../chart"
import MainContainer from "../main-container"
import { BentoCard, BentoGrid } from "../ui/bento-grid"
import { Marquee } from "../ui/marquee"


export default function BentoDemo() {
  const { dict } = useLocale()

   if (!dict) {
    return (
      <div>Loading...</div>
    )
  }
  
  const features = [
  {
    Icon: CpuIcon,
    name: dict.features_cards.ai_powered.name,
    description: dict.features_cards.ai_powered.description,
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),

  },
  {
    Icon: ZapIcon,
   name: dict.features_cards.high_performance.name,
    description: dict.features_cards.high_performance.description,
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {dict.performance_files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: WorkflowIcon,
   name: dict.features_cards.automation.name,
    description: dict.features_cards.automation.description,
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: BarChart3Icon,
    name: dict.features_cards.scalable.name,
    description: dict.features_cards.scalable.description,
    className: "col-span-3 lg:col-span-1",
    background: (
      <GrowthChart />
    ),
  },
]

  return (
    <MainContainer id="features" className="py-20 relative bg-[#f6f6f6]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-black mb-4 leading-h2 tracking-tighter break-words">{dict.features_section.title}</h2>
          <div className="text-[18px] text-slate-700 leading-tight tracking-tight max-w-4xl">
            {dict.features_section.description}
          </div>
        </div>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>

    </MainContainer>
  )
}



