import React from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const CallUs = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="text-center">
      {t("callus")}
      <br />
      <div className="font-bold text-lg">02132/5812131</div>
    </div>
  );
};

export default CallUs;
