
import { Button } from "@/components/ui/button";
import { dict } from "@/lib/constants";
import { Brain } from "lucide-react";
import Link from "next/link";
import MainContainer from "../main-container";
import { TextLoop } from "../ui/text-loop";


export default function Hero() {


  const variable = [
    dict.Intelligent_Apps,
    dict.Modern_Interfaces,
    dict.Smart_Businesses,
    dict.Automated_Systems,
    dict.Data_driven_Solutions,
  ];

  if (!dict) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <MainContainer id="hero" className="relative w-full h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center">

      <div className="text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full glass-morphic w-fit mx-auto">
          <Brain className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">
            {dict?.next_gen_solutions}{" "}
            <TextLoop
              className='overflow-y-clip'
              transition={{
                type: 'spring',
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: 'blur(4px)',
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: 'blur(4px)',
                },
              }}
            >
              {variable.map((item, i) => (
                <span key={i}>{item}</span>
              ))}


            </TextLoop>
          </span>
        </div>

        <div className="space-y-4">
          {/* <DecryptedText
            text={dict?.hero_header}
            animateOn="view"
            revealDirection="center"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground"
            speed={50}
            maxIterations={10}
            sequential
          /> */}
          <h1 className="text-6xl font-bold">{dict?.hero_header}</h1>

          <p className="text-lg sm:text-xl text-white leading-relaxed">
            {dict?.hero_description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <Button
            size="lg"
            className="hover:shadow-2xl hover:scale-105 transition-all text-white rounded-xl font-semibold group"
          >
            <Link href={`/services`} className="flex items-center gap-2">
              {dict?.explore_services}

            </Link>
          </Button>


        </div>
      </div>


    </MainContainer>

  )
}

