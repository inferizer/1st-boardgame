/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      primary: "#08275C",
      secondary: "#0284C7",
      grey: "#969696",
      greyLight: "#E9E9E9",
      red: "#900",
      red500: "#ef4444",
      red300: "#fca5a5",
    },
    extend: {
      fontFamily: {
        CopperplateGothic: ["Copperplate Gothic", "serif"],
      },
    },
  },
  plugins: [],
};
