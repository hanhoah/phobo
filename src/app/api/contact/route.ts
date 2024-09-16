// app/api/contact/route.ts
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!); // API-Schlüssel aus Umgebungsvariablen

console.log("SENDGRID_API_KEY", process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const msg = {
    to: "info@wjh-wt.de", // Empfänger-E-Mail-Adresse
    from: "info@wjh-wt.de", // Absender-E-Mail-Adresse
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}
