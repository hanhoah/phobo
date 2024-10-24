"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation"; // Verwende usePathname

const MenuLinks = () => {
  const t = useTranslations("Menu");
  const locale = useLocale();
  const pathname = usePathname(); // Erhalte den aktuellen Pfad

  return (
    <>
      <li>
        <Link
          href={`/${locale}`}
          className={`menulink ${pathname === `/${locale}` ? "bg-active" : ""}`}
        >
          <Icon icon="mdi:home" className="mr-1 text-xl" />
          {t("home")}
        </Link>
      </li>
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
        <ul className="absolute left-0 hidden group-hover:block bg-secondary text-accent rounded-md shadow-lg">
          <li>
            <Link
              href={`/${locale}/services#web-design`}
              className="block py-2 px-4 hover:underline hover:text-primary"
            >
              {t("webdesign")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/services#seo`}
              className="block py-2 px-4 hover:underline hover:text-primary"
            >
              {t("seo")}
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link
          href={`/${locale}/faq`}
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
          className={`menulink ${
            pathname === `/${locale}/requestservice` ? "bg-active" : ""
          }`}
        >
          <Icon icon="mdi:contact-mail" className="mr-2" />
          {t("contact")}
        </Link>
      </li>
    </>
  );
};

export default MenuLinks;
