/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00FFFF',
        'neon-pink': '#FF00FF',
        'neon-green': '#00FF66',
        'neon-purple': '#9D00FF',
        'neon-yellow': '#FFFF00',
        'cyber-dark': '#0A0A0A',
        'cyber-gray': '#1A1A1A',
        'cyber-light': '#2A2A2A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'neon-pulse': 'neonPulse 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 5px currentColor)' },
          '50%': { filter: 'brightness(1.2) drop-shadow(0 0 15px currentColor)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 2px currentColor)' },
          '50%': { filter: 'brightness(1.3) drop-shadow(0 0 10px currentColor)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF',
        'neon-pink': '0 0 5px #FF00FF, 0 0 10px #FF00FF',
        'neon-green': '0 0 5px #00FF66, 0 0 10px #00FF66',
      },
    },
  },
  plugins: [],
};