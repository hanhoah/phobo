"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ChatBotContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export function ChatBotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatBotContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ChatBotContext.Provider>
  );
}

export function useChatBot() {
  const context = useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error("useChatBot must be used within a ChatBotProvider");
  }
  return context;
}
