
import { dict } from '@/lib/constants';
import { FaBrain, FaCogs, FaProjectDiagram, FaShieldAlt, FaTrophy } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa6";
import MainContainer from "../main-container";


export default function Why() {




    const why_icons = [
        <FaBrain />, <FaCogs />, <FaProjectDiagram />, <FaTrophy />, <FaUsers />, <FaShieldAlt />
    ]


    if (!dict) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <MainContainer id="why" className="py-20 relative bg-[#f6f6f6] ">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 ">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-black mb-4 leading-h2 tracking-tighter break-words">{dict.why_section.title}</h2>
                    <div className="text-[18px] text-slate-700 leading-tight tracking-tight max-w-4xl">
                        {dict.why_section.description}
                    </div>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {dict.why_cards.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-2xl text-black">
                                {why_icons[index]}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-700 leading-h2 tracking-tighter">{item.title}</h3>
                            <p className="text-muted-foreground leading-tight tracking-tight text-justify">{item.description}</p>
                        </div>

                    ))}
                </div>
            </div>
        </MainContainer>
    )
}