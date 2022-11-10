/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#002F6C",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
