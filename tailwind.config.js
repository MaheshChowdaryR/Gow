/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGreen: '#2ecc71',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
