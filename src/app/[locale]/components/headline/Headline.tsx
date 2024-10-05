import React from "react";
import Menu from "../Menu";
import RequestBtn from "./RequestBtn";
import Logo from "../Logo";

import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

const Headline = () => {
  return (
    <div className="bg-background">
      <div className="flex items-center  text-primary  justify-between p-5 max-w-screen-2xl m-auto ">
        <div className="flex items-center ">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <Menu />
        </div>
        <div className="flex flex-row items-center space-x-5">
          <RequestBtn />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Headline;
