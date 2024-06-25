/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors:{
        purple:'hsl(259, 100%, 65%)',
        lightred: 'hsl(0, 100%, 67%)',
        lightgrey: 'hsl(0, 0%, 86%)',
        smokeygrey: 'hsl(0, 1%, 44%)',
        offblack: 'hsl(0, 0%, 8%)',
      }
    },
  },
  plugins: [],
}

