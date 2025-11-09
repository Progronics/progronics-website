
import { useEffect, useState } from "react";
import { LayeredStack } from "../gsap/layered-stack";
import MainContainer from "../main-container";
import { TextEffect } from "../ui/text-effect";
export default function Services({active = false} : {active : boolean}) {

  const [show, setShow] = useState(false)
  useEffect(()=>{
  if(!show && active) setShow(true)
 },[active])

  const products = [
    {
      title: "Sofware Consultancy",
      link: "/services",
      thumbnail:
        "/images/services/consultancy.png",
    },
    {

      title: "Web Development",
      link: "/services",
      thumbnail:
        "/images/services/web.png",
    },
    {
      title: "Mobile App Development",
      link: "/services",
      thumbnail:
        "/images/services/mobile.png",
    },

    {
      title: "Staff Augmentation",
      link: "/services",
      thumbnail:
        "/images/services/staff.png",
    },
    {
      title: "Branding & Design",
      link: "/services",
      thumbnail:
        "/images/services/design.png",
    },
    {
      title: "Optimization & Support",
      link: "/services",
      thumbnail:
        "/images/services/optimization.png",
    },


  ];

 

  return (
    <MainContainer id="services" className="py-20 relative">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">
           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">Key Services</h2>
          <TextEffect trigger={show} per='word' as='h3' preset='blur' className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
            Comprehensive, customized solutions for every industry, designed to streamline operations, enhance productivity, and drive innovation with cutting-edge technology and AI-powered insights. Our dedicated team ensures seamless integration, continuous improvement, and measurable results for your business success.
          </TextEffect>
        </div>

        <LayeredStack className="grid grid-cols-3 gap-4 p-8">
          {products.map((item, i) => (
            <a
            href={item.link}
              key={i}
              style={{
                backgroundImage: `url(${item.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: '300px',
                width: '300px'
              }}
              className="relative flex size-32 items-center justify-center rounded-xl border border-gray-700 bg-card text-xl font-medium text-white shadow-md overflow-hidden hover:scale-105 hover:shadow-lg"
            >
              {/* Overlay for text visibility */}
              <div className="absolute inset-0 bg-black/40 transition-all duration-300 hover:bg-black/20" />

              {/* Title */}
              <span className="relative z-10 px-2 text-center text-md font-semibold leading-tight tracking-tight">
                {item.title}
              </span>
            </a>
          ))}
        </LayeredStack>
      </div>

    </MainContainer>
  )
}