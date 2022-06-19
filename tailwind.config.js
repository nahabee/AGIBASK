module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xs: { min: "1023px" },
      // => @media (min-width: 769px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        green: {
          dark: "#1d231d",
          medium: "#5f745f",
          light: "#91a491",
        },
        blue: {
          dark: "#294552",
          medium: "#597884",
          light: "#acc4ce",
        },
      },
      fontFamily: {
        title: ["CabinBold"],
        body: ["MLight"],
      },
    },
  },
  plugins: [],
};
