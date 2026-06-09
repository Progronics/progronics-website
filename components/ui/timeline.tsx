"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { ReactNode, useEffect, useRef, useState } from "react"

interface TagProp {
  node: ReactNode
  title: string
  href: string
}

interface TimelineEntry {
  title: string
  content: ReactNode
  tags: TagProp[]
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const updateHeight = () => {
      setHeight(ref.current?.getBoundingClientRect().height || 0)
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)

    return () => window.removeEventListener("resize", updateHeight)
  }, [data])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 12%", "end 55%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#030712] py-20 font-sans text-white"
    >
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative grid gap-8 py-12 pl-16 md:grid-cols-[340px_1fr] md:gap-14 md:pl-0 lg:grid-cols-[420px_1fr]"
          >
            {/* Dot */}
            {/* <div className="absolute left-8 top-14 z-30 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-[#030712] shadow-[0_0_35px_rgba(34,211,238,0.28)] md:left-[372px] lg:left-[452px]">
              <div className="h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.75)]" />
            </div> */}

            {/* Left title */}
            <div className="md:sticky md:top-36 md:self-start">
              <span className="mb-4 block text-xs font-medium uppercase tracking-[0.35em] text-cyan-300/70">
                Service {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {item.title}
              </h3>
            </div>

            {/* Content card */}
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075] sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/20" />

              <div className="relative text-left text-slate-300">
                {item.content}
              </div>

              {item.tags?.length > 0 && (
                <div className="relative mt-8 flex flex-wrap gap-3">
                  {item.tags.map((tag, tagIndex) => (
                    <a
                      key={tagIndex}
                      href={tag.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                    >
                      {tag.node}
                      {tag.title}
                    </a>
                  ))}
                </div>
              )}
            </motion.article>
          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-[2px] -translate-x-1/2 overflow-hidden bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-[372px] lg:left-[452px]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-cyan-300 via-violet-400 to-fuchsia-400 shadow-[0_0_25px_rgba(34,211,238,0.75)]"
          />
        </div>
      </div>
    </section>
  )
}