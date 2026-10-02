/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gmob: {
          red: "#d12a2a",
          "red-hover": "#B81D1D",
          dark: "#1C1C1C",
          "dark-hover": "#2E2E2E",
          gray: "#6B7280",
          light: "#F7F7F9",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 10px 25px -5px rgba(217, 37, 37, 0.4)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}