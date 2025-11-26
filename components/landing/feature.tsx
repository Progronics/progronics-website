
"use client"

import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-output"
import AnimatedListDemo from "@/components/animated-list-demo"
import { cn } from "@/lib/utils"
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
import { TextEffect } from "../ui/text-effect"


export default function BentoDemo() {
  return (
    <MainContainer id="features" className="py-20 relative bg-[#f6f6f6]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-black mb-4 leading-h2 tracking-tighter break-words">AI-Powered Capabilities</h2>
          <div className="text-[18px] text-slate-700 leading-tight tracking-tight max-w-4xl">
            Next-generation features for modern enterprises, designed to accelerate productivity, streamline operations, and drive innovation across teams and departments. Built for scalability and reliability, our solutions evolve with your business needs and future growth.
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


const files = [
  {
    name: "Blazing Fast",
    body: "Experience ultra-fast load times and smooth interactions for your web and mobile apps.",
  },
  {
    name: "Optimized Rendering",
    body: "Efficient rendering ensures minimal lag, even with complex UI and large datasets.",
  },
  {
    name: "Scalable Architecture",
    body: "Our systems can handle thousands of users simultaneously without compromising performance.",
  },
  {
    name: "Low Latency",
    body: "Optimized backend and network communication for real-time responses.",
  },
  {
    name: "Resource Efficient",
    body: "High performance without overloading memory or CPU, ensuring stability across devices.",
  },
]
const features = [
  {
    Icon: CpuIcon,
    name: 'AI-Powered',
    description: 'Machine learning at the core of every solution — enabling smarter decision-making, predictive analytics, and adaptive systems that continuously learn and improve over time.',
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),

  },
  {
    Icon: ZapIcon,
    name: 'High Performance',
    description: 'Lightning-fast processing with optimized algorithms that handle complex computations efficiently, ensuring seamless user experiences and minimal latency under any load.',
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {files.map((f, idx) => (
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
    name: 'Automation',
    description: 'Streamline complex workflows, reduce manual effort, and boost productivity through intelligent automation powered by AI-driven logic and process orchestration.',
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: BarChart3Icon,
    name: 'Scalable',
    description: 'Built to grow with your business — effortlessly handle increasing traffic, data, and users without compromising reliability or performance, thanks to our modular architecture.',
    className: "col-span-3 lg:col-span-1",
    background: (
      <GrowthChart />
    ),
  },
]
