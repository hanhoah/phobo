import ChatBot from "@/components/ChatBot";

// Erstelle eine neue Seite nur für den Chatbot
export default function ChatEmbedPage() {
  return (
    <div className="w-full h-screen bg-transparent">
      <ChatBot />
    </div>
  );
}
