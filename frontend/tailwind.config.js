/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        vsml : '320px',
      }
    },
  },
  plugins: [],
}

