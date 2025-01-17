import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Adding custom font MarlideDisplay
        marlide: ['"Marlide Display"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
