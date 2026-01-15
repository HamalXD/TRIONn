"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  number: string;
  label: string;
  color: string;
  hoverColor: string;
}

const cardData: CardData[] = [
  {
    number: "220+",
    label: "Projects Delivered",
    color: "bg-[#284C61]",
    hoverColor: "hover:bg-[#3A6783]",
  },
  {
    number: "12+",
    label: "Years Experience",
    color: "bg-[#1E2342]",
    hoverColor: "hover:bg-[#242B54]",
  },
  {
    number: "100+",
    label: "Global Clients",
    color: "bg-[#016254]",
    hoverColor: "hover:bg-[#01846F]",
  },
  {
    number: "17+",
    label: "Awards Won",
    color: "bg-[#854515]",
    hoverColor: "hover:bg-[#A45B20]",
  },
];

const AwardCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".award-card");

      cards.forEach((card, index) => {
        const fromLeft = index % 2 === 0;

        gsap.fromTo(
          card,
          {
            x: fromLeft ? -200 : 200,
            rotation: fromLeft ? -6 : 6,
            opacity: 0,
          },
          {
            x: 0,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 0.3,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-x-hidden">
      <div
        ref={containerRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-20 px-20"
      >
        {cardData.map((item, index) => (
          <div key={index} className="flex items-stretch">
            <div
              className={`award-card flex flex-col justify-between relative text-white rounded-3xl px-12 py-16 min-h-[220px] w-full transition-colors duration-300 cursor-pointer ${item.color} ${item.hoverColor}`}
            >
              <div className="absolute top-8 left-12">
                <span className="text-5xl md:text-6xl font-bold">
                  {item.number}
                </span>
              </div>

              <div className="absolute bottom-8 right-12 text-right">
                <span className="text-xl md:text-2xl font-medium">
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardCards;
