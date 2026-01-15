"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";

gsap.registerPlugin(Draggable);

const cardData = [
  { number: "220+", label: "Projects Delivered", color: "#284C61" },
  { number: "12+", label: "Years Experience", color: "#1E2342" },
  { number: "100+", label: "Global Clients", color: "#016254" },
  { number: "17+", label: "Awards Won", color: "#854515" },
  { number: "17+", label: "Awards Won", color: "#854515" },
  { number: "17+", label: "Awards Won", color: "#854515" },
  { number: "17+", label: "Awards Won", color: "#854515" },
  { number: "17+", label: "Awards Won", color: "#854515" },
  { number: "17+", label: "Awards Won", color: "#854515" },
];

const DraggableCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;

    const draggable = Draggable.create(el, {
      type: "scrollLeft",
      edgeResistance: 0.85,
      inertia: true,
      cursor: "grab",
      activeCursor: "grabbing",
    });

    return () => {
      if (draggable && draggable[0]) {
        draggable[0].kill();
      }
    };
  }, []);

  return (
    <div className="w-full select-none py-6">
      <div
        ref={scrollRef}
        className="flex flex-row gap-3 md:gap-6 px-3 md:px-8 overflow-x-auto whitespace-nowrap scrollbar-hide"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {cardData.map((item, index) => (
          <div
            key={index}
            className="inline-block w-64 md:w-72 h-56 md:h-88 rounded-3xl p-6 md:p-8 mr-2 last:mr-0 flex flex-col justify-between shadow-lg"
            style={{
              backgroundColor: item.color,
              minWidth: "16rem",
              maxWidth: "18rem",
            }}
          >
            <div className="text-5xl md:text-7xl font-bold text-white">
              {item.number}
            </div>
            <div className="text-lg md:text-xl font-semibold leading-tight text-white">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
};

export default DraggableCards;
