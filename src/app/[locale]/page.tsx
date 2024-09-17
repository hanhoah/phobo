import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import toolsImage from "@/assets/images/tools.jpeg";
import ImageSlider from "./components/ImageSlider";
import Hero from "./components/start/Hero";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  if (locale == "de")
    return (
      <>
        <Hero />
      </>
    );
  else
    return (
      <>
        <Hero />
      </>
    );
}
