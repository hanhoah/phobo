// src/app/[locale]/components/Badges.tsx

import Image from "next/image";
import React from "react";

const Badges = () => {
  return (
    <div className="badges-container p-4 grid grid-cols-2 gap-4">
      <Image
        src="/images/badges/make-basics.png"
        alt="Make Basics Badge"
        width={150}
        height={270}
      />
      <Image
        src="/images/badges/tailwind.png"
        alt="Tailwind CSS Badge"
        width={203}
        height={132}
      />
      <Image
        src="/images/badges/react.png"
        alt="Reactjs Badge"
        width={200}
        height={235}
      />
      <Image
        src="/images/badges/next.png"
        alt="Next.js Badge"
        width={200}
        height={58}
      />
    </div>
  );
};

export default Badges;
