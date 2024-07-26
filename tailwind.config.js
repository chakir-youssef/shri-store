/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        "success":"#59ab6e",
        "tx-light":"#cfd6e1",
        "dark":"#212934",
        "bg-light":"#e9eef5"
      }
    },
  },
  plugins: [],
}

