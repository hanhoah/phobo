"use client";

import { useState } from "react";
import MenuLinks from "./MenuLinks";

function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden flex items-center justify-between">
        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      <ul className={`mt-4 md:hidden ${isOpen ? "block" : "hidden"}`}>
        <MenuLinks />
      </ul>
    </div>
  );
}

export default Mobile;
