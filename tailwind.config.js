/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'china-red': '#C41E3A',
        'china-red-dark': '#A01830',
        'china-red-light': '#E8334D',
        'deep-blue': '#1B2A4A',
        'deep-blue-light': '#2A3F6B',
        'gold': '#D4A843',
        'gold-light': '#E8C86A',
        'cream': '#FFF8F0',
        'warm-gray': '#F5F0EB',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
