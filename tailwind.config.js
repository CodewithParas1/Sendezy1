/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include all JSX/TSX files
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"], // Add Lexend font
      },
    },
  },
  plugins: [],
};
