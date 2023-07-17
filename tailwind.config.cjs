/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",

        // ...defaultTheme.screens,
      },
      colors: {
        mediumGray: "#A1ACB8",
        dimGray: "#1A1B1C",
        primaryOrange: "#EC6348",
      },
    },
  },
  plugins: [],
};
