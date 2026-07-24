import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E8",
        ink: "#1B1813",
        muted: "#6E675A",
        gold: "#A98248",
        beige: "#E6D9C4",
        ai: "#8A9A86"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(27, 24, 19, 0.10)",
        glow: "0 0 45px rgba(169, 130, 72, 0.20)"
      }
    }
  },
  plugins: []
};

export default config;
