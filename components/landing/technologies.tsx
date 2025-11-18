import { FaAws } from "react-icons/fa6";
import { SiCss3, SiDocker, SiExpress, SiFirebase, SiGithub, SiHtml5, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiVercel, SiVite } from 'react-icons/si';
import CountUp from "../CountUp";
import LogoLoop from "../LogoLoop";
import MainContainer from "../main-container";


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
        <MainContainer id="technologies" className="py-20 relative">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 ">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">
                        Technologies & Stats
                    </h2>

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