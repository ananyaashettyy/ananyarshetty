// Import local images from assets
import FlavorsOfCoast from "../assets/Projects/flavors-of-coast.png";
import CleanSkinCompass from "../assets/Projects/clearskin-compass.png";
import NetworkMonitoringDashboard from "../assets/Projects/Network-Monitoring-Dashboard.png"
import TextToHandwriting from "../assets/Projects/text-to-handwriting.png"
import PaperImage from "../components/ui/Achievements/paper.jpg";
import AIOpsPlatform from "../assets/Projects/AI-Powered IT Operations & Monitoring Platform.png";
import ConferenceImage1 from "../components/ui/Achievements/conf1.jpg";
import ConferenceImage2 from "../components/ui/Achievements/conf2.jpg";
import InctureLogo from "../components/Experience/incture.png";
import RdlLogo from "../components/Experience/RDL.jpg";
import CognizantLogo from "../components/Experience/Cognizant.png";

export const mockProjects = [
  {
  id: 1,
  title: "Flavors Of Coast",
  description: "Recipe app for Mangalorean cuisine built with React and Node.js",
  image: FlavorsOfCoast,
  technologies: ["React", "Node.js", "Multer", "Express", "CSS3"],
  github: "https://github.com/ananyaashettyy/Flavors-of-Coast",
  demo: "https://flavors-of-coast.vercel.app/",
  features: [
    "25+ Recipe Categories with 200+ recipes",
    "🟢 Veg and 🔴 Non-Veg visual indicators",
    "Image uploads for each recipe",
    "Detailed recipe pages (ingredients, steps, serving tips)",
    "Admin Panel for adding & managing recipes"
  ],
  details:
    "Flavors of Coast is a modern, full-stack web application that combines React frontend with a Node.js backend. It leverages Multer for image uploads and provides a responsive, user-friendly interface. The project showcases practical full-stack development skills, including state management, API integration, and admin controls for content management."
},

  {
    id: 2,
    title: "ClearSkin Compass",
    description: "ClearSkin Compass – an AI-driven skin health app with image analysis, smart recommendations, and Dr. SkinBot chatbot.",
    image: CleanSkinCompass,
    technologies: ["React", "FastAPI", "Python", "Tailwind CSS", "MongoDB", "Axios", "shadcn/ui", "lucide-react icons", "Pillow", "emergentintegrations"],
    github: "https://github.com/ananyaashettyy/Clearskin-Compass",
    demo: "https://clearskin-compass.vercel.app/",
    features: [
      "Full-stack AI-powered skincare web application",
    "Upload skin images for AI-powered condition prediction",
    "Get prevention tips, medicines, and product recommendations",
    "Chat with Dr. SkinBot, an AI-powered dermatology chatbot",
    "View prediction  and recommendations in an interactive UI",
    "Use a medical-themed professional interface",
    ],
    details: "ClearSkin Compass is a comprehensive dermatology companion web application. Users can upload skin images for AI analysis, receive personalized recommendations for skin care, medicines, and preventive measures, and interact with Dr. SkinBot, an AI-driven dermatology chatbot. The frontend is built with React 19, Tailwind CSS, and shadcn/ui components, while the backend uses FastAPI with MongoDB for data management. The project demonstrates full-stack development skills, AI integration for image analysis, and building an interactive, user-friendly medical interface."
  },
  {
    id: 3,
    title: "Network Monitoring Dashboard",
    description: "A Next.js-based dashboard to monitor multiple websites in real-time, displaying latency, HTTP status, response size, and more, with live charts and dark/light theme support.",
    image: NetworkMonitoringDashboard ,
    technologies: ["Next.js", "React.js", "Chart.js", "Vercel", "CSS"],
    github: "https://github.com/ananyaashettyy/Network-Monitoring-Dashboard",
    demo: "https://network-monitoring-dashboard.vercel.app/",
   features: [
      "Monitor multiple URLs in real-time",
      "Displays latency, HTTP status, and response size",
      "Live charts showing latency trends per URL",
      "Remove or reset monitored URLs",
      "Dark/Light theme toggle",
      "Browser notifications for website downtime"
    ],
    details: "This project demonstrates a practical network monitoring tool built with Next.js. Users can monitor multiple websites, view detailed metrics like latency, HTTP status codes, and response size, and track trends over time via dynamic charts. The project uses Vercel serverless API routes, making it fully deployable online and ideal for showcasing real-time web application skills."
},
{
  id: 4,
  title: "Text-to-Handwriting Web App",
  description: "A web application that converts typed or pasted text into customizable handwritten-style output with font selection, colors, spacing, paper backgrounds, and downloadable formats.",
  image: TextToHandwriting,
  technologies: ["HTML", "CSS", "JavaScript", "html2canvas", "jsPDF", "Google Fonts"],
  github: "https://github.com/ananyaashettyy/text-to-handwriting",
  demo: "https://text-to-handwriting-delta.vercel.app/",
  features: [
    "Multiple handwriting fonts and custom font upload",
    "Font size, ink color, line spacing, letter spacing, and shadow effects",
    "Upload paper backgrounds and select page size",
    "Real-time handwriting preview",
    "Download output as PNG, JPG"
  ],
  details: "A full-featured Text-to-Handwriting web app built with HTML, CSS, and JavaScript. It allows users to generate realistic handwritten text with customizable styling options, paper backgrounds, and multiple download formats. This project highlights expertise in frontend development, DOM manipulation, and working with libraries like html2canvas and jsPDF."
},
{
  id: 5,
  title: "AI-Powered IT Operations & AIOps Platform",
  description:
    "An intelligent IT Operations and AIOps platform that monitors infrastructure, detects anomalies, generates alerts, manages incidents, and visualizes system health through a centralized React dashboard.",
  image: AIOpsPlatform,
  technologies: [
    "Python",
    "FastAPI",
    "React.js",
    "MySQL",
    "Machine Learning",
    "Scikit-learn",
    "Isolation Forest",
    "psutil",
    "REST APIs",
    "Monitoring & Observability"
  ],
  github: "https://github.com/ananyaashettyy/aiops-it-operations-platform",
  demo: "",
  features: [
    "Real-time CPU, memory, disk, and network monitoring",
    "Threshold-based alert detection",
    "Incident creation and management",
    "MySQL-based telemetry persistence",
    "Machine-learning anomaly detection",
    "Historical infrastructure analytics",
    "React-based monitoring dashboard",
    "REST APIs using FastAPI"
  ],
  details:
    "An intelligent IT Operations and AIOps platform built to monitor infrastructure health and assist with incident detection and analysis. The platform uses Python and psutil for system monitoring, FastAPI for REST APIs, MySQL for telemetry and incident persistence, and React.js for the monitoring dashboard. Machine-learning-based anomaly detection using Isolation Forest helps identify unusual infrastructure behavior. The project is designed to evolve toward Generative AI, cloud monitoring, ITSM integrations, and automated remediation."
},
];

