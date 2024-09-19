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
          5: '#B3824C', /* #3F5E3B */
          6: '#866555' /* #82b44a */
        },
        brown: {
          1: '#381813', /* #403434 #866555 */
          2: '#B3824C'
        },
        blue:{
          1: '#0276b1',
          2: '#1b365d',
        }
      },
    },
  },
  plugins: [],
}
