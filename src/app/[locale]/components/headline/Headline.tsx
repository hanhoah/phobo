import React from "react";
import Address from "./Address";
import CallUs from "./CallUs";
import RequestBtn from "./RequestBtn";
import Image from "next/image";
import Logo from "../Logo";

import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

const Headline = () => {
  return (
    <div className="pt-5 flex items-center bg-background text-primary w-full justify-between max-w-screen-2xl p-4">
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
