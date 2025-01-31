// requestservice/page.tsx
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import ContactPage from "./ContactPage";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.request" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

const RequestServicePage = ({ params }: { params: { locale: string } }) => {
  // Set the request locale here
  unstable_setRequestLocale(params.locale);

  return <ContactPage locale={params.locale} />;
};

export default RequestServicePage;
