"use client"
import FloatingLines from "@/components/FloatingLines"
import CTA from "@/components/landing/cta"
import Feature from "@/components/landing/feature"
import Hero from "@/components/landing/hero"
import Process from "@/components/landing/process"
import Services from "@/components/landing/services"
import Technologies from "@/components/landing/technologies"
import Why from "@/components/landing/why"
export default function MainPages() {
    return (
        <>
            <div className="h-screen absolute w-full">
                <FloatingLines
                    enabledWaves={['top', 'middle', 'bottom']}
                    lineCount={[5, 5, 5]}
                    lineDistance={[8, 6, 4]}
                    bendRadius={5.0}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>
            <Hero/>
            <Services />
            <Feature />
            <Why />
            <Process />
            <Technologies />
            <CTA />


        </>
    )
}