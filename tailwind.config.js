/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    colors: {
      moss: "#8E9F5D",
      "old-gold": "#D3A946",
      "dark-grey": "#393B34",
      platinum: "#E5E3DD",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/sustainability.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Marcellus", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [flowbite.plugin()],
  safelist: [
    "bg-platinum",
    "bg-white",
    "bg-moss",
    "start-curve-divider",
    "end-curve-divider",
  ],
};
