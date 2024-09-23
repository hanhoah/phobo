import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");
  return (
    <section>
      <div className="max-w-7xl mx-auto md:px-4 px-1">
        <div className="overflow-hidden">
          <div className="flex flex-row">
            <div className=" md:p-3 lg:p-6">
              <h1 className="text-primary">Über Phobo</h1>
              <div className="flex flex-col md:flex-row">
                <div className="w-full lg:w-2/3 md:p-5">
                  <p>{t("description")}</p>
                  <p>{t("phobo")}</p>
                  <p>{t("slogan")}</p>
                </div>
                <div className="border-2 mx-auto my-5">
                  {" "}
                  <div className="max-w-sm w-full rounded overflow-hidden shadow-lg">
                    <Image
                      src="/images/Delicious_Bowl_of_Pho_bo.png"
                      width="400"
                      height="400"
                      alt="Delicious Bowl of Pho Bo"
                    />
                    <div className="px-6 py-4 bg-background">
                      <div className="font-bold text-xl mb-2">
                        {t("phobowebdesigntitle")}
                      </div>
                      <p className="text-gray-700 text-base">
                        {t("phobowebdesigndesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-4">
            <ClipboardDocumentListIcon className="h-12 w-12 text-primary" />
            <span className="text-sm text-gray-500">{t("zielgruppe")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
