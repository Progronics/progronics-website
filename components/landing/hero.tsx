
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";
import Link from "next/link";
import DecryptedText from "../DecryptedText";
import StarBorder from "../StarBorder";
import MainContainer from "../main-container";


export default function Hero() {

  return (
    <MainContainer id="hero" className="relative w-full h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center">
  
      {/* Centered Left Content */}
      <div className="text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full glass-morphic w-fit mx-auto">
          <Brain className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">AI-Powered Solutions</span>
        </div>

        <div className="space-y-4">
          <DecryptedText
            text="Transform Your Enterprise"
            animateOn="view"
            revealDirection="center"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground"
            speed={50}
            maxIterations={10}
            sequential
          />

          <p className="text-lg sm:text-xl text-white leading-relaxed">
            Leverage intelligent AI and machine learning to automate, optimize, and innovate your business operations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <Button
            size="lg"
            className="bg-linear-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all text-white rounded-xl font-semibold group"
          >
            <Link href="/services" className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Link href="/contact">
            <StarBorder
              as="button"
              color="cyan"
              speed="3s"
              thickness={2}
            >
              <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 has-[>svg]:px-4">
                <span>Get Started</span>
              </div>
            </StarBorder>
          </Link>
        </div>
      </div>
    </MainContainer>

  )
}

