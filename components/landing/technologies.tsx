import { FaAws } from "react-icons/fa6";
import LogoLoop from "../LogoLoop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiFirebase, SiSupabase, SiPostgresql, SiDocker, SiVercel, SiGithub } from 'react-icons/si';
import MainContainer from "../main-container";
import Stats from "./stats";
import CountUp from "../CountUp";


export default function Technologies() {

    const techLogos = [
        // --- Frontend & Mobile ---
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiReact />, title: "React Native", href: "https://reactnative.dev" },

        // --- Backend & Databases ---
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
        { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
        { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
        { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },

        // --- DevOps / Cloud / Deployment ---
        { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
        { node: <FaAws />, title: "AWS", href: "https://aws.amazon.com" },
        { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
        { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    ];

    return (
        <MainContainer id="technologies" className="py-20 relative pt-0">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 ">
                    <h2 className="text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter">Technologies & Statistics</h2>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { number: 100, label: "AI Projects", additional: "+" },
                        { number: 50, label: "Enterprise Clients", additional: "+" },
                        { number: 100, label: "Uptime", additional: "%" },
                        { number: 24, label: "Support", additional: "/7" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center "
                        >
                            <div className="text-5xl font-black bg-linear-to-r from-primary to-accent text-transparent bg-clip-text mb-2 flex justify-center">
                                <CountUp
                                    from={0}
                                    to={stat.number}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text text-center"
                                />
                                <div>{stat.additional}</div>
                            </div>

                            <p className="text-slate-300 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%', }} className="mt-20">
                <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="left"
                    logoHeight={48}
                    gap={100}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    ariaLabel="Technology partners"
                />
            </div>

        </MainContainer>
    )
} 