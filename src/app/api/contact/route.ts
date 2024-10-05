import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  try {
    const response = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER_EMAIL,
            Name: name,
          },
          To: [
            {
              Email: process.env.MAILJET_RECIPIENT_EMAIL,
              Name: "Recipient",
            },
          ],
          Subject: subject,
          TextPart: `Nachricht von ${name} (${email}): ${message}`,
        },
      ],
    });

    return NextResponse.json(
      { status: "success", data: response.body },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: "error", error }, { status: 500 });
  }
}
