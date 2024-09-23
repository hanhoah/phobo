import RequestBtn from "../headline/RequestBtn";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 md:pt-14 lg:w-full lg:max-w-2xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-2 py-16 sm:py-40 lg:px-4 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                {t("slogan")}
              </h1>
              <p>{t("introduction")}</p>
              <div className="mt-10 flex items-center gap-x-6">
                <RequestBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
        />
      </div>
    </section>
  );
}
