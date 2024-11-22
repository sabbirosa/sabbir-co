import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-20"
    >
      <div className="container relative z-20">
        <div className="bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 text-gray-100/90 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          {/* Background with reset z-index */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: `url(${grainImage.src})`, zIndex: -1 }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-20">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <Link
                href="mailto:hello@sabbir.co"
                className="text-white bg-indigo-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 relative z-30"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
