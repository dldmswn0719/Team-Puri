/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts}"],
  darkMode : "class",
  theme: {
    screens : {
      'sm' : {'max' : '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px'}
    },
    extend: {},
  },
  plugins: [],
} 
