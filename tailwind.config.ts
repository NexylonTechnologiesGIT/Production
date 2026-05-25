import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#030B18',
          900: '#0A1628',
          800: '#0F2040',
          700: '#162B58',
          600: '#1E3A73',
          500: '#2452A0',
          400: '#3B6ECC',
          300: '#6091E0',
          200: '#93B8F0',
          100: '#CCE0FA',
          50:  '#EBF4FF',
        },
        accent: {
          blue:   '#2563EB',
          indigo: '#4F46E5',
          violet: '#7C3AED',
          cyan:   '#0891B2',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(150deg, #020C1B 0%, #091525 35%, #0D1B36 65%, #112447 100%)',
        'card-gradient':    'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'blue-gradient':    'linear-gradient(135deg, #1D5FBF 0%, #1E3A8A 100%)',
        'accent-gradient':  'linear-gradient(135deg, #2563EB 0%, #0891B2 100%)',
        'teal-gradient':    'linear-gradient(135deg, #0891B2 0%, #0E7490 100%)',
        'navy-gradient':    'linear-gradient(135deg, #0A1628 0%, #162B58 100%)',
        'section-gradient': 'linear-gradient(180deg, #020C1B 0%, #060F1E 50%, #0A1628 100%)',
      },
      boxShadow: {
        'glow-blue':   '0 0 40px rgba(37, 99, 235, 0.25)',
        'glow-teal':   '0 0 40px rgba(8, 145, 178, 0.25)',
        'glow-cyan':   '0 0 40px rgba(6, 182, 212, 0.20)',
        'glow-navy':   '0 0 40px rgba(30, 58, 138, 0.35)',
        'card':        '0 4px 24px rgba(0, 0, 0, 0.35)',
        'card-hover':  '0 12px 48px rgba(0, 0, 0, 0.50)',
        'glass':       '0 8px 32px rgba(0, 0, 0, 0.30)',
        'elevated':    '0 20px 60px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'fade-in-up':    'fadeInUp 0.6s ease-out forwards',
        'fade-in':       'fadeIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':     'spin 12s linear infinite',
        'float':         'float 6s ease-in-out infinite',
        'shimmer':       'shimmer 2s linear infinite',
        'marquee':       'marquee 35s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
