/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        homieBlue: '#2511BE',
      },
      fontFamily: {
        sans: ['InterVariable', '...defaultTheme.fontFamily.sans'],
      },
    }
  },
  plugins: [],
}

