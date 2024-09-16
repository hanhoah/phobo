import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const RequestBtn = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  // Define paths based on the locale
  const requestPath = `/${locale}/requestservice`;

  return (
    <div className="mt-5">
      <a
        href={requestPath}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
      >
        {t("service")}
      </a>
    </div>
  );
};

export default RequestBtn;
