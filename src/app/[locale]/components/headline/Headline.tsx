import React from "react";
import Menu from "../Menu";
import RequestBtn from "./RequestBtn";
import Logo from "../Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

const Headline = () => {
  return (
    <div className="bg-background">
      {/* Mobile Container */}
      <div className="flex flex-col items-center text-primary p-1 md:hidden">
        <div className="flex items-center mb-0">
          <Menu />
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <RequestBtn />
          <LanguageSwitcher />
        </div>
      </div>

      {/* Desktop Container */}
      <div className="hidden md:flex flex-row items-center text-primary justify-between p-5 max-w-screen-2xl m-auto">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="w-1/2">
          <Menu />
        </div>
        <div className="flex flex-col items-center space-x-5 space-y-5">
          <RequestBtn />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Headline;
