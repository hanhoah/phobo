"use client";

import { useTranslations, useLocale } from "next-intl";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import Link from "next/link";
import { eventEmitter } from "@/lib/eventEmitter";

// Separate Card component for better performance
const PlanCard = ({
  plan,
  t,
  locale,
}: {
  plan: string;
  t: any;
  locale: string;
}) => {
  const maxFeatures = {
    basic: 6,
    professional: 8,
    business: 9,
    enterprise: 10,
  };

  const isEnterprise = plan === "enterprise";

  return (
    <Card className="flex flex-col">
      <div className="p-6 border-b">
        <h3 className="text-2xl font-semibold">{t(`plans.${plan}.name`)}</h3>
        <p className="text-gray-600 mt-2">{t(`plans.${plan}.description`)}</p>
        <div className="text-3xl font-bold text-orange-500 mt-4">
          {isEnterprise ? (
            <span className="text-2xl">{t(`plans.${plan}.price`)}</span>
          ) : (
            <>
              {t(`plans.${plan}.price`)}€
              <span className="text-base font-normal">{t("month")}</span>
            </>
          )}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <ul className="space-y-2">
          {Array.from({ length: maxFeatures[plan as keyof typeof maxFeatures] })
            .map((_, i) => {
              try {
                const feature = t(`plans.${plan}.features.${i}`);
                return (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                );
              } catch {
                return null;
              }
            })
            .filter(Boolean)}
        </ul>
      </div>
      <div className="p-6 border-t">
        <Link href={`/${locale}/requestservice#form`} className="w-full">
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            {t("cta")}
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default function ChatbotPageClient({ locale }: { locale: string }) {
  const t = useTranslations("chatbot");
  const plans = ["basic", "professional", "business", "enterprise"];

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Live Demo</h2>
        <Button
          onClick={() => eventEmitter.emit("openChat")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          <MessageCircle className="h-5 w-5" />
          {t("demo")}
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {plans.map((plan) => (
          <PlanCard key={plan} plan={plan} t={t} locale={locale} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {["gdpr", "integration", "availability"].map((feature) => (
          <div key={feature} className="text-center p-6">
            <h3 className="text-xl font-semibold mb-3">
              {t(`features.${feature}.title`)}
            </h3>
            <p className="text-gray-600">{t(`features.${feature}.desc`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
