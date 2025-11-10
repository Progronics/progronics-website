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
      title: "Software Consultancy",
      content: (
        <div>
          <p className="mb-4 text-md font-normal text-neutral-200 ">
            At Progronics, our software consultancy services help businesses navigate the
            complex world of technology with clarity and confidence. We begin by thoroughly
            assessing your existing systems, workflows, and objectives to identify
            opportunities for improvement. Our team provides actionable insights and
            strategic roadmaps to ensure your digital transformation aligns with your
            business goals.
          </p>
          <p className="text-md font-normal text-neutral-200">
            Whether you’re modernizing legacy systems, adopting cloud technologies, or
            implementing new development practices, we partner with you at every step.
            From architecture design to project execution, we ensure your solutions are
            scalable, cost-effective, and future-ready — giving your business a true
            competitive advantage.
          </p>
        </div>
      ),
    },
    {
      title: "Web Development",
      content: (
        <div>
          <p className="mb-4 text-md font-normal text-neutral-200">
            Our web development services focus on creating high-performing, visually
            stunning websites and applications that drive results. We combine cutting-edge
            technologies with user-centered design to deliver responsive, secure, and
            scalable digital solutions tailored to your audience. Every project we build
            is optimized for speed, usability, and long-term maintainability.
          </p>
          <p className="text-md font-normal text-neutral-200">
            From dynamic corporate websites to complex enterprise platforms, our developers
            ensure that every line of code contributes to performance and efficiency. We
            take pride in delivering seamless digital experiences that not only look great
            but also convert visitors into loyal customers — helping your business grow in
            the competitive online landscape.
          </p>
        </div>
      ),
    },
    {
      title: "Mobile App Development",
      content: (
        <div>
          <p className="mb-4 text-md font-normal text-neutral-200">
            In today’s mobile-first world, a strong app presence is vital. Our mobile app
            development team specializes in crafting high-quality native and cross-platform
            applications that combine elegant design with powerful functionality. We
            prioritize user experience, ensuring your app not only performs flawlessly but
            also provides a seamless journey from start to finish.
          </p>
          <p className="text-md font-normal text-neutral-200">
            Whether it’s Android, iOS, or a hybrid platform, our approach centers around
            scalability, performance, and intuitive usability. We handle everything from
            concept and wireframing to deployment and post-launch support — ensuring your
            app evolves as your business grows and customer expectations change.
          </p>
        </div>
      ),
    },
    {
      title: "Staff Augmentation",
      content: (
        <div>
          <p className="mb-4 text-md font-normal text-neutral-200">
            Our staff augmentation services enable you to extend your team with top-tier
            professionals without the complexities of traditional hiring. Whether you need
            a single developer or a dedicated team, we provide experts who integrate
            seamlessly into your workflows and deliver results from day one.
          </p>
          <p className="text-md font-normal text-neutral-200">
            We focus on flexibility, scalability, and efficiency — helping you meet
            deadlines, scale operations, and access specialized skill sets when you need
            them most. With Progronics, you get the perfect balance between in-house
            collaboration and outsourced expertise, ensuring consistent productivity and
            high-quality output.
          </p>
        </div>
      ),
    },
    {
      title: "Branding & Design",
      content: (
        <div>
          <p className="mb-4 text-md font-normal text-neutral-200">
            Great design goes beyond aesthetics — it tells your story and shapes your
            brand’s identity. Our creative team at Progronics crafts visually stunning and
            meaningful designs that resonate with your audience. From logo design and brand
            identity to complete UI/UX strategies, we ensure every detail reflects your
            company’s vision and values.
          </p>
          <p className="text-md font-normal text-neutral-200">
            We believe that branding is about connection. That’s why we blend creativity
            with strategy, ensuring your visuals not only look exceptional but also build
            trust and recognition. Our goal is to help your business stand out in a crowded
            digital space through consistent, purposeful, and timeless design.
          </p>
        </div>
      ),
    },
    {
      title: "Optimization & Support",
      content: (
        <div>
          <p className="mb-4 text-md font-normal text-neutral-200">
            Technology doesn’t end at deployment — it requires constant care and
            optimization. Our ongoing optimization and support services ensure your digital
            assets remain efficient, secure, and up to date. We proactively monitor
            performance, identify bottlenecks, and implement improvements to keep your
            systems running at their best.
          </p>
          <p className="text-md font-normal text-neutral-200">
            From server maintenance and bug fixes to feature enhancements and performance
            tuning, our dedicated team is always ready to help. We aim to create long-term
            partnerships, ensuring that your applications and systems continue to deliver
            maximum value and reliability as your business grows.
          </p>
        </div>
      ),
    },
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
