import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        floro: {
          canvas: "#FFF9F1",
          surface: "#FFFFFF",
          "surface-soft": "#F4EEE6",
          "surface-muted": "#EFE7DD",
          primary: "#20191C",
          secondary: "#63595C",
          muted: "#807579",
          accent: "#E9005B",
          "accent-hover": "#C9004E",
          "accent-soft": "#FFE4EE",
          border: "#241D20",
          "border-subtle": "#D8CDC7",
          success: "#286342",
          "success-soft": "#E7F3EA",
          warning: "#8A5200",
          "warning-soft": "#FFF1D6",
          error: "#B4233D",
          "error-soft": "#FCE8EC",
          info: "#2459A6",
          "info-soft": "#E8F0FC",
          marigold: "#F2B72F",
          leaf: "#758B32",
          terracotta: "#B84E36",
          indigo: "#2E4D86",
          ink: "#20191C",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'DM Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        devanagari: ["'Noto Sans Devanagari'", "sans-serif"],
      },
      boxShadow: {
        neo: "4px 4px 0 #241D20",
        "neo-hover": "6px 6px 0 #241D20",
        "neo-active": "2px 2px 0 #241D20",
        "neo-pink": "4px 4px 0 #E9005B",
        floating: "0 12px 32px rgba(32,25,28,0.14)",
      },
      borderRadius: {
        control: "8px",
        card: "10px",
        largeCard: "14px",
      },
      maxWidth: {
        container: "1200px",
        reading: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
