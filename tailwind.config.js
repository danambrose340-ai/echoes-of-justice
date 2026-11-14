/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'justice-black': '#0A0A0A',
        'justice-charcoal': '#1A1A1A',
        'deep-red': '#B30000',
        'justice-gray': '#707076',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
};