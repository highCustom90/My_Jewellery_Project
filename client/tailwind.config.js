/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': "#183e40",
        'solid-gray': "#f8f8f8",
        'about-color': "#ece2df"
      }
    },
    screens: {
      'sm': '400px',
      'mdi': '768px',
      'lg': '991px',
    },

  },
  plugins: [
    require('daisyui'),
    // require('@tailwindcss/forms'),
  ],
} 