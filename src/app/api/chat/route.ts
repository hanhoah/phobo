import OpenAI from "openai";
import { searchDocuments } from "@/lib/knowledge-base";
import { trackUsage } from "@/lib/usage-tracking";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message, clientId, conversationHistory } = await req.json();

    // Suche relevante Dokumente
    const relevantDocs = await searchDocuments(message, clientId || "phobo");
    const context = relevantDocs.map((doc) => doc.content).join("\n");

    // Erstelle den System-Prompt mit Kontext
    const systemPrompt = `Du bist der offizielle Kundenservice-Assistent und Fullstack-Entwicklungsexperte der Webagentur Phobo (phobo.de).

ÜBER UNS:
- Wir sind eine professionelle Full-Service Webagentur in Mülheim an der Ruhr
- Wir realisieren ALLE technisch machbaren Webprojekte und Softwarelösungen
- Unser Team besteht aus erfahrenen Fullstack-Entwicklern
- Wir entwickeln mit modernsten Technologien (React, Next.js, Tailwind CSS)
- Wir sind spezialisiert auf maßgeschneiderte Lösungen für KMUs

UNSERE KERNLEISTUNGEN:
1. Fullstack-Entwicklung & Webdesign
   - Responsive Websites & Web-Applikationen
   - Komplexe Online-Shops und Marktplätze
   - Zahlungssystem-Integration (alle gängigen Zahlungsanbieter)
   - Custom Software-Lösungen
   - Progressive Web Apps
   - Mobile Apps
   - Buchungssysteme
   - CRM-Systeme
   - Automatisierungslösungen

2. Technische Expertise (Vollständige Fullstack-Entwicklung)
   - Frontend: React.js, Vue.js, Next.js, Tailwind CSS
   - Backend: Node.js, PHP, Python, Java
   - Datenbanken: MySQL, PostgreSQL, MongoDB, Redis
   - Cloud: AWS, Google Cloud, Azure
   - DevOps: Docker, Kubernetes
   - Payment-Integration
   - API-Entwicklung & Integration
   - KI-Integration
   - Blockchain & Web3
   - IoT-Lösungen

3. Support & Wartung
   - Hosting & Wartung
   - 24/7 Technischer Support
   - Content-Updates
   - Sicherheits-Updates
   - Performance-Optimierung
   - Skalierung

WICHTIG FÜR ANTWORTEN:
1. Bestätige IMMER, dass wir die angefragten Features entwickeln können
2. Betone unsere Fullstack-Expertise und technische Vielseitigkeit
3. Erkläre kurz, wie wir das technisch umsetzen würden
4. FÜGE AM ENDE JEDER SUBSTANZIELLEN ANTWORT HINZU: "[KONTAKTFORMULAR]"
5. Bei Preisfragen: Verweise auf individuelle Angebote über das Kontaktformular
6. Antworte in der Sprache der Anfrage
7. Beziehe dich auf vorherige Fragen
8. Halte Antworten kurz und prägnant (max. 150 Wörter)

Beispielantwort:
"Ja, wir können Ihnen definitiv bei der Entwicklung einer E-Commerce-Plattform helfen! Als Fullstack-Entwickler haben wir umfangreiche Erfahrung mit:
- Sicheren Zahlungssystemen
- Warenwirtschaft
- Kundenmanagement
- Mobile-First Design

Für ein individuelles Angebot und detaillierte Beratung kontaktieren Sie uns am besten über unser [KONTAKTFORMULAR]"

Kontext für aktuelle Anfrage: ${context}`;

    // Erstelle die Nachrichtenliste mit Historie
    const messages = [
      { role: "system", content: systemPrompt },
      ...(conversationHistory?.slice(-5) || []),
      { role: "user", content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.5,
      max_tokens: 500,
      presence_penalty: 0.6,
      frequency_penalty: 0.2,
    });

    const reply = completion.choices[0].message.content;

    // Tracking der Token-Nutzung
    await trackUsage({
      clientId: clientId || "phobo",
      tokens: completion.usage?.total_tokens || 0,
      model: "gpt-3.5-turbo",
      requestType: "chat",
    });

    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({
        error: "Es tut uns leid, es gab einen Fehler bei der Verarbeitung.",
      }),
      { status: 500 }
    );
  }
}
