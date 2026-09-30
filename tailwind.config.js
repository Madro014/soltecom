/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008744',
          dark: '#005f30',
          light: '#10a359',
          fixed: '#52d98a',
        },
        secondary: {
          DEFAULT: '#1e3a5f',
          dark: '#0f2038',
          darker: '#0a1626',
          deep: '#070f1a',
          light: '#3b82f6',
        },
        surface: {
          DEFAULT: '#faf8ff',
          low: '#f2f3ff',
          high: '#e2e7ff',
          highest: '#dae2fd',
          dark: '#131b2e',
          inverse: '#283044',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
