/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { extend: {
    dropShadow: {
      'small': '0 10px 8px  rgb(252, 217, 189, 0.95)',
      'small2': '0 10px 8px  rgb(167, 243 ,208 , 0.8)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    },
    colors: {
      'primary': '#F2B807',
      'secondary': '#F29F05',
      'orange': '#F2911B',
      'gray2': '#F2F2F2',
      'black': '#0D0D0D',
    },
    keyframes: {
      bounce2:{
        '0%' :{
          transform: 'translateY(0px)',
          // boxShadow: '15px 35px 60px -15px rgba(0,0,0,.6)',
        },
        '50%' :{
          transform: 'translateY(20px)',
          // boxShadow: '15px 35px 60px -15px rgba(0,0,0,.3)',
        },
        '100%' :{
          transform: 'translateY(0px)',
          // boxShadow: '15px 35px 60px -15px rgba(0,0,0,.6)',
        },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      Hover:'bounce2 6s ease-in-out infinite'
    },
    objectPosition: {
    'center-bottom': '50% 70%',
    }
  }
},
 
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
