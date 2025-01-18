import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Adding custom font MarlideDisplay
        marlide: ["Marlide Display", ...defaultTheme.fontFamily.sans],
        eb_garamond: ["EB Garamond"]
      },
    },
  },
  plugins: [],
};
