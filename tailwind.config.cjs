/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Cores Customizadas
        brand: '#2b67f6',
        accent: '#ff6b6b',
        paper: '#fffdf6'
      },
      boxShadow: {
        // Você pode adicionar sombras brutalistas aqui depois se quiser
      }
    },
  },
  plugins: [],
}