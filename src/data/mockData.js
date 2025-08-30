// Import local images from assets
import FlavorsOfCoast from "../assets/Projects/flavors-of-coast.png";
import CleanSkinCompass from "../assets/Projects/clearskin-compass.png";
import NetworkMonitoringDashboard from "../assets/Projects/Network-Monitoring-Dashboard.png"

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
    title: "AI-Powered Code Assistant",
    description: "Intelligent code completion and review tool using machine learning to help developers write better code faster.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "OpenAI API", "React", "Flask", "PostgreSQL"],
    github: "https://github.com/prerakraja/ai-code-assistant",
    demo: "https://ai-code-assistant-demo.herokuapp.com",
    duration: "3 months",
    features: [
      "Real-time code suggestions and completions",
      "Code quality analysis and recommendations",
      "Multi-language support (Python, JavaScript, Java)",
      "Integration with popular IDEs",
      "Learning from user coding patterns"
    ],
    details: "An innovative tool that leverages AI to enhance developer productivity. The system analyzes code patterns, suggests improvements, and provides intelligent completions. This project showcases my expertise in AI integration, backend development, and creating tools that solve real developer pain points."
  },
  {
    id: 5,
    title: "Smart University Dashboard",
    description: "Comprehensive student management system with grade tracking, course planning, and academic progress visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
    github: "https://github.com/prerakraja/university-dashboard",
    demo: "https://university-dashboard-demo.netlify.app",
    duration: "4 months",
    features: [
      "Grade tracking and GPA calculation",
      "Course schedule management",
      "Academic progress visualization",
      "Assignment deadline reminders",
      "Study group formation tools"
    ],
    details: "Built specifically for university students to manage their academic journey more effectively. The dashboard provides comprehensive tools for tracking grades, managing schedules, and visualizing academic progress. This project demonstrates my ability to understand user needs and create practical solutions for educational environments."
  },
  {
    id: 6,
    title: "Community Recipe Sharing App",
    description: "Mobile-first recipe sharing platform where cooking enthusiasts can discover, share, and rate culinary creations.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions", "Storage"],
    github: "https://github.com/prerakraja/recipe-sharing-app",
    demo: "https://play.google.com/store/apps/recipe-sharing-demo",
    duration: "3 months",
    features: [
      "User-generated recipe content",
      "Photo sharing and editing tools",
      "Rating and review system",
      "Social features and following",
      "Offline recipe access"
    ],
    details: "A mobile application that brings together my passion for cooking and mobile development skills. Users can share recipes with photos, rate dishes, and discover new culinary adventures. The app includes social features that build a community around shared cooking experiences, demonstrating my understanding of both technical implementation and user engagement."
  }
];