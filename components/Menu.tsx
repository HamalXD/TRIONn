import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="flex px-4 sm:px-6 lg:px-8">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between gap-3 items-center h-16"
      >
        <div className="shrink-0 font-bold text-xl">
          {isOpen ? "Close" : "Menu"}
        </div>

        <button className="focus:outline-none" aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 mt-14 pb-4 flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-2 px-4 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
