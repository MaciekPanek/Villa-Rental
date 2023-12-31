/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 'content', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#EDEDED',
          100: '#dadada',
          200: '#b5b5b5',
          300: '#8f8f8f',
          400: '#6a6a6a',
          500: '#454545',
          600: '#373737',
          700: '#292929',
          800: '#1c1c1c',
          850: '#171717',
          900: '#0e0e0e',
        },
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(400px, 1fr))',
      },
    },
    plugins: [],
  },
};
