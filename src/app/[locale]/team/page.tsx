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
              <Card className="mt-16 w-full md:w-3/4 p-0" key={name}>
                <CardHeader>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline">{role}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription>{bio}</CardDescription>
                  <div className="flex flex-row mt-2 md:mt-5">
                    <Image
                      alt={name}
                      src={imageUrl}
                      width={208}
                      height={260}
                      className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                    />
                    <div className="ml-1 md:ml-5">
                      <CardDescription className="flex flex-col mb-5">
                        <b>{g("socialnetworks")}: </b>{" "}
                        <ul>
                          <li>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={linkedinUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <div className="flex flex-row text-sm text-slate-500">
                                Linked
                                <Icon
                                  icon="akar-icons:linkedin-fill"
                                  className="w-6 h-6 text-secondary"
                                />
                              </div>
                            </a>
                          </li>
                        </ul>
                      </CardDescription>
                      <CardDescription>
                        <b>{t("languages")}:</b>
                        <ReactMarkdown>{languages}</ReactMarkdown>
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
