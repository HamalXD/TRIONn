"use client";

import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";

const TopBar = () => {
  return (
    <div className="fixed flex items-center justify-between w-full px-5 my-5">
      <span>TopBar</span>
      <ThemeToggle />
      <Menu />
    </div>
  );
};

export default TopBar;
