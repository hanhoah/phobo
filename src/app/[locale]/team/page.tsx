import { useTranslations } from "next-intl";
import Services from "../components/start/Services";
import { unstable_setRequestLocale } from "next-intl/server";

export default function ServicePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <>
      <Services />
    </>
  );
}
