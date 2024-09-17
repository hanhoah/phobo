import React from "react";
import { Icon } from "@iconify/react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3 ">
      <div className="flex items-center justify-center w-20 h-20 bg-primary text-white rounded-full">
        <Icon width="3em" icon="lucide-lab:bowl-chopsticks"></Icon>
      </div>
      <h1 className="text-2xl font-bold text-primary">Phobo</h1>
    </div>
  );
};

export default Logo;
