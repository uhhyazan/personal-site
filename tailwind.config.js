/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'kinda-yellow' : '#202004',
        'slate-500': '#6C7B91',
        'slate-600': '#475569'
      }


    },
  },
  plugins: [],
}
