"use client";

import animationData from "@/data/confetti.json";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import Lottie from "react-lottie";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "hello@sabbir.co";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-20"
    >
      <div className="container relative z-20">
        <div className="bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 text-gray-100/90 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-repeat"></div>

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
            <div className="relative mt-5">
              {/* Lottie animation container */}
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={120}
                  width={120}
                  isStopped={!copied}
                />
              </div>

              <button
                onClick={handleCopy}
                className="relative inline-flex h-12 overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="relative inline-flex h-full items-center justify-center rounded-xl bg-indigo-900 px-6 py-1 text-white hover:bg-indigo-800 gap-2 transition-all duration-200 group-hover:scale-[0.98]">
                  <span className="font-semibold whitespace-nowrap">
                    {copied ? "Email Copied!" : "Copy Email"}
                  </span>
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
