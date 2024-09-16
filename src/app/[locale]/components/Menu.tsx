import React from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const Menu = () => {
  const t = useTranslations("Menu");
  return (
    <div className="bg-secondary text-white mt-2 py-3 ">
      <nav className="flex justify-between items-center max-w-lg m-auto">
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="flex items-center space-x-2 hover:underline decoration-primary decoration-4"
            >
              <span className="icon-[material-symbols--home-outline]"></span>
              <span>{t("home")}</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center space-x-2 hover:underline decoration-primary decoration-4"
            >
              <span className="icon-[material-symbols--home-outline]"></span>
              <span>{t("aboutus")}</span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="flex items-center space-x-2  hover:underline decoration-primary decoration-4"
            >
              <span className="icon-[mdi--about-variant]"></span>
              <span>{t("products")}</span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="flex items-center space-x-2 hover:underline decoration-primary decoration-4 "
            >
              <span className="icon-[mdi--about-variant]"></span>
              <span>{t("competences")}</span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="flex items-center space-x-2 hover:underline decoration-primary decoration-4 "
            >
              <span className="icon-[mdi--about-variant]"></span>
              <span>{t("contact")}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
