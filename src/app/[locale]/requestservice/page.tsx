"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

const FormPage = () => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Nachricht erfolgreich gesendet!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } else {
      alert("Fehler beim Senden der Nachricht.");
    }
  };

  const t = useTranslations("FormPage");

  return (
    <div className="m-auto w-1/2">
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
  );
};

export default FormPage;
