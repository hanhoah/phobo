import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Telegram from "./Telegram";
import Whatsapp from "./Whatsapp";
import Zalo from "./Zalo";

function ContactCard() {
  const t = useTranslations("contactCard");

  return (
    <Card className="w-56 md:sticky md:top-52 lg:top-32  m-2 p-2 md:p-0 shadow-2xl ">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>{t("content")}</CardContent>
      <CardFooter>
        <div>
          <Telegram />
          <Whatsapp />
          <Zalo />
        </div>
      </CardFooter>
    </Card>
  );
}

export default ContactCard;
