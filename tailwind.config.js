/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html",
            "./src/**/*.js"
],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [],
}
