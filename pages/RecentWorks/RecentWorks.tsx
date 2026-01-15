"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

const RecentWorks = () => {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          x: i % 2 === 0 ? "-100vw" : "100vw",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="px-6 mt-0 md:mt-48 overflow-x-hidden">
      <div className="relative flex flex-col md:flex-row md:items-end md:justify-between mb-10 pt-20 md:pt-52 gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-4xl sm:text-6xl md:text-9xl font-semibold leading-tight md:leading-none">
            Recent <br className="hidden sm:block" /> Work
          </span>
          <span className="text-base sm:text-lg md:text-2xl">
            In the creative wilderness,
            <br className="hidden sm:block" /> clients find our work truly
            <br className="hidden sm:block" /> beloved.
          </span>
        </div>
        <div className="mt-6 md:mt-0 md:absolute md:bottom-0 md:right-0">
          <Button text="Explore Work" />
        </div>
      </div>
      <div className="flex flex-col gap-32 py-24">
        {[1, 2, 3].map((num, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
            className="flex w-full items-center justify-between gap-10 flex-col md:flex-row"
          >
            <div
              className={`shrink-0 max-w-[900px] w-full md:w-1/2 flex justify-start ${
                i % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src={`/image-${num}.png`}
                alt="work"
                width={900}
                height={550}
                className="rounded-2xl w-full h-auto"
              />
            </div>

            <div
              className={`w-full md:w-1/2 max-w-md ${
                i % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3">Project {num}</h3>
              <p className="text-sm md:text-base mb-5 text-neutral-500">
                Lorem ipsum dolor,
              </p>
              <Button text="View project" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
