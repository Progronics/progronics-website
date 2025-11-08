
import { Brain, Cpu, Network, Rocket } from "lucide-react"
import MagicBento from "../MagicBento"
import MainContainer from "../main-container"

export default function Feature() {
  const features = [
    {
      color: '#060010',
      title: 'AI-Powered',
      description: 'Machine learning at the core of every solution — enabling smarter decision-making, predictive analytics, and adaptive systems that continuously learn and improve over time.',
      label: 'Intelligence',
      img: '/images/feature/ai.png',
    },
    {
      color: '#060010',
      title: 'High Performance',
      description: 'Lightning-fast processing with optimized algorithms that handle complex computations efficiently, ensuring seamless user experiences and minimal latency under any load.',
      label: 'Speed',
      img: '/images/feature/performance.png',
    },
    {
      color: '#060010',
      title: 'Scalable',
      description: 'Built to grow with your business — effortlessly handle increasing traffic, data, and users without compromising reliability or performance, thanks to our modular architecture.',
      label: 'Growth',
      img: '/images/feature/growth.png',
    },
    {
      color: '#060010',
      title: 'Intelligent Systems',
      description: 'An interconnected ecosystem that ensures seamless integration between tools, platforms, and APIs — delivering unified workflows and real-time data synchronization.',
      label: 'Integration',
      img: '/images/feature/intelligent.png',
    },
    {
      color: '#060010',
      title: 'Automation',
      description: 'Streamline complex workflows, reduce manual effort, and boost productivity through intelligent automation powered by AI-driven logic and process orchestration.',
      label: 'Efficiency',
      img: '/images/feature/automation.png',
    },
    {
      color: '#060010',
      title: 'Security',
      description: 'Enterprise-grade protection for your data and systems with advanced encryption, access control, and continuous monitoring to prevent vulnerabilities and threats.',
      label: 'Protection',
      img: '/images/feature/security.png',
    },

  ]

  return (
    <MainContainer id="features" className="py-20 relative bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 ">
          <h2 className="text-[80px] font-bold text-black mb-4 leading-h2 tracking-tighter ">AI-Powered Capabilities</h2>
          <p className="text-[20px] text-slate-700 leading-tight tracking-tight max-w-4xl">
            Next-generation features for modern enterprises, designed to accelerate productivity, streamline operations, and drive innovation across teams and departments.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">

          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
            cardData={features}
          />
        </div>

      </div>
    </MainContainer>
  )
}