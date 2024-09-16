/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        special: ['"Special Elite"', 'sans-serif'],
      },
      colors: {
        'custom-green': '#b8ff9f',
      },
    },
  },
  plugins: [],
};
