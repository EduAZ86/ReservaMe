import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        metropolisExtraLight: ["var(--font-metropolis-extralight)"],
        metropolisLight: ["var(--font-metropolis-light)"],
        metropolisRegular: ["var(--font-metropolis-regular)"],
        metropolisSemiBold: ["var(--font-metropolis-semibold)"],
        metropolisBold: ["var(--font-metropolis-bold)"],
        metropolisRegularItalic: ["var(--font-metropolis-regular-italic)"],
      },
      colors: {
        light: {
          'primary': '#DB3022',
          'secondary': '#FFFFFF',
          'background': '#F9F9F9',
          'acent': '#9B9B9B',
          'text': '#222222',
          'error': '#F01F0E',
          'success': '#2AA952'
        },
        dark: {
          'primary': '#DB3022',
          'secondary': '#FFFFFF',
          'background': '#F9F9F9',
          'acent': '#9B9B9B',
          'text': '#222222',
          'error': '#F01F0E',
          'success': '#2AA952'
        }
      },
    },
  },
  plugins: [],
};
export default config;
