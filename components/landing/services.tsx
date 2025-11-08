
import { ArrowRight, Code2, Palette, Users, Zap } from "lucide-react"
import Link from "next/link"
import CardSwap, { Card } from "../CardSwap"
import MainContainer from "../main-container"
export default function Services() {

  const services = [
    {
      icon: Code2,
      title: "Application Development",
      description: "Enterprise and custom software solutions with cutting-edge technology",
      href: "/services/app-dev",
      color: "from-blue-500 to-primary",
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Scale your team with expert engineers and managed resources",
      href: "/services/staff-augmentation",
      color: "from-secondary to-cyan-500",
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Digital marketing, UI/UX design, and brand strategy expertise",
      href: "/services/branding-design",
      color: "from-accent to-violet-500",
    },
    {
      icon: Zap,
      title: "Optimization & Support",
      description: "QA, 24/7 support, maintenance, and cloud infrastructure",
      href: "/services/optimization-support",
      color: "from-yellow-500 to-orange-500",
    },
  ]


  return (
    <MainContainer id="services" className="py-20 relative">

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 ">
          <h2 className="text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter">Key Services</h2>
          <p className="text-[20px] text-slate-200 leading-tight tracking-tight max-w-4xl">
            Comprehensive, customized solutions for every industry, designed to streamline operations, enhance productivity, and drive innovation with cutting-edge technology and AI-powered insights.
          </p>
        </div>

        <div className="h-[500px] grid grid-cols-2 gap-2 relative">
          <div className="max-w-2xl space-y-5">
            <p className="text-slate-300 text-lg ">
              From AI-powered software to modern web and mobile apps, we craft intelligent, scalable,
              and design-driven solutions that help businesses thrive in the digital era.
            </p>
            <p className="text-slate-400 text-base ">
              At <span className="text-primary font-semibold">Progronics</span>, our mission is to fuse
              innovation with technology — empowering startups and enterprises alike with next-gen
              digital experiences. Whether you’re building a full-stack platform, enhancing your brand,
              or augmenting your development team, we deliver excellence every step of the way.
            </p>
            <ul className="text-slate-400 text-base list-disc list-inside  space-y-1">
              <li><span className="text-white font-medium">Application Development:</span> Web, mobile, and AI-based systems tailored for performance.</li>
              <li><span className="text-white font-medium">Staff Augmentation:</span> Scale your projects with expert dedicated developers or teams.</li>
              <li><span className="text-white font-medium">Branding & Optimization:</span> Elevate your digital presence through creative design and intelligent marketing.</li>
            </ul>
            <p className="text-slate-400 text-base ">
              Let’s create something remarkable — transforming your ideas into impactful digital products
              that drive growth, innovation, and success.
            </p>
          </div>
          <div className="hidden md:flex relative">
            <CardSwap
              cardDistance={70}
              verticalDistance={70}
              delay={2000}
              pauseOnHover={true}
              easing="elastic"
              height={300}
            >
              {services.map((service, index) => {
                const Icon = service.icon
                return (

                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-full p-8 flex flex-col justify-between">
                      <div>
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {service.description}
                        </p>
                      </div>
                      <Link href={service.href}>
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>

                  </Card>

                )
              })}

            </CardSwap>
          </div>
        </div>


      </div>
    </MainContainer>
  )
}