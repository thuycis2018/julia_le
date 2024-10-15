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
          5: '#814C44', /* #3F5E3B */
          6: '#866555' /* #82b44a */
        },
        brown: {
          1: '#52231C', /* #403434 #866555 #381813 #B3824C #3D1A15 */
          2: '#662C23'
        },
        blue:{
          1: '#0276b1',
          2: '#1b365d',
        },
        clipPath: {
          'custom-comment-box': 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);',
        },
        keyframes: {
          slideIn: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        animation: {
          slideIn: 'slideIn 1s ease-in-out forwards',
        },
      },
    },
  },
  plugins: [],
}
