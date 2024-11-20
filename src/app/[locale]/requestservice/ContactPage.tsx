"use client";

import { useTranslations } from "next-intl";
import Whatsapp from "../components/messenger/Whatsapp";
import WhatsappQR from "../components/messenger/WhatsappQR";
import Telegram from "../components/messenger/Telegram";
import TelegramQR from "../components/messenger/TelegramQR";
import Zalo from "../components/messenger/Zalo";
import ZaloQR from "../components/messenger/ZaloQR";
import FormPage from "./FormPage";

export default function ContactPage({ locale }: { locale: string }) {
  const t = useTranslations("Contact");

  return (
    <>
      <section>
        <div className="container mx-auto md:w-1/2 p-1">
          <h1 className="text-3xl font-bold text-primary mb-4">{t("title")}</h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              {t("generalContact.title")}
            </h2>
            <p className="text-gray-700">{t("generalContact.description")}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">{t("whatsapp.title")}</h2>
            <div className="flex flex-row align-top">
              <div className="w-64 hidden md:block">
                <WhatsappQR />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 ">{t("whatsapp.description")}</p>
                <Whatsapp />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">{t("telegram.title")}</h2>
            <div className="flex flex-row align-top">
              <div className="w-64 hidden md:block">
                <TelegramQR />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 ">{t("telegram.description")}</p>
                <Telegram />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">{t("zalo.title")}</h2>
            <div className="flex flex-row align-top">
              <div className="w-64 hidden md:block">
                <ZaloQR />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 ">{t("zalo.description")}</p>
                <Zalo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <FormPage locale={locale} />
      </section>
    </>
  );
}
