/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true
    },
    colors: {
      "moss": "#8E9F5D",
      "old-gold": "#D3A946",
      "dark-grey": "#393B34",
      "platinum": "#E5E3DD",
      "white": "#ffffff",
    },
    extend: {
      backgroundImage: {
        "hero": "url('/sustainability.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'sans': ['Marcellus', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
