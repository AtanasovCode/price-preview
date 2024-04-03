/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(240, 78%, 98%)",
        lightGrayishBlue: "hsl(234, 14%, 74%)",
        text: "hsl(233, 13%, 49%)",
        premiumCard: "hsl(232, 13%, 33%)",
      },
      fontFamily: {
        sans: "Montserrat",
      }
    },
  },
  plugins: [],
}