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
      },
      colors: {
        'sf-dark': '#374151',    // El azul petróleo del footer y hero
        'sf-teal': '#70b9c1',    // El color de los botones (Ingreso/WhatsApp)
        'sf-gray': '#6b7280',    // Gris para textos secundarios y etiquetas
      },
    },
  },
  plugins: [],
};