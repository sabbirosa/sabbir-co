import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import ClientTestimonials from "@/data/testimonials";
import Image from "next/image";
import { Fragment } from "react";

const testimonials = ClientTestimonials;

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          {...{
            title: "What Clients Say About Me",
            eyebrow: "Happy Clients",
            description:
              "Don't just take my word for it. See what my clients have to say about me.",
          }}
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="p-6 max-w-xs md:max-w-md md:p-8 hover:-translate-y-1 transition duration-300 cursor-pointer"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}{" "}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
