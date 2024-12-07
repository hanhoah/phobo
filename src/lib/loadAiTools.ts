export async function loadAiTools(locale: string) {
  try {
    const tools = await import(`@/app/[locale]/ai-tools/json/${locale}.json`);
    return tools.default;
  } catch (error) {
    // Fallback to English
    const tools = await import(`@/app/[locale]/ai-tools/json/en.json`);
    return tools.default;
  }
}
