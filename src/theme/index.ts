const defaultTheme = require("tailwindcss/defaultTheme");

export const extendedTheme = {
  extend: {
    ...defaultTheme,
    fontFamily: {
      main: ["var(--font-ubuntu)", defaultTheme.fontFamily.sans], // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
    },
    colors: {
      newblue: "yellow",
    },
  },
};
