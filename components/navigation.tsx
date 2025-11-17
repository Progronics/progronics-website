"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { type HTMLMotionProps, motion, useInView } from "motion/react"
import type React from "react"
import type { Variants } from "motion/react"
import { Send } from "lucide-react";
import { AlignJustify, } from "lucide-react";
import { Drawer } from "vaul";
import GradientBorderButton from "./gradient-border-button"

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
  const opacityVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    // { name: "Contact", href: "/contact" },
  ]

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
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">Ⓟ</span>
                </div>
                <span className="font-bold text-lg hidden sm:inline text-foreground">Progronics</span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                {mainLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="text-gray-50 hover:text-white hover:bg-white/10 backdrop-blur-lg p-1 px-2 inline-block rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/contact" className="cursor-pointer">
                <GradientBorderButton text="Get In Touch" />
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
              <Drawer.Trigger className="px-2 text-white h-9 grid place-content-center bg-neutral-800 w-fit rounded-lg">
                <AlignJustify />
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
                <Drawer.Content
                  className="left-2 top-2 bottom-2 fixed z-50 outline-none w-72 flex"
                  style={
                    {
                      "--initial-transform": "calc(100% + 8px)",
                    } as React.CSSProperties
                  }
                >
                  <div className="bg-gradient-to-t from-black via-neutral-800 to-neutral-950 border border-neutral-700 text-white p-2 h-full w-full grow flex flex-col rounded-[16px]">
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2 px-4 flex-shrink-0 items-center text-2xl font-semibold  ">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold">Ⓟ</span>
                          </div>
                        </Link>
                      </div>
                      <button
                        className="rounded-md w-fit bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        <X />
                      </button>
                    </div>
                    <div className="rounded-b-md py-2 px-3 flex flex-1 flex-col justify-between">
                      <ul className="space-y-2 flex flex-col mt-4">
                        {mainLinks.map((item, i) => (
                          <a
                            key={i}
                            href={item.href}
                            className="hover:bg-neutral-800 cursor-pointer p-1.5 px-2 rounded-md" >
                            {item.name}
                          </a>
                        ))}

                      </ul>
                      <div className="flex items-center space-x-4 pt-4">

                        <Link href="/contact" className="cursor-pointer">
                          <GradientBorderButton text="Get In Touch" />
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

    // <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/50 border-b border-border/20 w-full">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       {/* Logo */}
    //       <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
    //         <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
    //           <span className="text-white font-bold">Ⓟ</span>
    //         </div>
    //         <span className="font-bold text-lg hidden sm:inline text-foreground">Progronics</span>
    //       </Link>

    //       {/* Desktop Menu */}
    //       <div className="hidden md:flex items-center gap-8">
    //         {mainLinks.map((link) => (
    //           <Link
    //             key={link.href}
    //             href={link.href}
    //             className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
    //           >
    //             {link.name}
    //             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
    //           </Link>
    //         ))}


    //       </div>

    //       {/* Mobile Menu Button */}
    //       <button
    //         className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
    //         onClick={() => setIsOpen(!isOpen)}
    //         aria-label="Toggle menu"
    //       >
    //         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    //       </button>
    //     </div>

    //     {/* Mobile Menu */}
    //     {isOpen && (
    //       <div className="md:hidden pb-4 space-y-2 border-t border-border/30 pt-4 animate-slide-in-left">
    //         {mainLinks.map((link) => (
    //           <Link
    //             key={link.href}
    //             href={link.href}
    //             className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
    //             onClick={() => setIsOpen(false)}
    //           >
    //             {link.name}
    //           </Link>
    //         ))}


    //       </div>
    //     )}
    //   </div>
    // </nav>
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