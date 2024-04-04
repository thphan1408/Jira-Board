/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#635fc7',
        secondary: '#ff6363',
        third: '#364e7e1a',
        dark: '#20212c',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar-hide')],
}
