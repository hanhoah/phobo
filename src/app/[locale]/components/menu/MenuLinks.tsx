"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation"; // Verwende usePathname

const MenuLinks = ({ onMenuItemClick = () => {} }) => {
  // Default function
  const t = useTranslations("Menu");
  const locale = useLocale();
  const pathname = usePathname(); // Erhalte den aktuellen Pfad

  return (
    <>
      <li>
        <Link
          href={`/${locale}`}
          onClick={onMenuItemClick}
          className={`menulink ${pathname === `/${locale}` ? "bg-active" : ""}`}
        >
          <Icon icon="mdi:home" className="mr-1 text-xl" />
          {t("home")}
        </Link>
      </li>
      <li>
        <Link
          href={`/${locale}/blog`}
          onClick={onMenuItemClick}
          className={`menulink ${
            pathname === `/${locale}/blog` ? "bg-active" : ""
          }`}
        >
          <Icon icon="mdi-blog" className="mr-2 text-xl" />
          {t("blog")}
        </Link>
      </li>
      <li className="relative group">
        <Link
          href={`/${locale}/services`}
          className={`menulink ${
            pathname === `/${locale}/services` ? "bg-active" : ""
          }`}
        >
          <Icon icon="mdi:briefcase" className="mr-2" />
          {t("services")}
        </Link>
        <ul className="absolute left-0 hidden group-hover:block bg-gray-100 text-accent rounded-md shadow-lg w-48">
          <li>
            <Link
              href={`/${locale}/services#web-design`}
              onClick={onMenuItemClick}
              className="block py-2 px-4 hover:underline hover:text-primary"
            >
              {t("Services.items.webdesign")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/services#seo`}
              onClick={onMenuItemClick}
              className="block py-2 px-4 hover:underline hover:text-primary"
            >
              {t("Services.items.seo")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/services/mobile-first`}
              onClick={onMenuItemClick}
              className="block py-2 px-4 hover:underline hover:text-primary"
            >
              {t("Services.items.mobilefirst")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/services/chatbot`}
              onClick={onMenuItemClick}
              className="block py-2 px-4 hover:underline hover:text-primary"
            >
              {t("Services.items.chatbot")}
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link
          href={`/${locale}/faq`}
          onClick={onMenuItemClick}
          className={`menulink ${
            pathname === `/${locale}/faq` ? "bg-active" : ""
          }`}
        >
          <Icon icon="mdi-comment-question-outline" className="mr-2 text-xl" />
          {t("faq")}
        </Link>
      </li>

      {/*
          
          <li>
          <Link
          href={`/${locale}/blog`}
          className={`menulink ${
            pathname === `/${locale}/blog` ? "bg-active" : ""
            }`}
            >
            <Icon icon="mdi-blog" className="mr-2 text-xl" />
            {t("blog")}
            </Link>
            </li>
            */}
      <li>
        <Link
          href={`/${locale}/team`}
          onClick={onMenuItemClick}
          className={`menulink ${
            pathname === `/${locale}/team` ? "bg-active" : ""
          }`}
        >
          <Icon icon="mdi:account-group" className="mr-2" />
          {t("team")}
        </Link>
      </li>
      <li>
        <Link
          href={`/${locale}/requestservice`}
          onClick={onMenuItemClick}
          className={`menulink ${
            pathname === `/${locale}/requestservice` ? "bg-active" : ""
          }`}
        >
          <Icon icon="mdi:contact-mail" className="mr-2" />
          {t("contact")}
        </Link>
      </li>
      <li>
        <Link
          href={`/${locale}/ai-tools`}
          onClick={onMenuItemClick}
          className={`menulink ${
            pathname === `/${locale}/ai-tools` ? "bg-active" : ""
          }`}
        >
          <Icon icon="mdi:robot" className="mr-2" />
          {t("ai_tools")}
        </Link>
      </li>
    </>
  );
};

export default MenuLinks;
