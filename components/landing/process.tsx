import { useEffect, useState } from "react";
import FlowingMenu from "../FlowingMenu";
import MainContainer from "../main-container";
import { TextEffect } from "../ui/text-effect";


export default function Process({active = false} : {active : boolean}) {

     const [show, setShow] = useState(false)
      useEffect(()=>{
      if(!show && active) setShow(true)
     },[active])

    const processSteps = [
        { link: '#', text: "Discovery", description: "Understanding requirements and project scope" },
        { link: '#', text: "Planning", description: "Defining architecture, tech stack, and timelines" },
        { link: '#', text: "Design", description: "Creating UI/UX and system design prototypes" },
        { link: '#', text: "Development", description: "Coding and implementing features iteratively" },
        { link: '#', text: "Testing", description: "Quality assurance, bug fixing, and optimization" },
        { link: '#', text: "Deployment", description: "Launching the product to production" },
        { link: '#', text: "Maintenance", description: "Ongoing support, updates, and performance monitoring" },
    ];

    return (
        <MainContainer id="process" className="py-20 relative">
         <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 ">

                     <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">Development Process</h2>
                    <TextEffect trigger={show} per='word' as='h3' preset='blur' className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
                        From concept to deployment, we deliver end-to-end solutions that transform ideas into fully functional, scalable, and innovative digital products tailored to your business needs. Our agile approach ensures timely delivery, seamless user experiences, and long-term value for your organization.
                    </TextEffect>


                </div>


               
            </div>
            <div style={{ height: '500px', position: 'relative' }}>
                <FlowingMenu items={processSteps} />
            </div>
             
        </MainContainer>
    )
}