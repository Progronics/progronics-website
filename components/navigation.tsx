"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { dict } from "@/lib/constants";
import { DictionatiesTypes } from "@/types/types"
import { ArrowRight, BriefcaseBusiness, Code2, FolderKanban, Home, Info, Menu, X } from "lucide-react"
import type { Variants } from "motion/react"
import { type HTMLMotionProps, motion, useInView } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { useRef, useState } from "react"
import { Drawer } from "vaul"
import GradientBorderButton from "./gradient-border-button"

export function Navigation() {

  const isMobile = useMediaQuery("(max-width: 992px)");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
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

  const mobileIcons = [Home, Info, FolderKanban, Code2, BriefcaseBusiness];

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
          <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Progronics home"><Image src="/images/logo.png" height={55} width={55} alt="Progronics home" /></Link>
              <Drawer.Trigger asChild><button type="button" aria-label="Open navigation menu" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.08] text-white backdrop-blur-xl hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-primary"><Menu className="h-6 w-6" /></button></Drawer.Trigger>
            </div>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 z-50 bg-black/70" />
              <Drawer.Content className="fixed inset-0 z-50 flex flex-col bg-[#050712] text-white outline-none">
                <Drawer.Title className="sr-only">Navigation menu</Drawer.Title>
                <Drawer.Description className="sr-only">Choose a page to visit.</Drawer.Description>
                <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-5 sm:px-6">
                  <Link href="/" onClick={() => setIsOpen(false)} aria-label="Progronics home"><Image src="/images/logo.png" height={55} width={55} alt="Progronics home" /></Link>
                  <Drawer.Close asChild><button type="button" aria-label="Close navigation menu" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.08] hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-primary"><X className="h-6 w-6" /></button></Drawer.Close>
                </div>
                <nav aria-label="Mobile navigation" className="mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-y-auto px-5 pb-8 pt-6 sm:px-6">
                  <p className="border-b border-white/10 pb-3 text-xs font-semibold uppercase tracking-widest text-primary">Navigation</p>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {[mainLinks[0], mainLinks[3], ...mainLinks.slice(1, 3), mainLinks[4]].map((item) => {
                      const i = mainLinks.indexOf(item);
                      const Icon = mobileIcons[i];
                      const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");
                      return (
                        <li key={item.href}>
                          <Link href={item.href} onClick={() => setIsOpen(false)} aria-current={active ? "page" : undefined} className={`flex min-h-11 items-center gap-2.5 rounded-xl p-2.5 text-base font-bold transition-colors ${active ? "bg-primary/15 text-primary" : "text-slate-200 hover:bg-white/[0.07] hover:text-white"}`}>
                            <Icon className="h-5 w-5 shrink-0 text-primary" />{dict.nav_bar[item.name]}
                          </Link>
                          {item.name === "services" && (
                            <ul className="my-1 ml-2 flex flex-col gap-1 border-l-2 border-primary/30 pl-2 sm:pl-3">
                              {dict.services_page.cards.map((service, index) => (
                                <li key={index}>
                                  <Link href={`/services#service-${index + 1}`} onClick={() => setIsOpen(false)} className="flex min-h-10 items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-slate-300 transition-colors hover:bg-primary/10 hover:text-white sm:text-sm">
                                    <Code2 className="h-4 w-4 shrink-0 text-primary" />{service.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-auto border-t border-white/10 pt-4 pb-2"><Link href="/contact" onClick={() => setIsOpen(false)} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90">{dict.get_in_touch}<ArrowRight className="h-4 w-4" /></Link></div>
                </nav>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
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
