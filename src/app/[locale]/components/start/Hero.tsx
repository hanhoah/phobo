import RequestBtn from "../headline/RequestBtn";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="flex flex-col lg:flex-row justify-between p-0">
      <div className="md:w-1/3 p-2 flex flex-col lg:justify-around lg:text-center">
        <h1 className=" sm:text-6xl">{t("slogan")}</h1>
        <div className="lg:w-80 text-xl mx-auto">{t("introduction")}</div>
        <div className="mt-5">
          <RequestBtn />
        </div>
      </div>
      <div className="p-0 m-0">
        <Image
          alt="Phobo - Modern Web Design"
          width={800}
          height={1}
          src="/images/start/atwork.jpg"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
