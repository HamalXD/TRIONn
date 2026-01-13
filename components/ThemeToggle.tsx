"use client";

import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded"
    >
      {theme === "dark" ? <CiLight size={20} /> : <LuMoon size={20} />}
    </button>
  );
}
