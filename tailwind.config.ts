import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#FFDA78", // yellow
        },
        secondary: {
          DEFAULT: "#2A629A", // hellblau
        },
        primary: {
          DEFAULT: "#FF7F3E", // orange
        },
        background: {
          DEFAULT: "#003285", // navyblue
        },
        text: {
          DEFAULT: "#292b32", // Dunkelgrau
        },
      },
    },
  },
  plugins: [],
};
export default config;
