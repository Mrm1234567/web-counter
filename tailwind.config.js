/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'saira-semi-condensed': ['Saira Semi Condensed', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
};
