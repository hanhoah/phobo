import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "./components/Header";
import "../globals.css";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";
import { setRequestLocale } from "next-intl/server"; // Importieren Sie die stabile API
import Head from "next/head";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return ["en", "de", "vi", "zh"].map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string }; // locale ist optional
}) {
  const validLocales = ["en", "de", "vi", "zh"]; // Ihre unterstützten Sprachen hier

  // Standardwert für locale, falls es nicht gesetzt ist
  const locale = params?.locale || "en";

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
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="w-full m-auto bg-gray-100">
        <NextIntlClientProvider messages={messages}>
          <div className="sticky top-0 z-20 w-full">
            <Header />
          </div>
          <div className="max-w-screen-xl p-1 md:p-5 m-auto">{children}</div>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
