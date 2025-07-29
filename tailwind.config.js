/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // se usares o app router
  ],
  theme: {
    extend: {
      colors: {
        vibrant_green: "#C9FBBC",
        light_green: "#D9E6D2",
        dark_green: "#73986C",
        light_pink: "#F2B7BC",
        light_grey: "#F9F9F9",
        dark_grey: "#2E2E2E",
      },
      fontFamily: {
        body: ["Source Sans Pro", "sans-serif"],
        heading: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
