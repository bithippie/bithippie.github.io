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
      // v2 rebrand palette. Old names below are still live on unmigrated pages
      // and get deleted once the last one is ported.
      cream: "#fffce9",
      panel: "#f6f3df",
      ink: "#393b34",
      "ink-body": "#4a4d43",
      "ink-muted": "#5c6052",
      olive: "#8ea05c",
      rust: "#a55c36",
      amber: "#f8a825",
      night: "#22241e",
      "night-text": "#b6bba6",
      "night-link": "#cfd3bd",
      "night-faint": "#7d826f",

      moss: "#8E9F5D",
      "old-gold": "#D3A946",
      "dark-grey": "#393B34",
      platinum: "#E5E3DD",
      white: "#ffffff",
      "warm-white": "#fdfcfb",
    },
    extend: {
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/assets/images/home/hero.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Marcellus", ...defaultTheme.fontFamily.sans],
        merriweather: ["var(--font-merriweather)", ...defaultTheme.fontFamily.serif],
        garamond: ["var(--font-eb-garamond)", ...defaultTheme.fontFamily.serif],
        // v2: grotesk = display, plex = body, mono = eyebrow labels
        grotesk: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
        plex: ["var(--font-plex-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-plex-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [flowbite.plugin()],
  safelist: [
    "bg-platinum",
    "bg-white",
    "bg-moss",
    "bg-dark-grey",
    "bg-warm-white",
    "start-curve-divider",
    "end-curve-divider",
  ],
};
