import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'school-blue': '#005A9C',
        'success-green': '#28A745',
        'notice-yellow': '#FFC107',
        'dark-charcoal': '#333333',
        'light-gray': '#F8F9FA',
        'subtle-gray': '#DEE2E6',
      },
      fontFamily: {
        kalpurush: ['Kalpurush', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;