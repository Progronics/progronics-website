import { useLocale } from "@/store/LocaleContext";
import FlowingMenu from "../FlowingMenu";
import MainContainer from "../main-container";


export default function Process() {
const { dict } = useLocale()

 if (!dict) {
    return (
      <div>Loading...</div>
    )
  }
    return (
        <MainContainer id="process" className="py-20 relative">
         <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 ">
                     <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">{dict.process_section.title}</h2>
                    <div className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
                       {dict.process_section.description}
                    </div>
                </div>               
            </div>
            <div style={{ height: '500px', position: 'relative' }}>
                <FlowingMenu items={dict.process_steps.map((item)=>({...item, link : "#"}))} />
            </div>
             
        </MainContainer>
    )
}