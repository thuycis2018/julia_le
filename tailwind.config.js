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
            3: '#080561'
        },
      },
    },
  },
  plugins: [],
}
