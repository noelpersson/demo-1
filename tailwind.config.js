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
    borderRadius: {
      'large': '1.5rem',
    },

    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1440px',

    },

    spacing: {
      '70' : '17.5rem',
      '72' : '18rem',
      '74' : '18.5rem',
      '76' : '19rem',
      '78' : '22rem',
      '80' : '20rem',
      '82' : '20.5rem',
      '84' : '21rem',
      '86' : '28.5rem',
    },

    colors: {
      'primary': '#000000',
      'secondary': '#F7CF00',
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
