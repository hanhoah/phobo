"use client";

import { useTranslations } from "next-intl";
import Deutsch from "./De";
import Englisch from "./En";
import Vietnamesisch from "./Vn";
import Chinesisch from "./Zh";

export default function ServicePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("HomePage");

  const renderLanguageComponent = () => {
    switch (locale) {
      case "de":
        return <Deutsch />;
      case "en":
        return <Englisch />;
      case "vi":
        return <Vietnamesisch />;
      case "zh":
        return <Chinesisch />;
      default:
        return <Deutsch />;
    }
  };

  return <>{renderLanguageComponent()}</>;
}
