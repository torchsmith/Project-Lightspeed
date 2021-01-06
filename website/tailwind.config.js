module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      accent: {
        DEFAULT: "#6c04fc"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
