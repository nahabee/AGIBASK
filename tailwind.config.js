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

      md: { min: "767px" },
      // => @media (min-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      borderRadius: {
        large: "50px",
      },
      colors: {
        green: {
          dark: "#020f01",
          medium: "#5f745f",
          light: "#91a491",
          gold: "#5e6700",
        },
        blue: {
          dark: "#04151c",
          medium: "",
          light: "#acc4ce",
          gold: "#0a2e33",
        },
      },
      fontFamily: {
        title: ["CabinBold"],
        body: ["Anek"],
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar-hide"), // add this to your plugins
    // ...
  ],
};
