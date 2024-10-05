import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const RequestBtn = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  // Define paths based on the locale
  const requestPath = `/${locale}/requestservice`;

  return (
    <div className="">
      <a href={requestPath} className="button">
        {t("service")}
      </a>
    </div>
  );
};

export default RequestBtn;
