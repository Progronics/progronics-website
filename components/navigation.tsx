"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { dict } from "@/lib/constants";
import { DictionatiesTypes } from "@/types/types"
import { AlignJustify, X } from "lucide-react"
import type { Variants } from "motion/react"
import { type HTMLMotionProps, motion, useInView } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useRef, useState } from "react"
import { Drawer } from "vaul"
import GradientBorderButton from "./gradient-border-button"
import LanguageSwitcher from "./language-switcher"

export function Navigation() {

  const isMobile = useMediaQuery("(max-width: 992px)");
  const [isOpen, setIsOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const mainLinks: { name: keyof DictionatiesTypes["nav_bar"], href: string }[] = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "portfolio", href: "/portfolio" },
    { name: "services", href: "/services" },
    { name: "careers", href: "/careers" }
  ]

  if (!dict) {
    return (<div>Loading...</div>)
  }

  return (
    <section
      ref={heroRef}
      className="absolute w-full"
    >
      <TimelineContent
        as="header"
        animationNum={0}
        timelineRef={heroRef}
        customVariants={revealVariants}
        className="relative z-10 xl:px-0 px-5 py-4 max-w-7xl mx-auto"
      >
        {!isMobile ? (
          <nav className="flex items-center justify-between">
            <div className="flex gap-10 items-center">
              <Link href={`/`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image src={"/images/logo.png"} height={55} width={55} alt="Progronics home" />
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                {mainLinks.map((item, i) => (
                  <a
                    key={i}
                    href={`${item.href}`}
                    className="text-gray-50 hover:text-white hover:bg-white/10 backdrop-blur-lg p-1 px-2 inline-block rounded-lg transition-colors duration-200"
                  >
                    {dict.nav_bar[item.name]}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href={`/contact`} className="cursor-pointer">
                <GradientBorderButton text={dict.get_in_touch} />
              </Link>
            </div>
          </nav>
        ) : (
          <>
            <Drawer.Root
  direction="left"
  open={isOpen}
  onOpenChange={setIsOpen}
>
  <Drawer.Trigger className="group grid h-11 w-11 place-content-center rounded-2xl border border-white/10 bg-white/[0.08] text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.14]">
    <AlignJustify className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
  </Drawer.Trigger>

  <Drawer.Portal>
    <Drawer.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />

    <Drawer.Content
      className="fixed bottom-3 left-3 top-3 z-50 flex w-[310px] outline-none sm:w-[340px]"
      style={
        {
          "--initial-transform": "calc(100% + 12px)",
        } as React.CSSProperties
      }
    >
      <div className="relative flex h-full w-full grow flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#050712]/95 p-4 text-white shadow-2xl shadow-black/50 backdrop-blur-2xl">
        {/* Required for accessibility */}
        <Drawer.Title className="sr-only">
          Navigation menu
        </Drawer.Title>

        {/* Premium background glow */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

        {/* Header */}
        <div className="relative flex w-full items-center justify-between border-b border-white/10 pb-4">
          <Link
            href={`/`}
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl transition group-hover:bg-cyan-400/30" />
              <Image
                src="/images/logo.png"
                height={54}
                width={54}
                alt="Progronics home"
                className="relative"
              />
            </div>
          </Link>

          <button
            className="grid h-10 w-10 place-content-center rounded-2xl border border-white/10 bg-white/[0.08] text-white transition-all duration-300 hover:border-red-300/30 hover:bg-white/[0.14]"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links */}
        <div className="relative flex flex-1 flex-col justify-between pt-6">
          <ul className="flex flex-col gap-2">
            {mainLinks.map((item, i) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={i}
                href={`${item.href}`}
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.09] hover:text-white"
              >
                <span>{dict?.nav_bar[item.name]}</span>

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-0 shadow-[0_0_16px_rgba(34,211,238,0.9)] transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </ul>

          {/* Bottom actions */}
          <div className="space-y-4 border-t border-white/10 pt-5">
            <Link
              onClick={() => setIsOpen(false)}
              href={`/contact`}
              className="block cursor-pointer"
            >
              <GradientBorderButton text={dict.get_in_touch} />
            </Link>
          </div>
        </div>
      </div>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
          </>
        )}
      </TimelineContent>
    </section>
  )
}


type TimelineContentProps<T extends keyof HTMLElementTagNameMap> = {
  children?: React.ReactNode
  animationNum: number
  className?: string
  timelineRef: React.RefObject<HTMLElement | null>
  as?: T
  customVariants?: Variants
  once?: boolean
} & HTMLMotionProps<T>

export const TimelineContent = <T extends keyof HTMLElementTagNameMap = "div">({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  customVariants,
  once = false,
  ...props
}: TimelineContentProps<T>) => {
  const defaultSequenceVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(20px)",
      y: 0,
      opacity: 0,
    },
  }

  // Use custom variants if provided, otherwise use default
  const sequenceVariants = customVariants || defaultSequenceVariants

  const isInView = useInView(timelineRef, {
    once
  })

  const MotionComponent: any = motion[as || "div"] as React.ElementType

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={sequenceVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
