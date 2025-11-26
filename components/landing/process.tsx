import { processSteps } from "@/data/constants";
import FlowingMenu from "../FlowingMenu";
import MainContainer from "../main-container";


export default function Process() {

    return (
        <MainContainer id="process" className="py-20 relative">
         <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 ">
                     <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">Development Process</h2>
                    <div className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
                        From concept to deployment, we deliver end-to-end solutions that transform ideas into fully functional, scalable, and innovative digital products tailored to your business needs. Our agile approach ensures timely delivery, seamless user experiences, and long-term value for your organization.
                    </div>
                </div>               
            </div>
            <div style={{ height: '500px', position: 'relative' }}>
                <FlowingMenu items={processSteps} />
            </div>
             
        </MainContainer>
    )
}