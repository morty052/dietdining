/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        baseGreen: '#90c466',
        darkBlue: '#0b0320'
      },
      fontFamily: {
        playfair: ['Playfair', 'serif']
      }
    }
  },
  plugins: []
}
