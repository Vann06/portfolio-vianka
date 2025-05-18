/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        beige: '#f7f2eb',
        beigeDark: '#e1d6c1',
        lavenderDark: "#2a1a40",
        lavenderMid: "#4a2f70",
      }
    },
  },
  plugins: [],
}
