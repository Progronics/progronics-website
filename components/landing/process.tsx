import { dict } from "@/lib/constants";
import MainContainer from "../main-container";

import SpotlightCards, { SpotlightItem } from "../kokonutui/spotlight-cards";

import {
    Cloud,
    Code,
    Cpu,
    Database,
    Globe,
    Lock,
    Rocket,
    Shield,
    Zap,
} from "lucide-react";

const DEFAULT_ITEMS = [
    {
        icon: Zap,
        color: "#f59e0b",
    },
    {
        icon: Lock,
        color: "#60a5fa",
    },
    {
        icon: Globe,
        color: "#34d399",
    },
    {
        icon: Code,
        color: "#a78bfa",
    },
    {
        icon: Cpu,
        color: "#38bdf8",
    },
    {
        icon: Cloud,
        color: "#f472b6",
    },
    {
        icon: Shield,
        color: "#22c55e",
    },
    {
        icon: Database,
        color: "#fb7185",
    },
    {
        icon: Rocket,
        color: "#06b6d4",
    },
];


export default function Process() {


    if (!dict) {
        return (
            <div>Loading...</div>
        )
    }

    const item: SpotlightItem[] = dict.process_steps.map((it, i) => {
        return {
            title: it.text,
            description: it.description,
            color: DEFAULT_ITEMS[i]?.color ?? "",
            icon: DEFAULT_ITEMS[i]?.icon ?? null
        }
    })
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
            <div className="px-0 sm:px-6">
                <SpotlightCards items={item} eyebrow="" heading="" className="dark:bg-black" />
            </div>
            {/* <div style={{ height: '500px', position: 'relative' }}>
                <FlowingMenu items={dict.process_steps.map((item)=>({...item, link : "#"}))} />
            </div> */}

        </MainContainer>
    )
}