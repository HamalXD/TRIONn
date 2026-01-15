import { useTheme } from "next-themes";
import React from "react";

type ButtonProps = {
  text: string;
  onCLick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ text, onCLick }: ButtonProps) => {
  return (
    <button
      onClick={onCLick}
      className="rounded-3xl border border-[#e0eeee] px-6 py-3 text-sm text-[#e0eeee]"
    >
      {text}
    </button>
  );
};

export default Button;
