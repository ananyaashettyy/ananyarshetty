// Import local images from assets
import FlavorsOfCoast from "../assets/Projects/flavors-of-coast.png";
import CleanSkinCompass from "../assets/Projects/clearskin-compass.png";
import NetworkMonitoringDashboard from "../assets/Projects/Network-Monitoring-Dashboard.png"
import TextToHandwriting from "../assets/Projects/text-to-handwriting.png"

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
}
];