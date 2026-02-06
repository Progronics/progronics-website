"use client"

import MainContainer from "@/components/main-container"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Timeline } from "@/components/ui/timeline"
import { faqs } from "@/data/constants"
import { useLocale } from "@/store/LocaleContext"
import { ChevronRight } from "lucide-react"
import {
  SiAdobexd,
  SiAmazon,
  SiArduino,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit, SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs, SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRaspberrypi,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript
} from "react-icons/si"
import { VscAzure } from "react-icons/vsc"

export default function ServicesClient() {

  const { dict } = useLocale()

  const data = [
    {

      tags: [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
        { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
        { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
      ],
    },
    {

      tags: [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <VscAzure />, title: "Azure", href: "https://azure.microsoft.com" },
        { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
        { node: <SiGooglecloud />, title: "GCP", href: "https://cloud.google.com" },
        { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
        { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
      ],
    },
    {

      tags: [
        { node: <SiReact />, title: "React Native", href: "https://reactnative.dev" },
        { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
      ],
    },
    {

      tags: [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiPython />, title: "Python", href: "https://python.org" },
        { node: <SiDjango />, title: "Django", href: "https://djangoproject.com" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
      ],
    },
    {

      tags: [
        { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
        { node: <SiAdobexd />, title: "Adobe XD", href: "https://adobe.com/products/xd" },
        { node: <SiTailwindcss />, title: "Tailwind", href: "https://tailwindcss.com" },
        { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org" },
        { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org" },
      ],
    },
    {

      tags: [
        { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
        { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
        { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
        { node: <SiGooglecloud />, title: "GCP", href: "https://cloud.google.com" },
        { node: <VscAzure />, title: "Azure", href: "https://azure.microsoft.com" },
        { node: <SiGithub />, title: "GitHub Actions", href: "https://github.com" },
      ],
    },
    {

      tags: [
        { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
        { node: <SiPython />, title: "Python", href: "https://python.org" },
        { node: <SiTensorflow />, title: "TensorFlow", href: "https://tensorflow.org" },
        { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
        { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
      ],
    },
    {

      tags: [
        { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org" },
        { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org" },
        { node: <SiJavascript />, title: "JavaScript", href: "https://javascript.com" },
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiGooglecloud />, title: "Google Analytics", href: "https://analytics.google.com" },
      ],
    },
    {

      tags: [
        { node: <SiRaspberrypi />, title: "Raspberry Pi", href: "https://raspberrypi.org" },
        { node: <SiArduino />, title: "Arduino", href: "https://arduino.cc" },
        { node: <SiPython />, title: "Python", href: "https://python.org" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
      ],
    }
  ];


  if (!dict) {
    return (
      <div>Loading...</div>
    )
  }


  const finalData = dict.services_page.cards.map((item, i) => {
    return ({
      title: item.title,
      content: (
        <div className="flex flex-col gap-4">
          {(() => {
            return (
              item.paragraphs.map((eachPara, ind) => (
                <p key={ind} className="mb-4 text-md font-normal text-neutral-200">{eachPara}</p>
              ))
            )
          })()}
        </div>
      ),
      tags : data[i].tags
    })
  })

  

  return (

    <MainContainer id="service" className="py-20 relative">

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-16 ">

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">{dict.services_page.title}</h2>
          <div className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
            {dict.services_page.description}
          </div>
        </div>


        <div className="flex flex-1">
          <Timeline data={finalData} />
        </div>


        <div >
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 ">
                <h2 className="text-4xl font-bold text-foreground mb-4">{dict.faq_section.title}</h2>
                <p className="text-lg text-muted-foreground">{dict.faq_section.description}</p>
              </div>

              <Accordion
                className='flex w-full flex-col'
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                variants={{
                  expanded: {
                    opacity: 1,
                    scale: 1,
                  },
                  collapsed: {
                    opacity: 0,
                    scale: 0.7,
                  },
                }}
              >

                {dict.faq_section.cards.map((item, i) => (
                  <AccordionItem key={i} value={item.question} className='py-2'>
                    <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
                      <div className='flex items-center'>
                        <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
                        <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
                          {item.question}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-left'>
                      <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400 text-justify'>
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}


              </Accordion>


            </div>
          </section>
        </div>


      </div>
    </MainContainer>

  )
}
