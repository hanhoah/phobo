// components/USPSection.tsx

"use client";

import React from "react";
import { useTranslations } from "next-intl";

const USPSection = () => {
  const t = useTranslations("USP"); // Verwenden Sie den Namespace "USP"

  return (
    <section>
      <div className="container mx-auto px-4 py-5">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          {t("title")}
        </h2>
        <div className="space-y-4 max-w-lg mx-auto">
          <div>
            <p className="title">{t("benefit1")}</p>
            <p className="text-md">{t("benefit1Description")}</p>
          </div>
          <div>
            <p className="title">{t("benefit2")}</p>
            <p className="text-md">{t("benefit2Description")}</p>
          </div>
          <div>
            <p className="title">{t("benefit3")}</p>
            <p className="text-md">{t("benefit3Description")}</p>
          </div>
          <div>
            <p className="title">{t("benefit4")}</p>
            <p className="text-md">{t("benefit4Description")}</p>
          </div>
          <div>
            <p className="title">{t("benefit6")}</p>
            <p className="text-md">{t("benefit6Description")}</p>
          </div>
          <div>
            <p className="title">{t("benefit8")}</p>
            <p className="text-md">{t("benefit8Description")}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="title">{t("multilingualMessage")}</p>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
