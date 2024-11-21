import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function HeroOrbit({
  children,
  size,
  rotation,
  orbitDuration,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: number;
  spinDuration?: number;
}>) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(orbitDuration && "animate-spin")}
        style={{
          animationDuration: `${orbitDuration}s`,
        }}
      >
        <div
          className="flex items-start justify-start  "
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(spinDuration && "animate-spin")}
            style={{
              animationDuration: `${spinDuration}s`,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
