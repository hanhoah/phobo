"use client";

import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Menu = () => {
  return (
    <nav className="bg-background text-accent p-4 menu">
      <Mobile />
      <Desktop />
    </nav>
  );
};

export default Menu;
