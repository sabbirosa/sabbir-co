import { IconType } from "react-icons";

import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";

const TechStacks: Record<string, { name: string; icon: IconType }> = {
  react: { name: "React", icon: SiReact },
  nextjs: { name: "Next.js", icon: SiNextdotjs },
  express: { name: "Express", icon: SiExpress },
  nodejs: { name: "Node.js", icon: SiNodedotjs },
  flask: { name: "Flask", icon: SiFlask },
  tailwindcss: { name: "Tailwind CSS", icon: SiTailwindcss },
  javascript: { name: "JavaScript", icon: SiJavascript },
  typescript: { name: "TypeScript", icon: SiTypescript },
  mongodb: { name: "MongoDB", icon: SiMongodb },
  docker: { name: "Docker", icon: SiDocker },
  mysql: { name: "MySQL", icon: SiMysql },
  postgresql: { name: "PostgreSQL", icon: SiPostgresql },
  java: { name: "Java", icon: FaJava },
  bootstrap: { name: "Bootstrap", icon: SiBootstrap },
  html: { name: "HTML5", icon: SiHtml5 },
  css: { name: "CSS3", icon: SiCss3 },
  python: { name: "Python", icon: SiPython },
};

export default TechStacks;