export const mockAchievements = [
  {
    id: 1,
    title: "Published Research Paper",
    designation: "Research Publication",
    organization: "IEEE 2026 Conference AIDE, NITTE",
    date: "Published",
    description: "Pleased to share that my research paper, Intelligent Pattern Analysis and Criminal Profiling, has been accepted and published at the IEEE 2026 Conference AIDE, NITTE.",
    image: PaperImage,
    link: "https://ieeexplore.ieee.org/document/11544661",
  },
  {
    id: 2,
    title: "Conference Presentation",
    designation: "IEEE Conference",
    organization: "IEEE 2026 Conference AIDE, NITTE",
    date: "Feb 4 - 7, 2026",
    description: "Presented my conference paper at the IEEE 2026 Conference AIDE (NITTE), delivering an oral presentation on Intelligent Pattern Analysis and Criminal Profiling.",
    image: ConferenceImage1,
    images: [ConferenceImage1, ConferenceImage2],
  },
];

export const mockExperience = [
  {
    id: 1,
    title: "React Developer Trainee",
    company: "Incture Technologies",
    location: "Mangalore, Karnataka",
    startDate: "Jul 2025",
    endDate: "Aug 2025",
    duration: "2 months",
    logo: InctureLogo,
    description: "Worked on modern frontend development and UI/UX improvements while building responsive React interfaces.",
    technologies: ["React.js", "Frontend Development", "UI/UX", "Testing", "Debugging"],
    achievements: [
      "Developed responsive user interfaces in React.js and partnered on UI/UX improvements across the product.",
      "Performed testing and debugging to ensure functional, reliable frontend releases while ramping up on modern frontend development practices."
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "RDL Technologies Pvt Ltd",
    location: "Mangalore, Karnataka",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    duration: "4 months",
    logo: RdlLogo,
    description: "Built and maintained full-stack web applications with a focus on backend integration, APIs, authentication, and performance improvements.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    achievements: [
      "Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built REST APIs, integrated databases, implemented authentication modules, and optimized application performance through targeted bug fixes."
    ]
  },
  {
    id: 3,
    title: "Programmer Analyst Apprentice",
    company: "Cognizant",
    location: "Chennai, Tamil Nadu",
    startDate: "Apr 2026",
    endDate: "Present",
    duration: "Current",
    logo: CognizantLogo,
    description: "Gained hands-on exposure to infrastructure, cloud, networking, and enterprise operations while exploring modern cloud-native and AI technologies.",
    technologies: ["Windows Server 2022", "Linux", "Networking", "MySQL", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "IaC", "ITSM", "ServiceNow", "Scripting", "AIOps", "Azure AI Foundry", "Google Vertex AI", "LangChain", "Agentic AI"],
    achievements: [
      "Gained hands-on exposure to Windows Server 2022, Linux, networking, MySQL, cloud computing, and cybersecurity fundamentals.",
      "Worked with AWS, Microsoft Azure, GCP, Docker, Kubernetes, Terraform, Infrastructure as Code (IaC), and cloud-native technologies.",
      "Explored Generative AI, LLMs, LangChain, Agentic AI, Azure AI Foundry, Google Vertex AI, and AIOps for enterprise use cases.",
      "Developed understanding of ITSM, ServiceNow, Service Desk, incident and change management, monitoring, observability, and microservices."
    ]
  },
];