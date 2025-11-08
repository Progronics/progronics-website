
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ElectricBorder from "../ElectricBorder"
import MainContainer from "../main-container"
export default function CTA() {

  return (
    <MainContainer id="cta" className="py-20 relative pt-0">


      <div className="max-w-4xl mx-auto glass-morphic rounded-3xl  border-2 border-primary/30 text-center">
        <ElectricBorder
          color="#7df9ff"
          speed={0.5}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="p-12">



            <h2 className="text-5xl font-bold text-foreground mb-6 ">Ready to Transform?</h2>
            <p className="text-xl text-muted-foreground mb-8 ">
              Start your AI journey with industry-leading experts
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl text-white rounded-xl font-semibold"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Launch Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>




        </ElectricBorder>
      </div>

    </MainContainer >
  )
}