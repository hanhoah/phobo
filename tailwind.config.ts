import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#008C94", // Türkis
        },
        secondary: {
          DEFAULT: "#FF6F61", // Koralle
        },
        accent: {
          DEFAULT: "#FFC107", // Senfgelb
        },
        background: {
          DEFAULT: "#FAF3E0", // Hellbeige
        },
        text: {
          DEFAULT: "#333333", // Dunkelgrau
        },
      },
    },
  },
  plugins: [],
};
export default config;
