import { db } from "./db";

interface UsageLog {
  clientId: string;
  tokens: number;
  model: string;
  requestType: string;
}

function calculateCost(tokens: number, model: string): number {
  // Kosten pro 1000 Token in USD
  const costPer1K: { [key: string]: number } = {
    "gpt-4": 0.03,
    "gpt-3.5-turbo": 0.002,
    "text-embedding-ada-002": 0.0001,
  };

  // Standardkosten falls Modell nicht bekannt
  const costPerToken = (costPer1K[model] || 0.002) / 1000;
  return tokens * costPerToken;
}

export async function trackUsage({
  clientId,
  tokens,
  model,
  requestType,
}: UsageLog) {
  const cost = calculateCost(tokens, model);

  return db.query(
    `INSERT INTO usage_logs (client_id, tokens, cost, model, request_type) 
     VALUES ($1, $2, $3, $4, $5)`,
    [clientId, tokens, cost, model, requestType]
  );
}

export async function getClientUsage(
  clientId: string,
  period: "day" | "month" | "year"
) {
  const periodMap = {
    day: "interval '1 day'",
    month: "interval '1 month'",
    year: "interval '1 year'",
  };

  const result = await db.query(
    `SELECT 
      SUM(tokens) as total_tokens,
      SUM(cost) as total_cost,
      COUNT(*) as total_requests
     FROM usage_logs
     WHERE client_id = $1
     AND timestamp > NOW() - ${periodMap[period]}`,
    [clientId]
  );

  return result.rows[0];
}
