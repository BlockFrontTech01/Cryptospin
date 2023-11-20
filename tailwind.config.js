/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkorchid: "#8101b5",
        black: "#000",
        gray: "rgba(0, 0, 0, 0.5)",
        lime: "#47ff07",
        white: "#fff",
        aqua: "rgba(7, 254, 254, 0.99)",
        gold: "#ffdd07",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        hanuman: "Hanuman",
        "ibarra-real-nova": "'Ibarra Real Nova'",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "21xl": "40px",
        xl: "20px",
        "31xl": "50px",
      },
    },
    fontSize: {
      sm: "14px",
      "7xl": "26px",
      xl: "20px",
      lg: "18px",
      mini: "15px",
      "16xl": "35px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
