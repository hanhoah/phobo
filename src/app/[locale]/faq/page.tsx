import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import ReactMarkdown from "react-markdown";

export default function FAQPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("FAQ");
  const m = useTranslations("Menu");

  const faqs = [
    {
      question: t("questions.q1.question"),
      answer: t("questions.q1.answer"),
    },
    {
      question: t("questions.q2.question"),
      answer: t("questions.q2.answer"),
    },
    {
      question: t("questions.q3.question"),
      answer: t("questions.q3.answer"),
    },
    {
      question: t("questions.q4.question"),
      answer: t("questions.q4.answer"),
    },
    {
      question: t("questions.q5.question"),
      answer: t("questions.q5.answer"),
    },
    {
      question: t("questions.q6.question"),
      answer: t("questions.q6.answer"),
    },
    {
      question: t("questions.q7.question"),
      answer: t("questions.q7.answer"),
    },
    {
      question: t("questions.q8.question"),
      answer: t("questions.q8.answer"),
    },
    {
      question: t("questions.q9.question"),
      answer: t("questions.q9.answer"),
    },
    {
      question: t("questions.q10.question"),
      answer: t("questions.q10.answer"),
    },
  ];

  return (
    <div className="container w-1/2 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{m("faq")}</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg">{faq.question}</h2>
            <div className="mt-2">
              <ReactMarkdown>{faq.answer}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
