import { useTranslations } from "next-intl";
import Link from "next/link";

const Menu = () => {
  const t = useTranslations("Menu");

  return (
    <nav className=" text-white text-0xl">
      <div className="max-w-screen-2xl mx-auto flex justify-end">
        <div className="relative group">
          <button className="px-4 py-2 bg-background hover:bg-primary hover:text-white">
            {t("about")}
          </button>
          <div className="absolute right-0 hidden mt-0 w-48 bg-white opacity-90 shadow-lg rounded-md group-hover:block">
            <Link
              href="/about/mission"
              className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
            >
              {t("mission")}
            </Link>
            <Link
              href="/about/team"
              className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
            >
              {t("team")}
            </Link>
            <Link
              href="/about/history"
              className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
            >
              {t("history")}
            </Link>
            <Link
              href="/about/testimonials"
              className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
            >
              {t("testimonials")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
