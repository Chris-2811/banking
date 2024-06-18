import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        fill: {
          100: 'rgba(255, 255, 255, 0.10)',
        },
        bankGradient: '#0179FE',
        indigo: {
          100: '#6172F3',
          200: '#3538CD',
        },
        success: {
          100: '#F6FEF9',
          200: '#ECFDF3',
          300: '#D1FADF',
          400: '#039855',
          500: '#027A48',
          600: '#054F31',
        },
        pink: {
          100: '#FEF6FB',
          200: '#FCE7F6',
          300: '#EE46BC',
          400: '#DD2590',
          500: '#C11574',
          600: '#851651',
        },
        blue: {
          100: '#F5FAFF',
          200: '#D1E9FF',
          300: '#2E90FA',
          400: '#1570EF',
          500: '#175CD3',
          600: '#194185',
        },
        sky: {
          100: '#F3F9FF',
        },
        black: {
          100: '#00214F',
          200: '#344054',
        },
        gray: {
          100: '#FCFCFD',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#667085',
          500: '#475467',
          600: '#344054',
          700: '#101828',
        },
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        'ibm-plex': 'var(--font-ibm-plex-serif)',
        manrope: 'var(--font-manrope)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
