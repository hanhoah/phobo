"use client";

import MenuLinks from "./MenuLinks";

function Desktop() {
  return (
    <ul className="hidden md:flex md:flex-row md:space-x-4">
      <MenuLinks />
    </ul>
  );
}

export default Desktop;
