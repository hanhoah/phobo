"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("HomePage");
  const u = useTranslations("Menu");
  const router = useRouter();
  const locale = useLocale();

  // Define paths based on the locale
  const privacyPath = `/${locale}/privacy`;
  const imprintPath = `/${locale}/imprint`;

  return (
    <footer className="bg-secondary text-white py-4 ">
      <div className="max-w-screen-2xl m-auto">
        <nav>
          <ul className="list-none">
            <li>
              <Link href={privacyPath}>{u("privacy")}</Link>
            </li>
            <li>
              <Link href={imprintPath}>{u("imprint")}</Link>
            </li>
          </ul>
        </nav>
        <div className="container mx-auto text-center">
          <p>
            &copy; 2024 Phobo.de - Web Design & Development
            <br /> {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
