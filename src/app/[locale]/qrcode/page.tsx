import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import QRCodeGenerator from "../components/tools/qrcode/QrCodeGenerator.js";
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

export default function QrPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("team");

  return (
    <section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 md:px-6 lg:px-8 xl:grid-cols-5 ">
        <div className="max-w-2xl xl:col-span-2">
          <QRCodeGenerator />
        </div>
      </div>
    </section>
  );
}
