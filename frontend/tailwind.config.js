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
      fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        "2xl": 24,
        "3xl": 30,
        "4xl": 36,
        "5xl": 48,
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
        blue: {
          200: "#99D1FF"
        },
        green: {
          200: "#A3B18A",
          600: "#588157",
          700: "#3A5A40",
          800: "#344E41",
        },
        red: {
          200: "#FF8888",
          800: "#80171A",
        },
        gray: {
          100: "#C3C3C3",
          300: "#606060",
          800:  "#5f5f5f"
        },
        black: {
          100: "#1d1d1d",
        },
        brown: {
          600: "#92643D"
        },
        pink: {
          200: "#FFAED5"
        },
        purple: {
          200: "#E3CCFF"
        },
      },
      backgroundColor: {
        DEFAULT: "#F6F6F6",
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
