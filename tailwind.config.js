/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    colors: {
      primary: "#0451A1",
      white: "#FFFFFF",
      black: "#000000",
      dark: "#081735E5",
      red: "#E8503A",
      "light-red": "#EF8373",
      blue: {
        100: "#E7FAFF",
        200: "#CDF4FF",
        300: "#A0D7E7",
        400: "#3F8CFF",
        500: "#1C6EE9",
        600: "#002685",
      },
      "pale-blue": "#0080FF",
      yellow: "#FFCE73",
      "light-yellow": {
        100: "#FFF3DC",
        200: "#FFE2AC",
      },
      grey: {
        100: "#FAFBFF",
        200: "#F9FAFC",
        300: "#E6E8F0",
        400: "#D8DAE5",
        500: "#8F95B2",
      },
    },
    extend: {
      backgroundImage: {
        onboarding: "url('/src/assets/images/onboarding.png')",
      },
      fontSize: {
        "3xl": ["2rem", "40px"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
