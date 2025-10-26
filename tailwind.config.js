/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      spacing: {
        'a4-w': '210mm',
        'a4-h': '297mm',
      },
      colors: {
        'command-navy': '#0A1E3D',
        'command-blue': '#0066FF',
        'command-purple': '#6366F1',
        'blueprint-blue': '#003D7A',
        'executive-charcoal': '#2C3E50',
        'executive-gold': '#B8860B',
      }
    },
  },
  plugins: [],
}
