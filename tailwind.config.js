/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#61227D",
        secondary: "#5E5E5E",
      },
    },
  },
  plugins: [],
};
