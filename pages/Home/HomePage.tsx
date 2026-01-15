"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const videoSlotRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      !pageRef.current ||
      !contentRef.current ||
      !buttonsRef.current ||
      !videoSlotRef.current ||
      !videoWrapRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const getSlotMetrics = () => {
        const rect = videoSlotRef.current!.getBoundingClientRect();
        return {
          cx: rect.left + rect.width / 2,
          cy: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
        };
      };

      gsap.to([contentRef.current, buttonsRef.current], {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
        },
      });

      gsap.fromTo(
        videoWrapRef.current,
        {
          scale: 1,
          width: () => getSlotMetrics().width,
          height: () => getSlotMetrics().height,
          borderRadius: 16,
          position: "fixed",
          top: () => getSlotMetrics().cy,
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          transformOrigin: "50% 50%",
          zIndex: 0,
        },
        {
          // Cap size at ~70% of the viewport
          scale: 1,
          width: "70vw",
          height: "min(70vh, 70vw)",
          borderRadius: 0,
          position: "fixed",
          top: () => getSlotMetrics().cy + 80,
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={pageRef}
        className="flex flex-col px-6 min-h-screen h-screen w-full relative"
      >
        <div
          ref={contentRef}
          className="flex flex-col items-center justify-center uppercase flex-1 z-10"
        >
          <span className="text-center pb-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight md:leading-snug">
            ROAR IN THE
            <br />
            digital wilderness.
          </span>
          <span className="text-center text-xs sm:text-sm md:text-base">
            We roar with success, delivering the TRIONN®
            <br className="hidden sm:block" /> through versatile design,
            branding and the latest
            <br className="hidden sm:block" /> tech development to companies.
          </span>
        </div>

        <div
          ref={buttonsRef}
          className="flex justify-between items-center relative z-10"
        >
          <Button text="Click Me" />
          <Button text="Click Me" />
        </div>

        <div
          ref={videoSlotRef}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 w-[min(420px,80vw)] aspect-video"
        >
          <div ref={videoWrapRef} className="w-full h-full overflow-visible">
            <video
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
        </div>
      </div>

      {/* Extra scroll space */}
      <div className="h-screen" />
    </>
  );
};

export default HomePage;
