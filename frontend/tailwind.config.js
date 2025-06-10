/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        thin: ["Poppins_100Thin"],
        extralight: ["Poppins_200ExtraLight"],
        light: ["Poppins_300Light"],
        regular: ["Poppins_400Regular"],
        medium: ["Poppins_500Medium"],
        semibold: ["Poppins_600SemiBold"],
        bold: ["Poppins_700Bold"],
        extrabold: ["Poppins_800ExtraBold"],
        black: ["Poppins_900Black"],
      },
      colors: {
        background: "#DAD7CD",
        secondary: "#A3B18A",
        primary: {
          DEFAULT: "#588157",
          dark: "#3A5A40",
          darker: "#344E41",
        },
        danger: "#80171A",
        stone: {
          100: "#DAD7CD",
        },
        green: {
          200: "#A3B18A",
          600: "#588157",
          700: "#3A5A40",
          800: "#344E41",
        },
        red: {
          800: "#80171A",
        },
      },
      backgroundColor: {
        DEFAULT: "#DAD7CD",
        primary: "#588157",
        secondary: "#A3B18A",
        danger: "#80171A",
        "primary-dark": "#3A5A40",
        "primary-darker": "#344E41",
      },
      textColor: {
        DEFAULT: "#344E41",
        primary: "#588157",
        secondary: "#A3B18A",
        danger: "#80171A",
        inverted: "#DAD7CD",
      },
      borderColor: {
        DEFAULT: "#A3B18A",
        primary: "#588157",
        secondary: "#A3B18A",
        danger: "#80171A",
        dark: "#3A5A40",
      },
    },
  },
  plugins: [],
};
