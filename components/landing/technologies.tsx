import CountUp from "../CountUp";
import MainContainer from "../main-container";
import Integrations from "../ui/integrations";


export default function Technologies() {

    return (
        <MainContainer id="technologies" className="pt-20 relative">
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
                                    className="count-up-text text-center text-primary"
                                />
                                <div className="text-primary">{stat.additional}</div>
                            </div>

                            <p className="text-slate-300 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', width: '100%', }} className="mt-10">
                 <Integrations />
            </div>

        </MainContainer>
    )
} 