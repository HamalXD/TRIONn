"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    gsap.to(menuRef.current, {
      y: open ? "0%" : "-100%",
      duration: 0.8,
      ease: "power3.inOut",
    });
  }, [open]);

  return (
    <>
      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col gap-1.5"
        aria-label="Open menu"
      >
        <span className="h-[2px] w-6 bg-white" />
        <span className="h-[2px] w-6 bg-white" />
        <span className="h-[2px] w-6 bg-white" />
      </button>

      {/* FULLSCREEN MENU */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 z-50 h-screen w-full -translate-y-full bg-black px-8 pt-28"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-8 text-3xl font-semibold text-white">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </>
  );
}
