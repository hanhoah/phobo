import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ChatbotPageClient from "./ChatbotPageClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.chatbot" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function ChatbotPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <ChatbotPageClient locale={locale} />;
}
