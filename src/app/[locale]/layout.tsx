import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "./components/Header";
import "../globals.css";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";
import { setRequestLocale } from "next-intl/server"; // Importieren Sie die stabile API
import Head from "next/head";
import ContactCard from "./components/messenger/ContactCard";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

// Dynamischer Import des ChatBot mit deaktiviertem SSR
const ChatBot = dynamic(() => import("@/components/ChatBot"), {
  ssr: false,
});

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return ["en", "de", "vi", "zh"].map((locale) => ({ locale }));
}

function HeadWithTranslations() {
  const t = useTranslations("meta.homepage");

  return (
    <Head>
      <title>{t("title")}</title>
      <meta name="description" content={t("description")} />
    </Head>
  );
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const validLocales = ["en", "de", "vi", "zh", "ja"]; // Ihre unterstützten Sprachen hier

  console.log("locale received:", locale); // Debug-Ausgabe

  if (!validLocales.includes(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  // Setzen der Sprache für statisches Rendering
  setRequestLocale(locale);

  // Holen der Nachrichten für das gegebene locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={roboto.className}>
      <HeadWithTranslations />
      <body className="w-full m-auto bg-gray-100">
        <NextIntlClientProvider messages={messages}>
          <div className="sticky top-0 z-20 w-full">
            <Header />
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="max-w-screen-xl p-1 md:p-5 m-auto">{children}</div>
            <div className="">
              <ContactCard />
            </div>
          </div>
          <Footer />
          <ChatBot />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
