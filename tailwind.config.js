/** @type {import('tailwindcss').Config} */

import { extendedTheme } from "./src/theme";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: extendedTheme,
  plugins: [],
};
