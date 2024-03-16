/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'purple':'#8a53b6',
      'pink':'#cea2d0',
      'red':'#8e5b5b',
      'white':'#fff',
      'black':'#000',
      'leftSideBg':'#f3f4f6',
      'drawer':'#cccccc',
      'goalOfJar':'#1b1c21',
      'statsLabel':'#808080',
      'borderBlue':'#57b5f9',
      'borderPink':'#da11ba',
      'incorrect':'#b30953',
      'hover':'#d6d4d4',
      'buttonHover':'3c4043',
      'anotherCard':'#e85e5b',
      'bgFootBut':'#ffffff14',
      'footBorder':'#ffffff66'
      
    },
    extend: {
    
    },
  },
  plugins: [],
}

