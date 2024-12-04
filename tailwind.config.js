/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'red': '#F6A1A3',
      'orange': '#fdf2ec',
      'orange-dark': '#f28443',
      'turkis-dark': '#0EAAA7',
      'red-dark': '#FD605F',
      'gray': '#707070',
      'turkis': '#8BD2D0',
      'green': '#70DFA4',
      'green-dark': '#05B657',
      'gray-light': '#f1f5fd',
      'green-light': '#D6F2E0',
      'turkis-light': '#D4F4F1',
      'red-light': '#F7DCDD',
    },},
  },
  plugins: [],
}