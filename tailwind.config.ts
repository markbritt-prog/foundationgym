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
            700: "#3C3C3C",
            800: "#252525",
            900: "#1B1B1B",
          },
          syringe: "#E61317",
          blood: "#500000",
          toxic: "#39FF14",
          infusion: "#E4A30B",
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
