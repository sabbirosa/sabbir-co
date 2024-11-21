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

const TechStacks: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  express: SiExpress,
  nodejs: SiNodedotjs,
  flask: SiFlask,
  tailwindcss: SiTailwindcss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  mongodb: SiMongodb,
  docker: SiDocker,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  java: FaJava,
  bootstrap: SiBootstrap,
  html: SiHtml5,
  css: SiCss3,
  python: SiPython,
};

export default TechStacks;
