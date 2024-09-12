/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          1: '#15372c',
          2: '#008561',
          3: '#080561',
          4: '#93B78C',
          5: '#3F5E3B'
        },
        brown: {
          1: '#403434'
        }
      },
    },
  },
  plugins: [],
}
