/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/*.{js,ts,jsx,tsx}',
  './Components/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0D1317',
        'cultured': '#EFEFEF',
        'strong-cyan': '#2EC4B6',
        'vivid-red': '#E71D36',
        'french-blue': '#1C77C3',
      },
    },
  },
  plugins: [],
}
