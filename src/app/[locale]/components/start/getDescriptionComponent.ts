export function getDescriptionComponent(locale: string) {
  switch (locale) {
    case "de":
      return require("./Description.de").default;
    case "en":
      return require("./Description.en").default;
    case "ja":
      return require("./Description.ja").default;
    case "vi":
      return require("./Description.vi").default;
    case "zh":
      return require("./Description.zh").default;
    default:
      return require("./Description.en").default; // Fallback
  }
}
