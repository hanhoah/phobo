"use client";

import { useTranslations } from "next-intl";
import Deutsch from "./De";
import Englisch from "./En";
import Vietnamesisch from "./Vn";
import Chinesisch from "./Zh";
import { FC } from "react";

type LanguageComponentProps = {
  Language: FC;
};

export default function ServicePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("HomePage");
  const LanguageComponent: FC<LanguageComponentProps> = ({ Language }) => (
    <div className="p-2">
      <Language />
    </div>
  );

  // Dann kannst du die spezifischen Sprachkomponenten so verwenden:
  const decomponent = <LanguageComponent Language={Deutsch} />;
  const encomponent = <LanguageComponent Language={Englisch} />;
  const vicomponent = <LanguageComponent Language={Vietnamesisch} />;
  const zhcomponent = <LanguageComponent Language={Chinesisch} />;

  const renderLanguageComponent = () => {
    switch (locale) {
      case "de":
        return decomponent;
      case "en":
        return encomponent;
      case "vi":
        return vicomponent;
      case "zh":
        return zhcomponent;
      default:
        return <Deutsch />;
    }
  };

  return <>{renderLanguageComponent()}</>;
}
