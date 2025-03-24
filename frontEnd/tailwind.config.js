
/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['"Open Sans"', 'sans-serif'],
          'serif': ['"Playfair Display"', 'serif'],
        },
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["dark"], // Enable dark theme
      },
  }