
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain } from "lucide-react"
import Link from "next/link"
import DecryptedText from "../DecryptedText";
import GridScan from "../GridScan";
import StarBorder from "../StarBorder";
import MainContainer from "../main-container";


const imageUrls = {
  code: "/images/code.png",
  brain: "/images/brain.png",
  network: "/images/world.png",
};
export default function Hero() {

  return (
  <MainContainer id="hero" className="relative w-full h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center">
 
  {/* Centered Left Content */}
  <div className="z-10 text-center max-w-3xl mx-auto space-y-8">
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
        speed={60}
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
          Explore Solutions
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

  {/* Floating Right-Side Images */}
  {/* <div className="absolute inset-0 pointer-events-none">

    <div
      className="absolute top-16 right-12 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl backdrop-blur-md border border-primary/30 shadow-2xl animate-block-reveal"
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      <img
        src={imageUrls.code}
        alt="Code Icon"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>

    <div
      className="absolute top-1/3 left-6 w-48 h-48 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl backdrop-blur-md border border-accent/30 shadow-2xl animate-block-reveal"
      style={{ animation: "float 7s ease-in-out infinite", animationDelay: "1s" }}
    >
      <img
        src={imageUrls.brain}
        alt="AI Icon"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>

    <div
      className="absolute bottom-16 right-20 w-44 h-44 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl backdrop-blur-md border border-secondary/30 shadow-xl animate-block-reveal"
      style={{ animation: "float 8s ease-in-out infinite", animationDelay: "0.5s" }}
    >
      <img
        src={imageUrls.network}
        alt="Network Icon"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
  </div> */}
</MainContainer>

  )
}