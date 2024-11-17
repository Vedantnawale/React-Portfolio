/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Use the 'class' strategy for toggling,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      fadeInSlideUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeInSlideUp: 'fadeInSlideUp 2s ease-out forwards',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark', 'night'], // Add "dark" and "night" themes
  },
}