import FlowingMenu from "../FlowingMenu"
import MainContainer from "../main-container"
import Noise from "../Noise";
import ScrollVelocity from "../ScrollVelocity"


export default function Process() {

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
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 ">

                    <h2 className="text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter">Development Process</h2>
                    <p className="text-[20px] text-slate-200 leading-tight tracking-tight max-w-4xl">
                        From concept to deployment, we deliver end-to-end solutions that transform ideas into fully functional, scalable, and innovative digital products tailored to your business needs.
                    </p>


                </div>


                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="relative "
                        >
                            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 h-full transition-all duration-300">
                                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                            {index < processSteps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
                            )}
                        </div>
                    ))}
                </div> */}
            </div>

            {/* <ScrollVelocity
                texts={processSteps.map((item, index) => item.title)}
                velocity={100}
                className="custom-scroll-text"
            /> */}

            <div style={{ height: '500px', position: 'relative' }}>
                <FlowingMenu items={processSteps} />
            </div>
        </MainContainer>
    )
}