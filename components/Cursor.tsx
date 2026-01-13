"use client";

import { gsap } from "gsap";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Cursor = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      gsap.to("#cursor", {
        x: x - 10,
        y: y - 10,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const bgColor = mounted && theme === "dark" ? "bg-[#e0eeee]" : "bg-black";

  return (
    <div
      id="cursor"
      className={`fixed top-0 left-0 h-5 w-5 ${bgColor} rounded-full z-10 pointer-events-none mix-blend-difference`}
    />
  );
};

export default Cursor;
