/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#e9ab53",
        "primary-red": "#f15e50",
        "off-white": "#fffdfa",
        "grayish-blue": "#c5c6ce",
        "dark-grayish-blue": "#5d5f79",
        "very-dark-blue": "#00001a",
      },
    },
  },
  plugins: [],
};
