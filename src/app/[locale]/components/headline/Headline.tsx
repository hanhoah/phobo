import React from "react";
import Address from "./Address";
import CallUs from "./CallUs";
import RequestBtn from "./RequestBtn";
import Image from "next/image";
import logo from "../../../../assets/images/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

const Headline = () => {
  return (
    <div className="pt-5 flex text-secondary w-full justify-between max-w-screen-2xl ">
      <div className="">
        {" "}
        <Link href="/">
          <Image src={logo} alt="Company Logo" width={150} height={50} />
        </Link>
      </div>
      <div className="flex flex-row w-3/4 justify-around">
        <Address />
        <CallUs />
        <RequestBtn />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Headline;
