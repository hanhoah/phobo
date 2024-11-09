"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations("services");
  console.log(t);

  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <Image
          alt=""
          src="/images/services/services600.jpg"
          className="object-cover w-full h-full"
          width={400}
          height={10}
        />
        <div className="px-1 md:px-6">
          {/* Webdesign Teaser */}
          <a id="web-design" />
          <h2 className="text-base font-semibold leading-7 text-primary">
            {t("webdesign.cta")}
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("webdesign.title")}
          </h1>
          <p dangerouslySetInnerHTML={{ __html: t("webdesign.description") }} />

          {/* SEO Teaser */}
          <a id="seo" />
          <h2 className="text-base font-semibold leading-7 text-primary mt-16">
            {t("seo.cta")}
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("seo.title")}
          </h1>
          <div
            className="mt-6 text-xl leading-8 text-gray-700"
            dangerouslySetInnerHTML={{ __html: t("seo.description") }}
          />
        </div>
      </div>
    </section>
  );
}
