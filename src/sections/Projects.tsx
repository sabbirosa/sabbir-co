import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import grainImage from "@/assets/images/grain.jpg";
import StackIcons from "@/components/StackIcons";
import Projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { LiaCodeBranchSolid } from "react-icons/lia";

const portfolioProjects = Projects;

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-center text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I&apos;ve transformed concepts into engaging digital
          experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-l from-purple-500 via-indigo-500 to-blue-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={index}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Stack Icons */}
                  <div className="my-12">
                    <StackIcons stack={project.stack} />
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    {/* Optional Links */}
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        className="bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold inline-flex items-center gap-2"
                      >
                        <span>Live Link</span>
                        <ArrowUpRight className="size-4" />
                      </Link>
                    )}
                    {project.sourceCode && (
                      <Link
                        href={project.sourceCode}
                        className="bg-gray-700 text-white h-12 px-6 rounded-xl font-semibold inline-flex items-center gap-2"
                      >
                        <span>Source Code</span>
                        <LiaCodeBranchSolid className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
