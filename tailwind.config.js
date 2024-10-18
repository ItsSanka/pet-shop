/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(/src/Components/Assets/Herro-Banner.png)",
        'banner-pattern': "url(/src/Components/Assets/Banner.jpg)",
        'banner-pattern-yellow': "url(/src/Components/Assets/yellow-banner.jpg)",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    fontFamily: {
      'robo': ['Questrial', 'sans-serif'],
    }
  },
  plugins: [],
}

