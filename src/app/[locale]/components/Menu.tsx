"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Icon } from "@iconify/react";

const Menu = () => {
  const t = useTranslations("Menu");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-accent p-4 menu">
      {/* Mobile Menu */}
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
        <li>
          <Link href={`/${locale}`} className="menulink">
            <Icon icon="mdi:home" className="mr-2 text-xl" />
            {t("home")}
          </Link>
        </li>
        <li className="relative group">
          <Link href={`/${locale}/services`} className="menulink">
            <Icon icon="mdi:briefcase" className="mr-2" />
            {t("services")}
          </Link>
          <ul className="absolute left-0 hidden group-hover:block bg-secondary text-accent rounded-md shadow-lg">
            <li>
              <Link
                href={`/${locale}/services#web-design`}
                className="block py-2 px-4 hover:underline"
              >
                {t("webdesign")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/services#seo`}
                className="block py-2 px-4 hover:underline"
              >
                {t("seo")}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={`/${locale}/faq`} className="menulink">
            <Icon
              icon="mdi-comment-question-outline"
              className="mr-2 text-xl"
            />{" "}
            {t("faq")}
          </Link>
        </li>

        <li>
          <Link href={`/${locale}/team`} className="menulink">
            <Icon icon="mdi:account-group" className="mr-2" />
            {t("team")}
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/requestservice`} className="menulink">
            <Icon icon="mdi:contact-mail" className="mr-2" />
            {t("contact")}
          </Link>
        </li>
      </ul>

      {/* Desktop Links */}
      <ul className="hidden md:flex md:items-center md:space-x-8">
        <li>
          <Link href={`/${locale}`} className="menulink">
            <Icon icon="mdi:home" className="mr-2 text-xl" />
            {t("home")}
          </Link>
        </li>
        <li className="relative group">
          <Link href={`/${locale}/services`} className="menulink">
            <Icon icon="mdi:briefcase" className="mr-2" />
            {t("services")}
          </Link>
          <ul className="absolute left-0 hidden group-hover:block bg-secondary text-accent rounded-md shadow-lg">
            <li>
              <Link
                href={`/${locale}/services#web-design`}
                className="block py-2 px-4 hover:underline"
              >
                {t("webdesign")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/services#seo`}
                className="block py-2 px-4 hover:underline"
              >
                {t("seo")}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={`/${locale}/faq`} className="menulink">
            <Icon
              icon="mdi-comment-question-outline"
              className="mr-2 text-xl"
            />{" "}
            {t("faq")}
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/team`} className="menulink">
            <Icon icon="mdi:account-group" className="mr-2" />
            {t("team")}
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/requestservice`} className="menulink">
            <Icon icon="mdi:contact-mail" className="mr-2" />
            {t("contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
