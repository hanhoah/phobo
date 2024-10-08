// requestservice/page.tsx
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import ContactPage from "./ContactPage";

const RequestServicePage = ({ params }: { params: { locale: string } }) => {
  // Set the request locale here
  unstable_setRequestLocale(params.locale);

  return <ContactPage locale={params.locale} />;
};

export default RequestServicePage;
