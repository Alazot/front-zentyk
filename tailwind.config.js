/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Escanea todos los archivos de páginas
    './components/**/*.{js,ts,jsx,tsx}', // Escanea componentes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3F', // Azul oscuro, profesional
        secondary: '#00D1FF', // Verde/Celeste moderno
        accent: '#FFD700', // Dorado, alto impacto
        background: '#F5F7FA', // Fondo neutro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        bounceSlow: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      screens: {
        xs: '480px', // Para móviles pequeños
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
