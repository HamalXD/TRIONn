"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MovingText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = containerRef.current?.querySelectorAll(".char");
      if (!chars) return;

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 50,
          rotateY: 90,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power4.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="inline-flex overflow-hidden text-5xl font-bold"
    >
      This is a random text
    </div>
  );
}
