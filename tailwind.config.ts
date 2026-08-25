import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#7C3AED",
        accent: "#F97316",
        highlight: "#FACC15",
        background: "#EFF6FF",
        cream: "#EFF6FF",
        ink: "#172554",
        muted: "#475569",
        gold: "#F97316",
        beige: "#DBEAFE",
        ai: "#7C3AED"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(37, 99, 235, 0.14)",
        glow: "0 0 45px rgba(124, 58, 237, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
