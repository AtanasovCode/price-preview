/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#042f2e",
        'text': "#e0f2fe",
        'text-accent': "#7dd3fc",
        'text-pro-card': "#042f2e", 
        'toggle-bg': "#a5f3fc",
        'toggle': "#042f2e",
        'card-pro': "#38bdf8",
        'card': "#134e4a",
        'btn-gradient-start': "#0284c7",
        'btn-gradient-end': "#0369a1",
        'btn-pro-gradient-start': "#075985",
        'btn-pro-gradient-end': "#082f49",
      },
      fontFamily: {
        sans: "Montserrat",
      },
      screens: {
        'sm': "540px",
        'md': "925px",
      }
    },
  },
  plugins: [],
}