"use client";

import { default as TechStacks } from "@/data/stacks";

const techStackIcons = TechStacks;

interface StackIconsProps {
  stack: string[];
}

export default function StackIcons({ stack }: StackIconsProps) {
  return (
    <div className="relative flex items-center">
      {stack.map((tech, index) => {
        const Icon = techStackIcons[tech];
        return (
          <div
            key={index}
            className={`absolute z-[${stack.length - index}]`}
            style={{
              transform: `translateX(${index * 80}%)`,
            }}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              {Icon ? (
                <Icon className="text-white/70 w-6 h-6" />
              ) : (
                <span className="text-red-500 font-bold">?</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
