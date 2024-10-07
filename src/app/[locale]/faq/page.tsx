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

  const questionKeys = [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "q9",
    "q10",
    "q11",
    "q12",
    "q13",
  ];

  const faqs = questionKeys.map((key) => ({
    question: t(`questions.${key}.question`),
    answer: t(`questions.${key}.answer`),
  }));

  return (
    <div className="container w-full lg:w-1/2 mx-auto p-4">
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
