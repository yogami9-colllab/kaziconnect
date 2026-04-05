import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          DEFAULT: '#006B3C',
          light: '#00874D',
          dark: '#004D2A',
          xs: '#E6F4ED',
        },
        crimson: {
          DEFAULT: '#CE1126',
          light: '#E8192E',
          dark: '#9B0D1D',
        },
        gold: {
          DEFAULT: '#FCD116',
          dark: '#D4AE0E',
          xs: '#FEFAE6',
        },
        ink: {
          DEFAULT: '#0D1B0F',
          light: '#1A2E1C',
        },
        cream: '#F8F9F5',
      },
      boxShadow: {
        forest: '0 8px 30px rgba(0,107,60,0.35)',
        gold: '0 8px 30px rgba(252,209,22,0.40)',
        card: '0 4px 20px rgba(13,27,15,0.10)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
export default config
