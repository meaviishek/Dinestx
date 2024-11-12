/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        museo:["MuseoModerno","sans-serif"],
        poppins:["Poppins","sans-serif"],

      },
      animation: {
        rotate: 'rotate 1s linear infinite',
        'border': 'border 4s linear infinite',
        animation: {
          fadeIn: 'fadeIn 1s ease-in-out',
        },
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'border': {
                    to: { '--border-angle': '360deg' },
                }
      },
    },
  },
  plugins: [],
}

