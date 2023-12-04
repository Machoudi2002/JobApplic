/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "backColor": "#FFF78A",
      "textColor": "#191919",
      "whiteBack": "#FFFBF5"
    },
    fontFamily: {
      "mainFont": ["Lato"]
    },
    extend: {},
  },
  plugins: [],
}