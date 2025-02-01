import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import AiToolsGrid from "@/app/[locale]/components/aitools/AiToolsGrid";
import { loadAiTools } from "@/lib/loadAiTools";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.aitools" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

const AiToolsPage = async ({ params }: { params: { locale: string } }) => {
  setRequestLocale(params.locale);
  const t = await getTranslations("aitools");
  const tools = await loadAiTools(params.locale);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t("subtitle")}
        </p>
      </div>

      <AiToolsGrid tools={tools} />
    </main>
  );
};

export default AiToolsPage;
