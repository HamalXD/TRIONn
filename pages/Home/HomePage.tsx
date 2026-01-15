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
      const getSlotCenter = () => {
        const rect = videoSlotRef.current!.getBoundingClientRect();
        return {
          cx: rect.left + rect.width / 2,
          cy: rect.top + rect.height / 2,
        };
      };

      // Move text + buttons up together
      gsap.to([contentRef.current, buttonsRef.current], {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
        },
      });

      gsap.fromTo(
        videoWrapRef.current,
        {
          scale: 1,
          width: 420,
          height: 240,
          borderRadius: 16,
          // Use fixed positioning so scroll doesn't move it,
          // and anchor by CENTER so width/height expand equally both sides.
          position: "fixed",
          top: () => getSlotCenter().cy,
          left: () => getSlotCenter().cx,
          xPercent: -50,
          yPercent: -50,
          transformOrigin: "50% 50%",
          zIndex: 0,
        },
        {
          scale: 1.6,
          width: "80vw",
          height: "80vh",
          borderRadius: 0,
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          zIndex: -1, // behind text/buttons
          ease: "none",
          invalidateOnRefresh: true,
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
        {/* TEXT + BUTTONS */}
        <div
          ref={contentRef}
          className="flex flex-col items-center justify-center uppercase flex-1 z-10"
        >
          <span className="text-center text-7xl pb-5">
            ROAR IN THE
            <br />
            digital wilderness.
          </span>
          <span className="text-center text-xs">
            We roar with success, delivering the TRIONN®
            <br /> through versatile design, branding and the latest
            <br /> tech development to companies.
          </span>
        </div>

        {/* BOTTOM ROW */}
        <div
          ref={buttonsRef}
          className="flex justify-between items-center pb-6 relative z-10"
        >
          <Button text="Click Me" />

          {/* VIDEO wrapper */}
          {/* Slot preserves layout; the animated wrapper is fixed-positioned */}
          <div ref={videoSlotRef} className="w-[420px] h-[240px] shrink-0">
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

          <Button text="Click Me" />
        </div>
      </div>

      {/* Extra scroll space */}
      <div className="h-screen" />
    </>
  );
};

export default HomePage;
