import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/sabbirosa",
  },
  {
    name: "GitHub",
    link: "https://www.github.com/sabbirosa",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sabbirosa",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/sabbirosa",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-purple-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} | All rights reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {socials.map((social) => (
              <Link
                className="inline-flex items-center gap-1.5"
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-semibold">{social.name}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
