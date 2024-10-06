import { useTranslations } from "next-intl";
import Services from "../components/start/Services";
import { unstable_setRequestLocale } from "next-intl/server";

export default function ServicePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("team");

  // Define an array of member keys manually
  const memberKeys = ["hanHoaHuynh", "haiPham", "seki"]; // Manually set the keys

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
      <div className="max-w-2xl xl:col-span-2">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 p-2 md:pr-10">
          {t("description")}
        </p>
      </div>
      <ul
        role="list"
        className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
      >
        {memberKeys.map((key) => {
          // Access each property using dot notation
          const name = t(`members.${key}.name`);
          const role = t(`members.${key}.role`);
          const bio = t(`members.${key}.bio`);
          const languages = t(`members.${key}.languages`);
          const imageUrl = t(`members.${key}.imageUrl`);
          const linkedinUrl = t(`members.${key}.linkedinUrl`);

          return (
            <li
              key={name} // Ensure this is unique
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <img
                alt={name} // Use person's name for alt text
                src={imageUrl}
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-primary">
                  {name}
                </h3>
                <p className="text-base leading-7 text-gray-600">{role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{bio}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {languages}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6 h-12">
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      {/* LinkedIn SVG Icon */}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
