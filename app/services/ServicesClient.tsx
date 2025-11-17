"use client"

import MainContainer from "@/components/main-container"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TextEffect } from "@/components/ui/text-effect"
import { Timeline } from "@/components/ui/timeline"
import { ChevronRight } from "lucide-react"

export function ServicesClient() {


  const faqs = [
    {
      question: "What types of applications do you develop?",
      answer:
        "We develop a wide range of applications including web applications, mobile apps (iOS & Android), enterprise software, AI/ML solutions, and cloud-based platforms. Our expertise spans various industries and tech stacks.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple projects may take 2-3 months, while complex enterprise solutions can take 6-12 months or more. We provide detailed timelines during the discovery phase.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "We provide comprehensive post-launch support including maintenance, bug fixes, performance optimization, feature updates, and technical assistance to ensure your application runs smoothly.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Yes, we specialize in integrating new solutions with your existing systems and tech stack. Our team handles API development, data migration, and ensures seamless integration with minimal disruption.",
    },
    {
      question: "What is your approach to project management?",
      answer:
        "We use Agile methodology with regular sprint cycles, transparent communication, and frequent progress updates. You'll have a dedicated project manager and clear visibility into development progress.",
    },
    {
      question: "How do you ensure code quality?",
      answer:
        "We implement rigorous quality assurance processes including code reviews, automated testing, continuous integration, and comprehensive testing phases before deployment to ensure production-ready code.",
    },
  ]


 const data = [
  {
    title: "Digital Product Development",
    content: (
      <div>
        <p className="mb-4 text-md font-normal text-neutral-200">
          Our digital product development service helps you transform ideas into fully functional, scalable, and market-ready digital solutions. We begin by understanding your business goals, user needs, and technical constraints, ensuring every feature aligns with long-term growth. From MVPs to enterprise-level platforms, our team builds reliable products with clean architecture and future-ready ecosystems.
        </p>
        <p className="text-md font-normal text-neutral-200">
          Whether launching a new startup product or modernizing an existing digital system, we handle everything—from UI/UX design and system planning to development, testing, and post-launch iterations. We ensure your product is secure, optimized, and built with the technologies best suited for long-term success.
        </p>
      </div>
    ),
  },
  {
    title: "Enterprise Web Applications",
    content: (
      <div>
        <p className="mb-4 text-md font-normal text-neutral-200">
          We develop powerful, enterprise-grade web applications tailored for scalability, performance, and security. Our approach focuses on crafting robust backend architectures, intuitive frontends, and workflows that support large organizations with complex operational needs. 
        </p>
        <p className="text-md font-normal text-neutral-200">
          From dashboards and internal tools to multi-tenant systems and cloud-native platforms, we ensure your application remains stable under heavy usage. Every solution is optimized for long-term growth, seamless user experience, and efficient maintenance.
        </p>
      </div>
    ),
  },
  {
    title: "Mobile App Engineering",
    content: (
      <div>
        <p className="mb-4 text-md font-normal text-neutral-200">
          Our mobile app engineering team builds high-quality Android, iOS, and cross-platform applications with exceptional performance and user experience. We focus on clean code, optimized architectures, and smooth interactions that keep users engaged.
        </p>
        <p className="text-md font-normal text-neutral-200">
          From prototype to deployment, we handle UI/UX design, feature development, API integration, security, testing, and publishing. Your mobile app is delivered fully optimized, scalable, and ready for continuous evolution as your business grows.
        </p>
      </div>
    ),
  },
  {
    title: "Staff Augmentation & Dedicated Teams",
    content: (
      <div>
        <p className="mb-4 text-md font-normal text-neutral-200">
          Scale your development capacity instantly with our staff augmentation services. We provide highly skilled developers, designers, QA engineers, project managers, and technical experts who integrate seamlessly with your existing teams.
        </p>
        <p className="text-md font-normal text-neutral-200">
          Whether you need short-term support or a long-term dedicated team, we ensure reliable talent, smooth onboarding, flexible engagement, and consistent delivery. Get the benefits of an expanded team without the overhead of traditional hiring.
        </p>
      </div>
    ),
  },
  {
    title: "UI/UX & Creative Design",
    content: (
      <div>
        <p className="mb-4 text-md font-normal text-neutral-200">
          Design is the heart of every successful digital experience. Our UI/UX team creates intuitive, user-friendly, and visually engaging interfaces that elevate your brand and enhance usability. From wireframes and prototypes to complete design systems, we ensure every interaction feels natural and purposeful.
        </p>
        <p className="text-md font-normal text-neutral-200">
          Alongside UI/UX, our creative designers craft brand identities, logos, and visual assets that communicate your story and captivate your audience. We blend creativity with strategy to deliver designs that are timeless, unique, and perfectly aligned with your business goals.
        </p>
      </div>
    ),
  },
  {
    title: "DevOps & Cloud Infrastructure",
    content: (
      <div>
        <p className="mb-4 text-md font-normal text-neutral-200">
          Our DevOps and cloud engineering services ensure your applications run smoothly, securely, and efficiently in the cloud. We implement CI/CD pipelines, automate deployments, and manage scalable infrastructures across AWS, Azure, GCP, and DigitalOcean.
        </p>
        <p className="text-md font-normal text-neutral-200">
          From optimizing server performance to enhancing security, monitoring uptime, and reducing cloud costs, we ensure your systems stay reliable 24/7. Our DevOps approach improves delivery speed, reduces downtime, and guarantees operational excellence.
        </p>
      </div>
    ),
  },
  {
    title: "AI Automation & Custom AI Agents",
    content: (
      <div>
        <p className="mb-4 text-md font-normal text-neutral-200">
          Harness the power of AI with intelligent automation solutions tailored to your business. We build custom AI agents for customer support, sales, analytics, internal operations, and workflow automation using OpenAI, Gemini, and local LLMs.
        </p>
        <p className="text-md font-normal text-neutral-200">
          Our AI team develops chatbots, RPA systems, NLP models, and data-driven solutions that eliminate repetitive work and enhance decision-making. We integrate AI seamlessly into your existing systems, giving your business a competitive edge through innovation.
        </p>
      </div>
    ),
  },
  {
    title: "Digital Marketing & Social Media Growth",
    content: (
      <div>
        <p className="mb-4 text-md font-normal text-neutral-200">
          Our digital marketing services help your brand grow online through targeted strategies and high-impact content. We manage social media, ads, SEO, and content campaigns that boost visibility and engagement.
        </p>
        <p className="text-md font-normal text-neutral-200">
          Whether you're aiming for brand awareness, lead generation, or performance marketing, we build tailored campaigns backed by analytics and consistent optimization to deliver measurable results.
        </p>
      </div>
    ),
  },
  {
    title: "IoT, Embedded Systems & R&D",
    content: (
      <div>
        <p className="mb-4 text-md font-normal text-neutral-200">
          Our embedded systems and IoT services bring hardware and software together to create intelligent, connected solutions. We work with microcontrollers like ESP32, STM32, Raspberry Pi, and more to develop firmware and hardware prototypes.
        </p>
        <p className="text-md font-normal text-neutral-200">
          From sensor integration and PCB design to cloud connectivity and industrial automation, we support businesses looking to innovate with next-generation hardware technology. Our R&D team builds custom solutions tailored for real-world applications.
        </p>
      </div>
    ),
  }
];





  return (

    <MainContainer id="service" className="py-20 relative">

     <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">A Complete Spectrum of IT Services</h2>
          <TextEffect per='word' as='h3' preset='blur' className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
            From building modern applications to scaling your brand — Progronics covers every aspect of digital transformation. Our expert teams blend creativity, strategy, and technology to deliver solutions that drive measurable impact. Whether you’re a startup or an enterprise, we help you innovate faster, operate smarter, and stay ahead in a competitive digital world.
          </TextEffect>
        </div>


        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>


        <div >
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 ">
                <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-muted-foreground">Everything you need to know about our services</p>
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

                {faqs.map((item, i) => (
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
