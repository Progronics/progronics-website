
const randomNumber = Math.floor(Math.random() * 1000) + 1;
export const projects = [
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

export const services = [
    {
        title: "Software Consultancy",
        link: "/services",
        description:
            "We provide expert guidance to help businesses make informed technology decisions and build scalable digital solutions.",
        steps: [
            "Understand business objectives",
            "Analyze current systems and workflows",
            "Recommend optimal technologies",
            "Create a digital transformation roadmap",
            "Provide ongoing technical support",
        ],
    },
    {
        title: "Web Development",
        link: "/services",
        description:
            "We design and develop fast, responsive, and secure websites tailored to your brand and business needs.",
        steps: [
            "Gather requirements and plan architecture",
            "Design user-friendly interfaces",
            "Develop and integrate backend systems",
            "Test and optimize for performance",
            "Deploy and maintain your website",
        ],
    },
    {
        title: "Mobile App Development",
        link: "/services",
        description:
            "From concept to launch, we create high-performance mobile apps for iOS and Android platforms.",
        steps: [
            "Define app goals and target audience",
            "Design intuitive UI/UX",
            "Develop with modern frameworks",
            "Test across devices and platforms",
            "Publish and support post-launch",
        ],
    },
    {
        title: "Staff Augmentation",
        link: "/services",
        description:
            "We provide skilled developers and dedicated teams to seamlessly integrate with your in-house workforce.",
        steps: [
            "Identify resource requirements",
            "Shortlist qualified professionals",
            "Conduct interviews and onboarding",
            "Integrate with existing teams",
            "Monitor performance and productivity",
        ],
    },
    {
        title: "Branding & Design",
        link: "/services",
        description:
            "Our creative team helps you craft a strong brand identity through impactful visuals and design strategy.",
        steps: [
            "Research brand vision and audience",
            "Design logo and brand assets",
            "Develop color palette and typography",
            "Create marketing materials",
            "Deliver brand style guidelines",
        ],
    },
    {
        title: "Optimization & Support",
        link: "/services",
        description:
            "We enhance system performance, improve SEO, and ensure continuous support to keep your business running smoothly.",
        steps: [
            "Audit system performance",
            "Identify optimization areas",
            "Implement code and server improvements",
            "Monitor performance metrics",
            "Provide 24/7 maintenance support",
        ],
    },
];

export const values = [
  {
    title: "Vision",
    description:
      "To become a global leader in digital innovation, empowering businesses worldwide to achieve their digital transformation goals through cutting-edge technology and world-class talent.",
  },
  {
    title: "Mission",
    description:
      "To simplify technology and make it a powerful tool for growth. We're committed to delivering exceptional solutions that drive real business value for our clients.",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every action and decision. Transparency, honesty, and accountability form the foundation of our relationships with clients, partners, and team members.",
  },
  {
    title: "Innovation",
    description:
      "We continuously challenge the status quo, embracing emerging technologies and creative thinking to craft smarter, faster, and more efficient solutions for tomorrow’s challenges.",
  },
  {
    title: "Collaboration",
    description:
      "We believe success is built through teamwork. By working hand-in-hand with our clients, we create lasting partnerships that foster trust, communication, and mutual growth.",
  },
  {
    title: "Excellence",
    description:
      "We strive for perfection in every project. Our dedication to quality and continuous improvement ensures that we deliver outstanding results that exceed expectations every time.",
  },
];


export const mainLinks = [
    { label: "Home", link: "/", ariaLabel: "Go to home page" },
    { label: "About", link: "/about", ariaLabel: "Go to abount page" },
    { label: "Portfolio", link: "/portfolio", ariaLabel: "Go to portfolio page" },
    { label: "Services", link: "/services", ariaLabel: "Go to portfolio page" },
    { label: "Careers", link: "/careers", ariaLabel: "Go to careers page" },
    { label: "Contact", link: "/contact", ariaLabel: "Go to contact page" },

  ]
