import dynamic from "next/dynamic";

const ChatBot = dynamic(() => import("@/components/ChatBot"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
