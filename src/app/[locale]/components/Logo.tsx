import React from "react";
import { Icon } from "@iconify/react";
import { Hahmlet } from "next/font/google";

const hahmlet = Hahmlet({
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <div className="flex items-center space-x-3 ">
      <div className="flex items-center justify-center w-20 h-20 bg-primary text-white rounded-full">
        <Icon width="3em" icon="lucide-lab:bowl-chopsticks"></Icon>
      </div>
      <div>
        <h1 className={`text-5xl font-bold text-primary ${hahmlet.className}`}>
          Phở Bò
        </h1>
        <h2 className="text-white -mt-5">[fəːbɔː]</h2>
      </div>
    </div>
  );
};

export default Logo;
