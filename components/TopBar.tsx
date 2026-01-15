"use client";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full px-6 py-5">
        <span className="uppercase text-white font-semibold tracking-widest">
          Trionn
        </span>

        <Menu />
      </div>
    </header>
  );
};

export default TopBar;
