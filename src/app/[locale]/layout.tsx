import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "./components/Header";
// These styles apply to every route in the application
import "../globals.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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

  return (
    <html lang={locale} className={roboto.className}>
      <body className="w-full m-auto ">
        <div className="sticky top-0 z-20 bg-background w-full">
          <Header />
          <Menu />
        </div>
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-screen-xl p-5 m-auto">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
