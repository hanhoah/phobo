"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import Whatsapp from "./messenger/Whatsapp";
import Telegram from "./messenger/Telegram";
import Zalo from "./messenger/Zalo";

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
      <div className="max-w-screen-2xl m-auto flex flex-col md:flex-row">
        <nav className="ml-5">
          <ul>
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
        <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
          <Whatsapp />
          <Telegram />
          <Zalo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
