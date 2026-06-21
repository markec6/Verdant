/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
      },
      fontFamily: {
        heading: [
          "var(--font-heading)",
          "Outfit",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        forest: "#2D5A27",
        ink: "#12200F",
        sage: "#F4F7F2",
      },
      letterSpacing: {
        tight: "-0.02em",
      },
      lineHeight: {
        tight: "1.1",
      },
    },
  },
  plugins: [],
};
