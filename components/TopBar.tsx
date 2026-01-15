"use client";

import Menu from "./Menu";
// import ThemeToggle from "./ThemeToggle";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between w-full px-5 py-5 z-50">
      <span>TopBar</span>
      {/* <ThemeToggle /> */}
      <Menu />
    </div>
  );
};

export default TopBar;
