"use client"

import MainContainer from "@/components/main-container"
import { projects } from "@/data/constants"
import { useLocale } from "@/store/LocaleContext"
import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Layers,
  LockKeyhole,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function PortfolioClient() {
  const { dict } = useLocale()
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  if (!dict) {
    return (
      <MainContainer id="portfolio" className="relative overflow-visible py-20">
        <div className="mx-auto max-w-7xl px-4 text-white">Loading...</div>
      </MainContainer>
    )
  }

  const finalProjects = projects.map((item) => ({
    ...item,
    ...dict.projects?.[item.id],
  }))

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index)
          }
        },
        {
          root: null,
          threshold: 0.45,
        }
      )

      observer.observe(card)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [finalProjects.length])

  const activeProject = finalProjects[activeIndex]

  return (
    <MainContainer id="portfolio" className="relative overflow-visible py-20">
      <BackgroundGlow />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeaderSection dict={dict} />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="relative hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)]">
              <ProjectPreview project={activeProject} index={activeIndex} />
            </div>
          </aside>

          <div className="space-y-8">
            {finalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isActive={activeIndex === index}
                refCallback={(el) => {
                  cardRefs.current[index] = el
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

function HeaderSection({ dict }: { dict: any }) {
  return (
    <div className="mb-14 max-w-4xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300 backdrop-blur">
        <Sparkles className="h-4 w-4 text-cyan-300" />
        Premium project case studies
      </div>

      <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
        {dict.portfolio_section.title}
      </h2>

      <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
        {dict.portfolio_section.description}
      </p>
    </div>
  )
}

function ProjectPreview({
  project,
  index,
}: {
  project: any
  index: number
}) {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.16),transparent_35%)]" />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-slate-300">
            0{index + 1}
          </span>

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200">
            Live case study
          </span>
        </div>

        <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black/40">
          <Image
            key={project.img}
            src={project.img}
            alt={`${project.title} — ${project.category} project screenshot by Progronics`}
            width={900}
            height={700}
            className="h-[320px] w-full object-cover transition-all duration-700"
            priority
          />
        </div>

        <div className="mt-5">
          <p className="text-sm text-slate-400">{project.category}</p>

          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-300">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  isActive,
  refCallback,
}: {
  project: any
  index: number
  isActive: boolean
  refCallback: (el: HTMLElement | null) => void
}) {
  return (
    <article
      ref={refCallback}
      className={`group relative overflow-hidden rounded-[30px] border p-5 transition-all duration-500 sm:p-6 ${isActive
        ? "border-cyan-300/30 bg-white/[0.075] shadow-2xl shadow-cyan-950/30"
        : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]"
        }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-300">
                0{index + 1}
              </span>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200">
                {project.category}
              </span>

              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                <Calendar className="h-3.5 w-3.5" />
                {project.year}
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {project.title}
            </h3>
          </div>

          <ArrowUpRight
            className={`mt-1 h-6 w-6 shrink-0 transition duration-300 ${isActive ? "text-cyan-300" : "text-slate-500 group-hover:text-white"
              }`}
          />
        </div>

        <div className="block lg:hidden">
          <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <Image
              src={project.img}
              alt={`${project.title} — ${project.category} project screenshot by Progronics`}
              width={900}
              height={650}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-400">
            <Layers className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Scope
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">
            {project.scope ||
              "Design, development, dashboards, integrations, user flows, and deployment."}
          </p>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Features
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.features?.slice(0, 6).map((feature: string) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Stack
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.technologies?.slice(0, 6).map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 ring-1 ring-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.demoCredentials && (
          <DemoCredentials credentials={project.demoCredentials} />
        )}

        {project.url && (
          <div className="mt-6">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              View project
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </article>
  )
}

function DemoCredentials({
  credentials,
}: {
  credentials: Record<string, any>
}) {

    const [roomId, setRoomId] = useState<number | null>(null)

  useEffect(() => {
    setRoomId(Math.floor(Math.random() * 900) + 100)
  }, [])

  return (
     <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-3 flex items-center gap-2 text-slate-400">
        <LockKeyhole className="h-4 w-4" />
        <span className="text-xs font-medium uppercase tracking-[0.22em]">
          Demo access
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(credentials).map(([role, data]) => {
          const demoLink = buildDemoLink(data, roomId)

          return (
            <div
              key={role}
              className="rounded-xl border border-white/10 bg-black/20 p-3"
            >
              <p className="mb-2 text-xs font-semibold capitalize text-white">
                {role}
              </p>

              {data.email && (
                <p className="text-xs text-slate-400">
                  Email:{" "}
                  <span className="select-all text-slate-200">
                    {data.email}
                  </span>
                </p>
              )}

              {data.password && (
                <p className="mt-1 text-xs text-slate-400">
                  Password:{" "}
                  <span className="select-all text-slate-200">
                    {data.password}
                  </span>
                </p>
              )}

              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-xs text-cyan-300 hover:text-cyan-200"
                >
                  Open demo link
                </a>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function BackgroundGlow() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-[35%] h-[480px] w-[480px] rounded-full bg-purple-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
    </>
  )
}

function buildDemoLink(data: any, roomId: number | null) {
  if (!roomId) return ""

  if (data.link) return data.link

  if (data.type === "chess") {
    const params = new URLSearchParams({
      roomID: String(roomId),
      playerID: data.playerID,
      time: "1",
    })

    if (data.isHost) {
      params.set("isHost", "true")
    }

    return `https://chess-game-f1pi.onrender.com/?${params.toString()}`
  }

  if (data.type === "uno") {
    const params = new URLSearchParams({
      roomID: String(roomId),
      playerID: data.playerID,
      playerName: data.playerName || `Player${data.playerID}`,
    })

    if (data.numOfPlayers) {
      params.set("numOfPlayers", data.numOfPlayers)
    }

    if (data.isHost) {
      params.set("isHost", "true")
    }

    return `https://uno-game-d3oe.onrender.com/?${params.toString()}`
  }

  if (data.type === "soccer") {
    const params = new URLSearchParams({
      roomID: String(roomId),
      playerID: data.playerID,
      playerName: data.playerName || `Player${data.playerID}`,
    })

    if (data.numOfPlayers) {
      params.set("numOfPlayers", data.numOfPlayers)
    }

    if (data.isHost) {
      params.set("isHost", "true")
    }

    return `https://soccer-game.onrender.com/?${params.toString()}`
  }

  if (data.type === "soccer_head") {
    const params = new URLSearchParams({
      roomname: String(roomId),
      playerid: data.playerID,
    })

    return `https://soccer-head-game.onrender.com/?${params.toString()}`
  }

  return ""
}
