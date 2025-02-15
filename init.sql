-- Aktiviere die Vector-Erweiterung
CREATE EXTENSION IF NOT EXISTS vector;

-- Dokumente Tabelle mit Embeddings
CREATE TABLE IF NOT EXISTS documents (
    id SERIAL PRIMARY KEY,
    client_id TEXT NOT NULL,
    content TEXT NOT NULL,
    embedding vector(1536),  -- für OpenAI embeddings
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indizes
CREATE INDEX IF NOT EXISTS documents_client_id_idx ON documents(client_id);
CREATE INDEX IF NOT EXISTS documents_embedding_idx ON documents USING ivfflat (embedding vector_cosine_ops); 