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

    // Wenn nach Team-Mitgliedern gefragt wird
    if (
      query.toLowerCase().includes("wer ist") ||
      query.toLowerCase().includes("team")
    ) {
      const result = await db.query(
        `SELECT content, 1 - (embedding <-> $1) as similarity 
         FROM documents 
         WHERE client_id = $2
         AND (metadata->>'type' = 'team_member' OR metadata->>'type' = 'team_info')
         ORDER BY similarity DESC 
         LIMIT 10`,
        [embedding, clientId]
      );
      return result.rows;
    }

    // Normale Suche
    const result = await db.query(
      `SELECT content, 1 - (embedding <-> $1) as similarity 
       FROM documents 
       WHERE client_id = $2
       ORDER BY similarity DESC 
       LIMIT 10`,
      [embedding, clientId]
    );

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
