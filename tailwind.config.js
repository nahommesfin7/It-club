/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'text': '#e3f2f2',
        'background': '#020303',
        'primary': '#5becec',
        'secondary': '#042525',
        'accent': '#1adbdb',
       },
    },
  },
  plugins: [],
}


