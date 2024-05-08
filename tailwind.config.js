/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans Thai', 'sans-serif'],
      },
      colors: {
        'status-active': '#B0FC38',
        'second-gradient': '#F0EAF4',
        'third-gradient': '#EED9F1',
        'fourth-gradient': '#AB81F7',
        'last-gradient': '#1D2B64',
      },
      gradientColorStopPositions: {
        20: '20%',
        40: '40',
        60: '60',
        80: '80',
      },
    },
  },
  plugins: [],
};
