/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#11A3AC", // Orange
      
      },
      fontFamily: {
        firacode: ["Fira Code", "monospace"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        "max-900": { max: "900px" }, // Custom breakpoint for max-width 900px
        "max-600": { max: "600px" }, // Custom breakpoint for max-width 600px
        "max-1200": { max: "1200px" }, // Custom breakpoint for max-width 1200px
        "max-1300": { max: "1300px" }, // Custom breakpoint for max-width 1200px
        "min-1300": { min: "1300px" }, // Custom breakpoint for min-width 1200px
      },
    },
  },
  plugins: [],
};
