/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColors: "#8873ef",
        headingColors: "#081e21",
        smallTextColors: "#193256",
      },
    },
  },
  plugins: [],
};
