import { FaUsers } from "react-icons/fa6";
import MainContainer from "../main-container";
import { useEffect, useState } from "react";
import { FaBrain, FaCogs, FaProjectDiagram, FaShieldAlt, FaTrophy } from 'react-icons/fa';
import { TextEffect } from "../ui/text-effect";


export default function Why({active = false} : {active : boolean}) {

     const [show, setShow] = useState(false)
      useEffect(()=>{
      if(!show && active) setShow(true)
     },[active])

    const whyChoose = [
        {
            icon: <FaBrain />,
            title: "Cutting-edge Expertise",
            description:
                "Our team excels in leveraging modern technologies, AI, and machine learning to deliver innovative and scalable digital solutions that set your business apart.",
        },
        {
            icon: <FaCogs />,
            title: "Customized Solutions",
            description:
                "We design and build fully tailored solutions based on your unique business needs, ensuring flexibility, performance, and long-term sustainability.",
        },
        {
            icon: <FaProjectDiagram />,
            title: "End-to-End Services",
            description:
                "From initial concept to full deployment and post-launch support, we manage every stage of the process to ensure seamless execution and exceptional results.",
        },
        {
            icon: <FaTrophy />,
            title: "Proven Track Record",
            description:
                "With over 100 successful projects delivered globally, our consistent results speak to our reliability, efficiency, and commitment to client satisfaction.",
        },
        {
            icon: <FaUsers />,
            title: "Collaborative Partnership",
            description:
                "We work closely with our clients as strategic partners, maintaining transparency and continuous communication throughout every phase of the project.",
        },
        {
            icon: <FaShieldAlt />,
            title: "Security & Reliability",
            description:
                "Our solutions are built with industry-leading security practices, ensuring your data, systems, and users are protected at all times with robust performance guarantees.",
        },
    ];


    return (
        <MainContainer id="why" className="py-20 relative bg-[#f6f6f6] ">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 ">
                     <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-black mb-4 leading-h2 tracking-tighter break-words">Why Progronics</h2>
                    <TextEffect trigger={show} per='word' as='h3' preset='blur' className="text-[18px] text-slate-700 leading-tight tracking-tight max-w-4xl">
                        Partner with industry-leading developers to build scalable, high-performance digital solutions that empower your business to grow. Our expertise spans web, mobile, and enterprise software tailored to your unique goals. From concept to launch, we ensure reliability, innovation, and lasting value in every project.
                    </TextEffect>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {whyChoose.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-2xl text-black">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-700 leading-h2 tracking-tighter">{item.title}</h3>
                            <p className="text-muted-foreground leading-tight tracking-tight">{item.description}</p>
                        </div>
                       
                    ))}
                </div>
            </div>
        </MainContainer>
    )
}