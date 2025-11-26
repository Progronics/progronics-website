"use client"

import { useEffect, useId, useRef, useState } from "react"
import {
  BarChart,
  File,
  Globe,
  HeartHandshake,
  Rss,
  Shield,
} from "lucide-react"
import { motion, useAnimation, useInView } from "motion/react"
import { SiCss3, SiDocker, SiExpress, SiFirebase, SiGithub, SiHtml5, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiVercel, SiVite } from 'react-icons/si';
import { FaAws } from "react-icons/fa6";



import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const gradients = [
  "from-green-500 via-teal-500 to-emerald-600",
  "from-purple-500 via-fuchsia-500 to-pink-500",
  "from-blue-500 via-cyan-500 to-sky-500",
  "from-orange-500 via-amber-500 to-yellow-500",
  "from-red-500 via-rose-500 to-pink-600",
];

const techLogos = [
  // --- Frontend & Mobile ---
  { icon: <SiReact className="size-full"/>, title: "React", href: "https://react.dev" },
  { icon: <SiVite className="size-full"/>, title: "Vite", href: "https://vitejs.dev" },
  { icon: <SiTypescript className="size-full"/>, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { icon: <SiHtml5 className="size-full"/>, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { icon: <SiCss3 className="size-full"/>, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: <SiTailwindcss className="size-full"/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { icon: <SiReact className="size-full"/>, title: "React Native", href: "https://reactnative.dev" },

  // --- Backend & Databases ---
  { icon: <SiNodedotjs className="size-full"/>, title: "Node.js", href: "https://nodejs.org" },
  { icon: <SiExpress className="size-full"/>, title: "Express.js", href: "https://expressjs.com" },
  { icon: <SiFirebase className="size-full"/>, title: "Firebase", href: "https://firebase.google.com" },
  { icon: <SiSupabase className="size-full"/>, title: "Supabase", href: "https://supabase.com" },
  { icon: <SiPostgresql className="size-full"/>, title: "PostgreSQL", href: "https://www.postgresql.org" },

  // --- DevOps / Cloud / Deployment ---
  { icon: <SiDocker className="size-full"/>, title: "Docker", href: "https://www.docker.com" },
  { icon: <FaAws className="size-full"/>, title: "AWS", href: "https://aws.amazon.com" },
  { icon: <SiVercel className="size-full"/>, title: "Vercel", href: "https://vercel.com" },
  { icon: <SiGithub className="size-full"/>, title: "GitHub", href: "https://github.com" },
].map((item, i) => ({
  ...item,
  bg: (
    <div
      className={`pointer-events-none absolute top-1/2 left-1/2 size-1/2 
      -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full 
      bg-gradient-to-r ${gradients[i % gradients.length]} opacity-70 blur-[20px]`}
    />
  ),
}));


function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

function Card(card: { icon: React.ReactNode; bg: React.ReactNode }) {
  const id = useId()
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      })
    }
  }, [controls, inView])

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  )
}

export default function Integrations() {
  const [randomTiles1, setRandomTiles1] = useState<typeof techLogos>([])
 

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...techLogos]))
    }
  }, [])

  return (
    <section id="cta">
      <div className="pt-12">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:10s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
           
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
           
            <div className="absolute">
              <div className="bg-backtround dark:bg-background absolute inset-0 -z-10 rounded-full opacity-40 blur-xl" />
            </div>
            <div className="to-backtround dark:to-background absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70%" />
          </div>
        </div>
      </div>
    </section>
  )
}
