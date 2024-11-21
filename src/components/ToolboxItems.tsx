import { twMerge } from "tailwind-merge";

export default function ToolboxItems({
  toolboxItems,
  className,
}: {
  toolboxItems: { name: string; icon: React.ElementType }[];
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className="flex flex-none py-0.5 gap-6">
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
                    {/* <stop offset="0%" stopColor="#A855F7" /> */}
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </svg>
              </>
            </span>
            <span className="font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
