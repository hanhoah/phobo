// FormPage.tsx
"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { sendEmail } from "./actions";

const FormPage = ({ locale }: { locale: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  }

  const t = useTranslations("FormPage");

  return (
    <section>
      <div className="m-auto w-full lg:w-1/2">
        <h1 className="text-center">{t("title")}</h1>
        <p className="text-xl">{t("intro")}</p>
        <form onSubmit={handleSubmit} className="space-y-4 my-28">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Betreff:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Nachricht:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="button" type="submit">
            Absenden
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormPage;
