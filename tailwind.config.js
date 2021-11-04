const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      customGray: {
        light: "#fafafb",
        light1: "#f2f2f2",
        normal: "#F6F8FB",
        dark: "#E0E0E0",
      },
      blue: {
        shade1: "#2F80ED",
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      custom: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      none: "none",
    },
    fontFamily: {
      sans: ["Poppins, sans-serif"],
    },

    extend: {
      colors: {
        white: "#fff",
        dark_text: "#4f4f4f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
