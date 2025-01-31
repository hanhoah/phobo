import { useTranslations } from "next-intl";
import Hero from "./components/start/Hero";
import AboutSection from "./components/start/About";
import { unstable_setRequestLocale } from "next-intl/server";
import USPSection from "./components/start/USPSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AboutSection />
      <USPSection />
    </>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.homepage" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords", { returnObjects: true }),
    alternates: {
      canonical: "https://phobo.de",
      languages: {
        de: "https://phobo.de/de",
        en: "https://phobo.de/en",
        vi: "https://phobo.de/vi",
        zh: "https://phobo.de/zh",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "Phobo Web Agency",
      locale: locale,
      type: "website",
      images: [
        {
          url: "https://phobo.de/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
