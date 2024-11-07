/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#2A2B30",
        secondColor: "#FFE401",
      },
    },
  },
  plugins: [],
};
