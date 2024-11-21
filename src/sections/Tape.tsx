import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Secure",
  "Interactive",
  "Fast",
  "Scalable",
  "Usable",
  "Reliable",
  "Search Optimized",
  "User Friendly",
  "Responsive",
  "Modern",
  "Maintainable",
];

export const TapeSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word, index) => {
              return (
                <div key={index} className="inline-flex gap-4 items-center">
                  <span className="text-gray-100/90 uppercase font-extrabold text-sm">
                    {word}
                  </span>
                  <StarIcon className="size-6 text-gray-100/90 -rotate-12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
