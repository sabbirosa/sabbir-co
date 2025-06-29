// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import BUCCMockup from "@/assets/images/projects/bucc-mockup.png";
import CohabitMockup from "@/assets/images/projects/cohabit-mockup.png";
import ProjectRMockup from "@/assets/images/projects/projectr-mockup.png";
import UddyogMockup from "@/assets/images/projects/uddyog-mockup.png";

const Projects = [
  // {
  //   company: "Acme Corp",
  //   year: "2022",
  //   title: "Dark Saas Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   liveLink: "https://youtu.be/4k7IdSLxh6w", // Optional
  //   sourceCode: "https://github.com/acme/dark-saas", // Optional
  //   image: darkSaasLandingPage,
  //   stack: ["react", "tailwindcss", "flask"],
  // },
  // {
  //   company: "Innovative Co",
  //   year: "2021",
  //   title: "Light Saas Landing Page",
  //   results: [
  //     { title: "Boosted sales by 20%" },
  //     { title: "Expanded customer reach by 35%" },
  //     { title: "Increased brand awareness by 15%" },
  //   ],
  //   liveLink: "https://youtu.be/7hi5zwO75yc", // Optional
  //   sourceCode: null, // No source code link
  //   image: lightSaasLandingPage,
  //   stack: ["react", "tailwindcss", "nextjs"],
  // },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   liveLink: null, // No live link
  //   sourceCode: "https://github.com/quantum/ai-startup", // Optional
  //   image: aiStartupLandingPage,
  //   stack: ["react", "tailwindcss", "nodejs", "express"],
  // },
  {
    company: "BUCC",
    year: "2024",
    title: "BUCC Portal",
    description: "A comprehensive portal for BRAC University Computer Club",
    results: [
      { title: "Streamlined event & recruitment workflows for 1500+ members" },
      {
        title:
          "Implemented RFID-based attendance tracking with student ID cards",
      },
      {
        title: "Built role-based dashboards for Governing Body, HR, and Events",
      },
    ],
    liveLink: "https://bracucc.org",
    sourceCode: "https://github.com/sabbirosa/bucc",
    image: BUCCMockup,
    stack: ["nextjs", "react", "mongodb", "mongoose", "tailwindcss"],
  },
  {
    company: "Uddyog",
    year: "2024",
    title: "Uddyog",
    description: "A platform for social development events",
    results: [
      {
        title:
          "Built SPA for social development events with JWT auth & Firebase login",
      },
      {
        title:
          "Implemented event creation, filtering, reviews & participation tracking",
      },
      {
        title:
          "Responsive design, theme toggle, review analytics, newsletter support",
      },
    ],
    liveLink: "https://uddyog.netlify.app",
    sourceCode: "https://github.com/sabbirosa/uddyog-client",
    image: UddyogMockup,
    stack: ["react", "firebase", "mongodb", "tailwindcss", "framer"],
  },
  {
    company: "Cohabit",
    year: "2024",
    title: "Cohabit",
    description:
      "A platform for matching roommates based on location, budget, and lifestyle",
    results: [
      {
        title:
          "SPA for matching roommates based on location, budget, and lifestyle",
      },
      {
        title:
          "Implemented secure auth (email, Google OAuth), protected routes",
      },
      { title: "Includes theme toggle, Swiper gallery, and mobile-first UI" },
    ],
    liveLink: "https://cohabit-sabbirosa.netlify.app",
    sourceCode: "https://github.com/sabbirosa/cohabit-client",
    image: CohabitMockup,
    stack: ["react", "tailwindcss", "firebase"],
  },
  {
    company: "Project R",
    year: "2023",
    title: "Project R",
    description:
      "A donation management system with role-based dashboards and reporting",
    results: [
      {
        title:
          "Built donation system with dynamic navbar and role-based dashboards",
      },
      {
        title:
          "Implemented MySQL-backed REST API, auth, donation tracking, reporting",
      },
      { title: "Deployed Flask app and MySQL setup for easy local/remote run" },
    ],
    liveLink: "https://projectr.sabbir.cloud",
    sourceCode: "https://github.com/sabbirosa/project-r",
    image: ProjectRMockup,
    stack: ["flask", "mysql", "bootstrap", "jquery", "html", "css"],
  },
];

export default Projects;
