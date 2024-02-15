/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {},
      spacing: {
        "10rem": "10rem",
        "15rem": "15rem",
        "20rem": "20rem",
        "25rem": "25rem",
        "30rem": "30rem",
        "35rem": "35rem",
        "38rem": "38rem",
        "50rem": "40rem",
        "40rem": "50rem",
        "60rem": "60rem",
        "30%": "30%",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Playfair: ["Playfair", "serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
