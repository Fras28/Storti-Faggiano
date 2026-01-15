/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yanone: ['"Yanone Kaffeesatz"', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'sf-dark': '#374151',
        'sf-teal': '#70b9c1',
        'sf-gray': '#6b7280',
      },
    },
  },
  plugins: [],
};