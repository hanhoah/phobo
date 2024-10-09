import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		colors: {
  			accent: {
  				DEFAULT: '#FFDA78'
  			},
  			secondary: {
  				DEFAULT: '#2A629A'
  			},
  			primary: {
  				DEFAULT: '#FF7F3E'
  			},
  			background: {
  				DEFAULT: '#003285'
  			},
  			text: {
  				DEFAULT: '#292b32'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
