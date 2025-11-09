"use client"

import CTA from "@/components/landing/cta"
import MainContainer from "@/components/main-container"
import Masonry from "@/components/Masonry"
import { TextEffect } from "@/components/ui/text-effect"

export function PortfolioClient() {

  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const projects = [
    {
      id: "1",
      title: "SENFENG Pakistan CRM",
      description:
        "A full-stack business management web app streamlining team management, customer handling, payments, and task tracking in one platform.",
      img: "/portfolio/senfeng_web.png",
      height: 650,
      category: "Web Development",
      year: "2025",
      technologies: ["Next.js", "Shadcn", "PostgreSql", "Node.js", "Firebase", "Supabase"],
      url: "http://app.senfenglaserpk.com/",
      demoCredentials: {
        user: { email: "ubaidrehman1840@gmail.com", password: "12345678" },
        admin: { email: "m.adeelahsan@hotmail.com", password: "m.adeelahsan" },
      },
      features: [
        "Google login",
        "Firebase authentication",
        "Google maps",
        "Team tracking",
        "Customers & payments",
        "Real-time progress",
        "Role-based dashboards",
      ],
    },
    {
      id: "2",
      title: "SENFENG Mobile",
      description:
        "Manage customers, complaints, commissions, team messaging, site visits, attendance and live location — all in one powerful mobile app.",
      img: "/portfolio/senfeng_mobile.png",
      height: 580,
      category: "Mobile App Development",
      year: "2025",
      technologies: ["React Native", "Expo", "EAS", "Firebase", "Supabase"],
      url: "https://play.google.com/store/apps/details?id=com.octasoft.adcrm&pcampaignid=web_share",
      demoCredentials: {
        user: { email: "ubaidrehman1840@gmail.com", password: "12345678" },
        admin: { email: "m.adeelahsan@hotmail.com", password: "m.adeelahsan" },
      },
      features: ["Attendance", "Live location", "Google login", "Real-time messaging", "Site visits", "Complaints"],
    },
    {
      id: "3",
      title: "TMS Blink Sales",
      description:
        "A web platform tailored for immigration consultants to manage leads, assign tasks, send emails, and track business operations efficiently.",
      img: "/portfolio/tms.png",
      height: 500,
      category: "Web Development",
      year: "2024",
      technologies: ["React", "Typescript", "Node.js", "MySql", "Socket.io"],
      url: "https://tms.blink-sales.com/",
      demoCredentials: {
        admin: { email: "system", password: "serenity" },
      },
      features: ["CRM", "Immigration services", "Leads management", "Facebook leads", "Payment tracking"],
    },
    {
      id: "4",
      title: "SaaS Hospital Management System",
      description: "A scalable SaaS-based hospital management system that automates staff onboarding, patient management, appointments, and insurance workflows.",
      img: "/portfolio/hospital.png",
      height: 720,
      category: "Web Development",
      year: "2024",
      technologies: ["Next.js", "Chakra UI", "PostgreSql", "Stream", "AI", "Firebase"],
      url: "https://hospital-management-theta-nine.vercel.app/",
      demoCredentials: {
        admin: { email: "centrediagnostic@gmail.com", password: "1234qwer" },
        insurance: { email: "cnamgs@gmail.com", password: "1234qwer" },
        doctor: { email: "audrey.kamdeu@gmail.com", password: "1234qwer" },
        frontdesk: { email: "mistral@gmail.com", password: "1234qwer" },
      },
      features: [
        "Consultations",
        "Records",
        "Scheduling",
        "Insurance",
        "Role-based dashboards",
        "AI",
        "SaaS architecture",
      ],
    },
    {
      id: "5",
      title: "Quiz Master",
      description:
        "A thrilling trivia game featuring multiple-choice quizzes, image puzzles, and a spin wheel of fortune — making learning fun and rewarding.",
      img: "/portfolio/quiz.png",
      height: 560,
      category: "Mobile App Development",
      year: "2024",
      technologies: ["React Native", "Supabase", "Firebase", "Typescript"],
      url: "https://play.google.com/store/apps/details?id=com.octasoft.quiz",
      demoCredentials: {
        signup: { email: "youremail@domain.com", password: "yourpassword" },
      },
      features: ["Quiz", "Trivia", "Daily Rewards", "Google Ads", "Wheel of fortune", "Image match puzzles"],
    },
    {
      id: "6",
      title: "Chess Game",
      description:
        "A real-time online multiplayer chess game powered by Firebase and Socket.io, designed for competitive and fun play.",
      img: "/portfolio/chess.png",
      height: 600,
      category: "Game Development",
      year: "2024",
      technologies: ["HTML5", "Node.js", "Firebase", "Socket.io"],
      url: "https://chess-game-f1pi.onrender.com",
      demoCredentials: {
        player1: {
          link: `https://chess-game-f1pi.onrender.com/?roomID=${randomNumber}&playerID=1&isHost=true&time=1`,
        },
        player2: {
          link: `https://chess-game-f1pi.onrender.com/?roomID=${randomNumber}&playerID=2&time=1`,
        },
      },
      features: ["Chess game", "Multiplayer", "Modern stripes", "Animation"],
    },
    {
      id: "7",
      title: "UNO Game",
      description:
        "An online multiplayer UNO card game built using HTML5 and Socket.io, allowing real-time 2–4 player gameplay with modern animations.",
      img: "/portfolio/uno.png",
      height: 580,
      category: "Game Development",
      year: "2024",
      technologies: ["HTML5", "Node.js", "MongoDB", "Socket.io"],
      url: "https://uno-game-d3oe.onrender.com/",
      demoCredentials: {
        player1: {
          link: `https://uno-game-d3oe.onrender.com/?roomID=${randomNumber}&playerID=1&playerName=Player1&numOfPlayers=2&isHost=true`,
        },
        player2: {
          link: `https://uno-game-d3oe.onrender.com/?roomID=${randomNumber}&playerID=2&playerName=Player2`,
        },
      },
      features: ["UNO game", "Multiplayer", "Modern UI", "Animations", "2–4 players"],
    },
    {
      id: "8",
      title: "Sathee",
      description:
        "Sathee is a compassionate platform designed for elderly care, offering video and chat-based companionship, reminders, and real-time alerts for caregivers.",
      img: "/portfolio/sathee.png",
      height: 520,
      category: "Web Development",
      year: "2023",
      technologies: ["Next.js", "Firebase", "Node.js", "Firestore", "Chakra UI"],
      url: "https://caregiver-black.vercel.app/",
      demoCredentials: {
        caregiver: { email: "famu@gmail.com", password: "12345678" },
        elderly: { email: "zainu@gmail.com", password: "12345678" },
      },
      features: ["Health care", "Medical records", "Reminders", "Realtime notification", "Emergency alert system"],
    },
    {
      id: "9",
      title: "Soccer Game",
      description:
        "A fast-paced online multiplayer soccer game powered by Socket.io, featuring smooth animations and responsive real-time controls.",
      img: "/portfolio/soccer.png",
      height: 600,
      category: "Game Development",
      year: "2023",
      technologies: ["HTML5", "Node.js", "Firebase", "Socket.io"],
      url: "https://soccer-game.onrender.com/",
      demoCredentials: {
        player1: {
          link: `https://soccer-game.onrender.com/?roomID=${randomNumber}&playerID=1&playerName=Player1&numOfPlayers=2&isHost=true`,
        },
        player2: {
          link: `https://soccer-game.onrender.com/?roomID=${randomNumber}&playerID=2&playerName=Player2`,
        },
      },
      features: ["Soccer game", "Multiplayer", "Smooth animations", "Realtime gameplay"],
    },
    {
      id: "10",
      title: "Soccer Head Game",
      description:
        "An entertaining online multiplayer soccer head game built in Construct 3D with Socket.io integration for real-time sessions.",
      img: "/portfolio/soccer_head.png",
      height: 560,
      category: "Game Development",
      year: "2023",
      technologies: ["Construct 3D", "HTML5", "Node.js", "Socket.io"],
      url: "https://soccer-head-game.onrender.com",
      demoCredentials: {
        player1: { link: `https://soccer-head-game.onrender.com/?roomname=${randomNumber}&playerid=1` },
        player2: { link: `https://soccer-head-game.onrender.com/?roomname=${randomNumber}&playerid=2` },
      },
      features: ["Soccer head game", "Multiplayer", "Construct 3D physics"],
    },
  ];

  return (

    <MainContainer id="portfolio" className="py-20 relative">

       <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">Recent Projects</h2>
          <TextEffect per='word' as='h3' preset='blur' className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
            Explore case studies of projects we've delivered across various industries.
            Discover how our innovative solutions have empowered businesses to overcome challenges, enhance efficiency, and achieve measurable results.

          </TextEffect>
        </div>
      </div>


      <div className="flex items-center justify-center w-[98vw]">
        <div className="h-[1700px] sm:h-[700px] w-[90vw] self-center">
          <Masonry
            items={projects}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </MainContainer>
  )
}
