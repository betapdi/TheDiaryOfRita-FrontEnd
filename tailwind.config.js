/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // ...
        'korone-pink': {
          DEFAULT: '#FCD8D4',
        },
  
        'korone-skin': {
          light: '#FDF6F0',
          DEFAULT: '#F8E2CF',
          dark: '#F5C6AA',
        },
      },
    },
  },
  plugins: [],
}