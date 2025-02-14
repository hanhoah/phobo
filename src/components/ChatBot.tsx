"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      setIsLoading(true);
      const userMessage: Message = { role: "user", content: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const responseText = await response.text();
      const assistantMessage: Message = {
        role: "assistant",
        content: responseText,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 p-0 bg-orange-500 hover:bg-orange-600 border-none shadow-lg"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      ) : (
        <div className="relative">
          <Card className="w-[calc(100vw-2rem)] md:w-[440px] border-orange-500 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
              <CardTitle className="text-base md:text-lg">
                phobo.de - Chat Assistent
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-4">
              <ScrollArea className="h-[50vh] md:h-[400px] pr-4">
                {messages.map((message, i) => (
                  <div
                    key={i}
                    className={`mb-4 text-sm md:text-base ${
                      message.role === "assistant"
                        ? "text-blue-600"
                        : "text-orange-500"
                    }`}
                  >
                    {message.content}
                  </div>
                ))}
                {isLoading && (
                  <div className="text-gray-500 animate-pulse">
                    Schreibe Antwort...
                  </div>
                )}
              </ScrollArea>
              <div className="flex gap-2 mt-4">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Schreibe eine Nachricht..."
                  disabled={isLoading}
                  className="focus-visible:ring-orange-500 border-orange-500 text-sm md:text-base"
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading}
                  className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap"
                >
                  Senden
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
