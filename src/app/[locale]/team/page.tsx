import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import ReactMarkdown from "react-markdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Badges from "../components/Badges";

export default function ServicePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("team");
  const l = useTranslations("language");
  const g = useTranslations("general");

  // Define an array of member keys manually
  const memberKeys = ["hanHoaHuynh", "haiPham", "seki"]; // Manually set the keys

  return (
    <section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 md:px-6 lg:px-8 xl:grid-cols-5 ">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="md:text-4xl font-bold  text-primary text-3xl p-1">
            {t("title")}
          </h2>
          <p className="mt-0 md:mt-6 text-lg leading-8 text-gray-600 p-1 md:pr-10 ">
            {t("description")}
          </p>
          <Badges />
        </div>
        <ul
          role="list"
          className="-mt-12 space-y-4 divide-y divide-gray-200 xl:col-span-3"
        >
          {memberKeys.map((key) => {
            // Access each property using dot notation
            const name = t(`members.${key}.name`);
            const role = t(`members.${key}.role`);
            const bio = t(`members.${key}.bio`);
            const languages = t(`members.${key}.languages`);
            const spokenlanguages = t;
            const imageUrl = t(`members.${key}.imageUrl`);
            const linkedinUrl = t(`members.${key}.linkedinUrl`);

            return (
              <Card
                className="mt-16 w-full md:w-3/4 p-4 bg-white shadow-lg rounded-lg"
                key={name}
              >
                <CardHeader className="border-b border-gray-200 pb-4">
                  <CardTitle className="text-xl font-semibold text-primary">
                    {name}
                  </CardTitle>
                  <CardDescription className="text-sm text-secondary">
                    <Badge variant="outline" className="text-sm">
                      {role}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription className="text-base text-gray-700">
                    {bio}
                  </CardDescription>
                  <div className="flex flex-row mt-4">
                    <Image
                      alt={name}
                      src={imageUrl}
                      width={208}
                      height={260}
                      className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover shadow-md"
                    />
                    <div className="ml-4">
                      <CardDescription className="flex flex-col mb-4">
                        <b className="text-sm text-primary">
                          {g("socialnetworks")}:
                        </b>
                        <ul>
                          <li>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={linkedinUrl}
                              className="text-gray-500 hover:text-primary"
                            >
                              <div className="flex flex-row items-center text-sm">
                                Linked
                                <Icon
                                  icon="akar-icons:linkedin-fill"
                                  className="w-5 h-5 ml-1 text-secondary"
                                />
                              </div>
                            </a>
                          </li>
                        </ul>
                      </CardDescription>
                      <CardDescription>
                        <b className="text-sm text-primary">
                          {t("languages")}:
                        </b>
                        <ReactMarkdown className="text-sm text-gray-700">
                          {languages}
                        </ReactMarkdown>
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
