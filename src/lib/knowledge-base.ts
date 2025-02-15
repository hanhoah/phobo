import OpenAI from "openai";
import { db } from "./db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function addDocument(
  clientId: string,
  content: string,
  metadata = {}
) {
  try {
    const embedding = await createEmbedding(content);

    await db.query(
      `INSERT INTO documents (client_id, content, embedding, metadata) 
       VALUES ($1, $2, $3, $4)`,
      [clientId, content, embedding, metadata]
    );

    console.log("Document added successfully");
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
}

export async function searchDocuments(query: string, clientId: string) {
  try {
    const embedding = await createEmbedding(query);
    const normalizedQuery = query.toLowerCase().trim();

    // Direkte Suche nach Team-Mitgliedern
    const teamMembers = [
      "hai pham",
      "han hoa",
      "sergio",
      "seki",
      "team",
      "mitarbeiter",
      "gründer",
    ];

    if (teamMembers.some((member) => normalizedQuery.includes(member))) {
      const result = await db.query(
        `SELECT content, 1 as similarity 
         FROM documents 
         WHERE client_id = $1
         AND (
           metadata->>'type' = 'team_member' 
           OR metadata->>'type' = 'team_info'
           OR LOWER(content) LIKE '%' || $2 || '%'
         )
         ORDER BY 
           CASE 
             WHEN metadata->>'type' = 'team_member' THEN 0
             WHEN metadata->>'type' = 'team_info' THEN 1
             ELSE 2
           END,
           similarity DESC 
         LIMIT 3`,
        [clientId, normalizedQuery]
      );

      if (result.rows.length > 0) {
        return result.rows;
      }
    }

    // Normale semantische Suche mit höherem Schwellenwert
    const result = await db.query(
      `SELECT content, 1 - (embedding <-> $1) as similarity 
       FROM documents 
       WHERE client_id = $2
       AND 1 - (embedding <-> $1) > 0.75
       ORDER BY similarity DESC 
       LIMIT 3`,
      [embedding, clientId]
    );

    // Wenn keine Ergebnisse gefunden wurden, versuche es mit einem niedrigeren Schwellenwert
    if (result.rows.length === 0) {
      const fallbackResult = await db.query(
        `SELECT content, 1 - (embedding <-> $1) as similarity 
         FROM documents 
         WHERE client_id = $2
         AND 1 - (embedding <-> $1) > 0.6
         ORDER BY similarity DESC 
         LIMIT 2`,
        [embedding, clientId]
      );
      return fallbackResult.rows;
    }

    return result.rows;
  } catch (error) {
    console.error("Error searching documents:", error);
    return [];
  }
}

async function createEmbedding(text: string) {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text,
    });

    // Konvertiere das Array in das korrekte PostgreSQL-Vektorformat
    const embedding = `[${response.data[0].embedding.toString()}]`;
    return embedding;
  } catch (error) {
    console.error("Error creating embedding:", error);
    return "[]"; // Leerer Vektor als Fallback
  }
}
