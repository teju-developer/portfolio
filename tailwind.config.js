/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050811',
          900: '#090d1a',
          850: '#0d1326',
          800: '#131b33',
          700: '#1e294b'
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          accent: '#00f0ff'
        },
        violet: {
          accent: '#a855f7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
