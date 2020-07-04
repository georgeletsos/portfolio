const red = "#f46c6c";
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          "100": "#f4f5f7",
          "200": "#e5e7eb",
          "400": "#9fa6b2",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#252f3f",
          "900": "#161e2e"
        },
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
      }
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    textDecoration: false
  }
};
