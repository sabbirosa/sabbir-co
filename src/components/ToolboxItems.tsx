import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export default function ToolboxItems({
  toolboxItems,
  className,
  itemsWrapperClassName,
}: {
  toolboxItems: { name: string; icon: React.ElementType }[];
  className?: string;
  itemsWrapperClassName?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6",
          itemsWrapperClassName
        )}
      >
        {[
          new Array(2).fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {toolboxItems.map((item) => (
                <div
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                  key={item.name}
                >
                  <span>
                    <>
                      <item.icon className="size-10 fill-[url(#tech-icon-gradient)] opacity-80" />
                      <svg className="size-0 absolute">
                        <linearGradient id="tech-icon-gradient">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#6366F1" />
                        </linearGradient>
                      </svg>
                    </>
                  </span>
                  <span className="font-semibold">{item.name}</span>
                </div>
              ))}
            </Fragment>
          )),
        ]}
      </div>
    </div>
  );
}
