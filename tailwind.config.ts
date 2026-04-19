import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tmrw: {
          white: "#FFFFFF",
          black: "#000000",
          grey: {
            50: "#F7F7F7",
            100: "#F0F0F0",
            200: "#E4E4E4",
            300: "#D9D9D9",
            400: "#B8B8B8",
            500: "#8A8A8A",
            600: "#5C5C5C",
            700: "#3C3C3C",
            800: "#252525",
            900: "#1B1B1B",
          },
          syringe: "#E61317",
          blood: "#500000",
          vitality: "#3F6B4A",
          infusion: "#E4A30B",
          infusionSoft: "#F4E4B9",
        },
      },
      fontFamily: {
        display: ["ApocRevelations", "serif"],
        body: ["var(--font-crimson)", "serif"],
        ui: ["Brown", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
