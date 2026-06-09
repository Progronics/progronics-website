
import { Button } from "@/components/ui/button"
import { useLocale } from "@/store/LocaleContext"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import MainContainer from "../main-container"
import { DottedGlowBackground } from "../ui/dotted-glow-background"
export default function CTA() {

  const { dict, lang } = useLocale()
  if (!dict) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <MainContainer id="cta" className="pb-20 relative">

      <div className="flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
        <div className="relative flex w-full max-w-2xl items-center justify-center rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl border px-4 shadow ring-1 shadow-black/10 ring-black/5 dark:shadow-white/10 dark:ring-white/5">

          <DottedGlowBackground
            className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-100 sm:opacity-50"
            opacity={1}
            gap={10}
            radius={1.6}
            colorLightVar="--color-neutral-500"
            glowColorLightVar="--color-neutral-600"
            colorDarkVar="--color-neutral-500"
            glowColorDarkVar="--color-sky-800"
            backgroundOpacity={0}
            speedMin={0.3}
            speedMax={1.6}
            speedScale={1}
          />


          <div className="p-12">

            <h2 className="text-5xl font-bold text-foreground mb-6 ">{dict.cta_section.title}</h2>
            <p className="text-xl text-muted-foreground mb-8 ">
              {dict.cta_section.description}
            </p>
            <Button
              size="lg"
              className="bg-primary hover:shadow-2xl text-white rounded-xl font-semibold"
            >
              <Link href={`/${lang}/contact`} className="flex items-center gap-2">
                {dict.cta_section.button_text}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>


        </div>


      </div>

    </MainContainer >
  )
}
