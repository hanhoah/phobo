"use server";

import nodemailer from "nodemailer";
import fs from "fs/promises";

// Sofortige Debug-Ausgabe
console.log("=== SMTP SETUP START ===");

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD?.slice(0, 3) + "...", // Nur die ersten 3 Zeichen aus Sicherheitsgründen
  },
};

console.log("SMTP Config:", JSON.stringify(smtpConfig, null, 2));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

// Sofortiger Verbindungstest in einer async IIFE
(async () => {
  console.log("Testing SMTP connection...");
  try {
    await transporter.verify();
    console.log("✅ SMTP connection successful");
  } catch (error) {
    console.error("❌ SMTP connection failed:", error);
  }
  console.log("=== SMTP SETUP END ===");
})();

async function logToFile(message: string) {
  await fs.appendFile(
    "email-debug.log",
    `${new Date().toISOString()}: ${message}\n`
  );
}

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  console.log("=== EMAIL SENDING START ===");
  console.log("Received form data:", JSON.stringify(formData, null, 2));

  const mailOptions = {
    from: {
      name: "Phobo Web Agency",
      address: process.env.SMTP_FROM || "info@phobo.de",
    },
    to: process.env.SMTP_TO || "hanniboy@gmail.com",
    subject: `Neue Kontaktanfrage: ${formData.subject}`,
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Betreff: ${formData.subject}
      Nachricht: ${formData.message}
    `,
    html: `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Betreff:</strong> ${formData.subject}</p>
      <p><strong>Nachricht:</strong> ${formData.message}</p>
    `,
  };

  try {
    await logToFile(`Attempting to send email to ${mailOptions.to}`);
    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", {
      messageId: info.messageId,
      response: info.response,
    });
    console.log("=== EMAIL SENDING END ===");
    return { success: true };
  } catch (error) {
    // Error Typ-Überprüfung
    const err = error as Error & { code?: string; command?: string };
    console.error("Failed to send email:", {
      error: err.message,
      code: err.code,
      command: err.command,
    });
    console.log("=== EMAIL SENDING END ===");
    return { success: false, error: err.message };
  }
}
