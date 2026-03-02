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
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        accent: {
          warm: "#f59e0b",
          coral: "#fb7185",
          sky: "#38bdf8",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 14px 0 rgba(0, 0, 0, 0.06)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        cardHover: "0 12px 40px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
        "bounce-in": "bounceIn 0.5s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "scale-in": "scaleIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideInRight: { "0%": { opacity: "0", transform: "translateX(16px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        bounceIn: { "0%": { opacity: "0", transform: "scale(0.9)" }, "60%": { transform: "scale(1.02)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        pulseSoft: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.85" } },
        scaleIn: { "0%": { opacity: "0", transform: "scale(0.95)" }, "100%": { opacity: "1", transform: "scale(1)" } },
      },
      transitionDelay: {
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
      },
    },
  },
  plugins: [],
};
export default config;
