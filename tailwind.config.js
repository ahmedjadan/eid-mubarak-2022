const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Aref Ruqaa', ...defaultTheme.fontFamily.sans],
        baloo: ['Baloo Bhaijaan 2'],
        Aref: ['Aref Ruqaa'],
        messiri: ['El Messiri'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
