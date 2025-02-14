-- Aktiviere die Vector-Erweiterung
CREATE EXTENSION IF NOT EXISTS vector;

-- Clients Tabelle
CREATE TABLE IF NOT EXISTS clients (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Dokumente Tabelle mit Embeddings
CREATE TABLE IF NOT EXISTS documents (
    id SERIAL PRIMARY KEY,
    client_id TEXT NOT NULL,
    content TEXT NOT NULL,
    embedding vector(1536),  -- für OpenAI embeddings
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Usage Logs
CREATE TABLE IF NOT EXISTS usage_logs (
    id SERIAL PRIMARY KEY,
    client_id TEXT REFERENCES clients(id),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    tokens INTEGER NOT NULL,
    cost DECIMAL(10,4) NOT NULL,
    model TEXT NOT NULL,
    request_type TEXT NOT NULL,
    CONSTRAINT valid_request_type CHECK (request_type IN ('chat', 'embedding'))
);

-- Funktion für Ähnlichkeitssuche
CREATE OR REPLACE FUNCTION match_documents(
    query_embedding vector(1536),
    match_threshold FLOAT,
    match_count INT,
    in_client_id TEXT
)
RETURNS TABLE (
    id INT,
    content TEXT,
    similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        documents.id,
        documents.content,
        1 - (documents.embedding <=> query_embedding) AS similarity
    FROM documents
    WHERE 
        documents.client_id = in_client_id
        AND 1 - (documents.embedding <=> query_embedding) > match_threshold
    ORDER BY similarity DESC
    LIMIT match_count;
END;
$$;

-- Index für schnellere Ähnlichkeitssuche
CREATE INDEX IF NOT EXISTS documents_client_id_idx ON documents(client_id);
CREATE INDEX IF NOT EXISTS documents_embedding_idx ON documents USING ivfflat (embedding vector_cosine_ops); 