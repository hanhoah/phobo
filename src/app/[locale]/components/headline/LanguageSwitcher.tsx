"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useSelectedLayoutSegment } from "next/navigation";

const LanguageSwitcher = () => {
  const segment = useSelectedLayoutSegment();
  // Construct the paths for the language switcher
  const enPath = segment ? `/en/${segment}` : "/en";
  const dePath = segment ? `/de/${segment}` : "/de";

  return (
    <nav className="flex flex-row justify-between w-24">
      <Link href={enPath} locale="en">
        <Icon
          className=" text-primary"
          icon="flag:gb-4x3"
          width="40"
          height="40"
        />
      </Link>
      <Link href={dePath} locale="de">
        <Icon
          className=" text-primary"
          icon="flag:de-4x3"
          width="40"
          height="40"
        />
      </Link>
    </nav>
  );
};

export default LanguageSwitcher;
