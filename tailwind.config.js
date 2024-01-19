/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['inter']
      },
      colors : {
        "ungu": "#5D50C6",
        "pink": "#F85E9F",
        "orange": "#FF5722", 
        "gray": "#607274"
      }
    },
  },
  plugins: [],
}

