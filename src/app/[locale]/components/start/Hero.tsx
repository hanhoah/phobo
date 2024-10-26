import RequestBtn from "../headline/RequestBtn";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 md:pt-14 lg:w-full lg:max-w-2xl">
          <div className="relative px-2 py-16 sm:py-40 lg:px-4 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="  tracking-tight sm:text-6xl">{t("slogan")}</h1>
              <p>{t("introduction")}</p>
              <div className="mt-10 flex items-center gap-x-6">
                <RequestBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          alt="Phobo - Modern Web Design"
          width={800}
          height={1200}
          src="/images/office.jpg"
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
        />
      </div>
    </section>
  );
}
