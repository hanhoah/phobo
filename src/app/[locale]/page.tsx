import { useTranslations } from "next-intl";
import Hero from "./components/start/Hero";
import Services from "./components/start/Services";
import AboutSection from "./components/start/About";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
    </>
  );
}
