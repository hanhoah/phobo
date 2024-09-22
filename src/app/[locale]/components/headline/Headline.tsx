import React from "react";
import Address from "./Address";
import RequestBtn from "./RequestBtn";
import Logo from "../Logo";

import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

const Headline = () => {
  return (
    <div className="flex items-center bg-background text-primary  justify-between p-5">
      <div className="flex items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="hidden md:block">
        <Address />
      </div>
      <div className="flex flex-col items-center h-24 justify-between">
        <RequestBtn />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Headline;
