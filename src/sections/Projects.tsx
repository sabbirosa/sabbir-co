import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StackIcons from "@/components/StackIcons";
import Projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { LiaCodeBranchSolid } from "react-icons/lia";

const portfolioProjects = Projects;

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          {...{
            title: "Featured Projects",
            eyebrow: "Real-world Results",
            description:
              "Dive into a world of innovation. Explore how ideas came to life through my craft.",
          }}
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="sticky top-0"
              style={{
                top: `calc(64px + ${index * 40}px`,
              }}
            >
              <Card
                key={index}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
              >
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
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
