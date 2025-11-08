import MainContainer from "../main-container"
import Noise from "../Noise";
import SpotlightCard from "../SpotlightCard"

import { FaBrain, FaCogs, FaProjectDiagram, FaTrophy } from 'react-icons/fa';


export default function Why() {

    const whyChoose = [
        {
            icon: <FaBrain />,
            title: "Cutting-edge Expertise",
            description: "Masters of modern tech stacks and AI/ML architectures.",
        },
        {
            icon: <FaCogs />,
            title: "Customized Solutions",
            description: "Tailored approaches for unique business challenges.",
        },
        {
            icon: <FaProjectDiagram />,
            title: "End-to-End Services",
            description: "From concept through deployment and beyond.",
        },
        {
            icon: <FaTrophy />,
            title: "Proven Track Record",
            description: "Delivered 100+ projects successfully.",
        },
    ];

    return (
        <MainContainer id="why" className="py-20 relative bg-[#f6f6f6] pt-0">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 ">
                    <h2 className="text-[80px] font-bold text-black mb-4 leading-h2 tracking-tighter">Why Progronics</h2>
                    <p className="text-[20px] text-slate-700 leading-tight tracking-tight max-w-4xl">
                        Partner with AI innovation leaders to transform your business, automate workflows, and unlock new opportunities for growth and efficiency.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {whyChoose.map((item, index) => (
                        <SpotlightCard
                            key={index}
                            spotlightColor="rgba(255, 94, 87, 0.2)"
                            className="card-spotlight"
                        >

                            <div className="mb-4 text-2xl text-[#f6f6f6]">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-[#f6f6f6] leading-h2 tracking-tighter mb-2">{item.title}</h3>

                            <p className="text-slate-300 leading-tight tracking-tight">{item.description}</p>
                            <Noise
                                patternSize={250}
                                patternScaleX={1}
                                patternScaleY={1}
                                patternRefreshInterval={2}
                                patternAlpha={15}
                            />
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </MainContainer>
    )
}