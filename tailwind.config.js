/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand: navy + sunrise orange (from the BSUSA emblem)
        navy: {
          DEFAULT: '#1B365D',
          dark: '#10233F',
          light: '#2A4A78',
        },
        sunrise: {
          DEFAULT: '#E07A2E',
          dark: '#B5571A', // text-safe orange on white
          deep: '#9A4A16', // text on sunrise-tint
          light: '#F2A266', // orange text on navy
          tint: '#FCEFE4',
        },
        mist: '#F3F5F8', // light section background
        line: '#E3E7ED', // borders
        ink: '#2B3443', // body text
        slate: '#4A5568', // secondary text
        muted: '#5A6B85', // labels
        onnavy: '#D3DCEA', // body text on navy
        // Legacy names kept so existing pages (login, dashboard) pick up the new brand
        primary: '#1B365D',
        'primary-dark': '#10233F',
        secondary: '#E07A2E',
        'secondary-dark': '#B5571A',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
