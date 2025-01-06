/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.60rem",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Remplace la police par défaut
      },
      spacing: {
        '185px': '185px',
      },
      colors: {
        primary: "#121317",
        secondary: "#1a1d27",
        tertiary: "#292c38",
        fourly: "#3B5ED1",
        fively: "#828693"
      },
    },
  },
  plugins: [],
};


