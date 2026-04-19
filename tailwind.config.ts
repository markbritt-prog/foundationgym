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
          // Secondary palette — canonical TMRW hexes
          syringe: "#E61317",      // Syringe Red
          infusion: "#E4A30B",     // Infusion Yellow (PRIMARY ACCENT)
          blood: "#500000",        // Blood Red
          electric: "#2339FF",     // Electric Blue
          toxic: "#00E755",        // Toxic Green
          // Tertiary palette — rarely used
          alert: "#FF3300",        // Alert Orange
          serum: "#FCE369",        // Serum Yellow
          vitality: "#FF9335",     // Vitality Orange
          deeplab: "#000B70",      // Deep Lab Blue
          tonic: "#003D1C",        // Tonic Green
          infusionSoft: "#F4E4B9", // Tinted background variant
        },
      },
      fontFamily: {
        display: ["ApocRevelations", "serif"],
        body: ["var(--font-crimson)", "serif"],
        ui: ["Brown", "sans-serif"],
      },
      keyframes: {
        "pulse-scroll": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "pulse-scroll": "pulse-scroll 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
