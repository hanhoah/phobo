import OpenAI from "openai";
import { searchDocuments } from "@/lib/knowledge-base";
import { trackUsage } from "@/lib/usage-tracking";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, clientId = process.env.NEXT_PUBLIC_DEFAULT_CLIENT_ID } =
      await req.json();

    console.log("Received messages:", messages);

    const lastMessage = messages[messages.length - 1];
    const documents = await searchDocuments(lastMessage.content, clientId);
    console.log("Found documents:", documents);

    const context = documents.map((doc) => doc.content).join("\n");
    console.log("Context:", context);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Du bist ein hilfreicher Assistent für phobo.de web dev agency. 
          Nutze den folgenden Kontext für deine Antworten:
          ${context}
          Wenn du die Antwort nicht im Kontext findest, nutze dein allgemeines Wissen,
          aber erwähne, dass die Information nicht aus der offiziellen Dokumentation stammt.`,
        },
        ...messages,
      ],
      stream: false,
    });

    const messageContent = response.choices[0].message.content;
    console.log("Sending message:", messageContent);

    // Direkte Text-Response
    return new Response(messageContent);
  } catch (error) {
    console.error("Error in chat route:", error);
    return new Response("Error processing your request", { status: 500 });
  }
}
