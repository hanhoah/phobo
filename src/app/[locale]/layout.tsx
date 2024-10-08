import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "./components/Header";
// These styles apply to every route in the application
import "../globals.css";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";
import Head from "next/head";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} className={roboto.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="w-full m-auto bg-gray-100 ">
        <NextIntlClientProvider messages={messages}>
          <div className="sticky top-0 z-20  w-full">
            <Header />
          </div>
          <div className="max-w-screen-xl p-1 md:p-5 m-auto">{children}</div>
          <Footer />·
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
