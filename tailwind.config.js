/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        "success":"#59ab6e",
        "success2":"#69bb7e",
        "tx-light":"#cfd6e1",
        "dark":"#212934",
        "bg-light":"#e9eef5",
        "muted":"#bcbcbc",
        "bg-black":"#1d242d"
      }
    },
  },
  plugins: [],
}

