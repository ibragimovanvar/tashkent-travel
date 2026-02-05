/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
      colors: {
        'ocean-blue': '#0F4C81',
        'sunset-gold': '#FFD700',
      },
    },
  },
  plugins: [],
};
