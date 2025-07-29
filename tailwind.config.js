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
        moss_green: "#7A9C82", // Primary accent, buttons
        sage_mist: "#D8E4D0", // Backgrounds, cards
        clay_beige: "#EDE6DA", // Section backgrounds, soft contrast
        rose_quartz: "#E9C4C7", // Soft highlights, CTAs
        sky_blue: "#B3D6DD", // Links, secondary accents
        stone_grey: "#3B3B3B", // Main text, footer bg
        cloud_white: "#FAFAF7", // Main background
        forest_shadow: "#4E6151", // Deep contrast, alt CTAs

        // vibrant_green: "#C9FBBC",
        // light_green: "#D9E6D2",
        // dark_green: "#73986C",
        // light_pink: "#F2B7BC",
        // light_grey: "#F9F9F9",
        // dark_grey: "#2E2E2E",
      },
      fontFamily: {
        body: ["Source Sans Pro", "sans-serif"],
        heading: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
