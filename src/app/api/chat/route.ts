import { OpenAI } from "openai";
import { searchDocuments } from "@/lib/knowledge-base";
import { trackUsage } from "@/lib/usage-tracking";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    const relevantDocs = await searchDocuments(
      lastMessage.content,
      process.env.NEXT_PUBLIC_DEFAULT_CLIENT_ID || "phobo"
    );

    const context = relevantDocs.map((doc) => doc.content).join("\n");

    const systemPrompt = `Du bist ein hilfreicher Assistent für die Webdesign-Agentur Phobo. 
Bei Fragen nach Kontaktmöglichkeiten oder wenn Kontaktinformationen relevant sind, 
antworte nur mit: "[KONTAKTFORMULAR]"

Beispiele:
Frage: "Wie kann ich euch kontaktieren?"
Antwort: "[KONTAKTFORMULAR]"

Frage: "Habt ihr eine Telefonnummer?"
Antwort: "[KONTAKTFORMULAR]"

Auch wenn der Kunde nach Callback fragt, antworte nur mit: "[KONTAKTFORMULAR]"

Bei allen anderen Fragen antworte normal, aber gib keine spezifischen Kontaktdaten wie 
Telefonnummern oder E-Mail-Adressen heraus.`;

    const userPrompt = `
      Kontext: ${context}
      
      Frage: ${lastMessage.content}
      
      Bitte antworte basierend auf dem gegebenen Kontext. Wenn du die Antwort nicht im Kontext findest, 
      sage dass du dazu keine Information hast.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return new Response(response.choices[0].message.content);
  } catch (error) {
    console.error("Error in chat route:", error);
    return new Response(
      "Es tut mir leid, es gab einen Fehler bei der Verarbeitung Ihrer Anfrage.",
      { status: 500 }
    );
  }
}
