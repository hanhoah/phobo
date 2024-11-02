"use client";

import { useTranslations } from "next-intl";
import Deutsch from "./De";
import Englisch from "./En";
import Vietnamesisch from "./Vn";
import Chinesisch from "./Zh";
import { FC } from "react";
import Image from "next/image";

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
    <div className="p-2 max-w-screen-lg">
      <Image
        src="/images/blogposts/mobile/mobile1.jpg"
        alt="Mobile First Design"
        width={1024}
        height={1}
      />
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
