/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '767px',
      lg: '1150px',
      xl: '1440px'
    },
    extend: {
      colors: {
        black1: '#101216',
        orange: '#FF934F',
        navy: '#1F0812',
        baseBlue: '#53599A',
        lightBlue: '#6D9DC5',
        vLightBlue: '#DFF3E4',
        glowGreen: '#38b58e',
        grey1: '#cfd3d2',
        darkGrey: '#424041',
        microRed: '#f01830',
        ultraBlue: '#1818d8',
        myogaPurple: '#d81890',
        vibrantPurple: '#a818d8'
      }
    },
  },
  plugins: [],
}