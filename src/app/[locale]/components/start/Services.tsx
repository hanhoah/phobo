"use client";

import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  console.log(t);

  return (
    <div className="relative bg-white mt-5">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
            />
          </div>
        </div>
        <div className="px-1 md:px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            {/* Webdesign Teaser */}
            <h2 className="text-base font-semibold leading-7 text-primary">
              {t("webdesign.cta")}
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("webdesign.title")}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: t("webdesign.description") }}
            />

            {/* SEO Teaser */}
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
      </div>
    </div>
  );
}
