const red = "#f46c6c";
const { colors, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          "500": red
        }
      },
      width: {
        "9": "2.25rem"
      },
      height: {
        "9": "2.25rem"
      },
      boxShadow: {
        "border-red": `0 0 0 2px ${red}`,
        "red-outline": `0 0 0 3px ${red}80`
      },
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    textDecoration: false
  }
};
