import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";

const Projects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    liveLink: "https://youtu.be/4k7IdSLxh6w", // Optional
    sourceCode: "https://github.com/acme/dark-saas", // Optional
    image: darkSaasLandingPage,
    stack: ["react", "tailwindcss", "flask"],
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    liveLink: "https://youtu.be/7hi5zwO75yc", // Optional
    sourceCode: null, // No source code link
    image: lightSaasLandingPage,
    stack: ["react", "tailwindcss", "nextjs"],
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    liveLink: null, // No live link
    sourceCode: "https://github.com/quantum/ai-startup", // Optional
    image: aiStartupLandingPage,
    stack: ["react", "tailwindcss", "nodejs", "express"],
  },
];

export default Projects;
