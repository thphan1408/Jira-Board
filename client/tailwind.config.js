/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Màu xám nhạt
        lightGray: '#f4f5f7',
        // Màu xanh dương
        blue: '#0747a6',
        // Màu xanh nước biển
        aquamarine: '#A0E9FF',
        // Màu xanh nhạt
        paleGreen: '#CDF5FD',
        // Màu trắng
        white: '#FFFFFF',
        // Màu đen
        black: '#000000',
        // Màu chữ
        fontColor: '#42526e',
        blueGray: '#1c63ce',

        // active background color
        grayActive: 'rgba(var(--background-gray-active) / 1)',
        // active font color
        fontActive: 'rgba(var(--font-color-active) / 1)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
