/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1150px',
      xl: '1440px'
    },
    extend: {
      colors: {
        orange: '#FF934F',
        navy: '#1F0812',
        baseBlue: '#53599A',
        lightBlue: '#6D9DC5',
        vLightBlue: '#DFF3E4'
      }
    },
  },
  plugins: [],
}