import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F5EF",
        ink: "#15130F",
        muted: "#716B60",
        gold: "#B8893B",
        beige: "#E9DFCC",
        ai: "#4EA8FF"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(21, 19, 15, 0.11)",
        glow: "0 0 45px rgba(78, 168, 255, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
