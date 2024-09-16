import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fec50d", // gelb vom logo
        secondary: "#123f90", // blau vom logo
      },
    },
  },
  plugins: [],
};
export default config;
