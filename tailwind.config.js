/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#011825",
        secondary: "#F0EFEB",
        tertiary: "#0D3056",
        quaternary: "#1689C8",
      },
      height: {
        'hero': '200vh',
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      keyframes: {
        textRotate1: {
          '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
        },
        textRotate2: {
          '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        },
      },
      animation: {
        textRotate1: 'textRotate1 2.4s infinite alternate',
        textRotate2: 'textRotate2 2.4s infinite alternate',
      },
      boxShadow: {
        'img': '0 0 10px 5px rgba(255, 255, 255, 0.2), 0 0 20px 5px rgba(255, 255, 255, 0.19)',
      },
      cursor: {
        'voyager': 'url(./logo.svg), pointer',
      }
    },
  },
  plugins: [],
}

