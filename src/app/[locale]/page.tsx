import { useTranslations } from "next-intl";
import Hero from "./components/start/Hero";
import Services from "./components/start/Services";
import AboutSection from "./components/start/About";
import { unstable_setRequestLocale } from "next-intl/server";
import USPSection from "./components/start/USPSection";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <>
      <Hero />
      <AboutSection />
      <USPSection />
    </>
  );
}
