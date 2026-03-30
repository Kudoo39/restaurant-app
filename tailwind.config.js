/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffc27d',
          light: '#ffd9a8',
          dark: '#e6a960',
          50: '#fff9f0',
          100: '#fff3e0',
          200: '#ffe4c2',
          300: '#ffd9a8',
          400: '#ffc27d',
          500: '#ffb05c',
          600: '#e6a960',
          700: '#cc8f4a',
          800: '#b37535',
          900: '#995c20',
        },
        neutral: {
          black: '#1a1a1a',
          900: '#2d2d2d',
          800: '#404040',
          700: '#525252',
          600: '#6b6b6b',
          500: '#8a8a8a',
          400: '#a8a8a8',
          300: '#c7c7c7',
          200: '#e5e5e5',
          100: '#f5f5f5',
          cream: '#faf8f5',
        },
        accent: {
          success: '#10b981',
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
        'base': ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.6' }],
        'lg': ['clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)', { lineHeight: '1.6' }],
        'xl': ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', { lineHeight: '1.4' }],
        '2xl': ['clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)', { lineHeight: '1.3' }],
        '3xl': ['clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2.25rem, 1.95rem + 1.5vw, 3rem)', { lineHeight: '1.1' }],
        '5xl': ['clamp(3rem, 2.55rem + 2.25vw, 3.75rem)', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'warm': '0 10px 30px -5px rgba(255, 194, 125, 0.3)',
        'warm-lg': '0 20px 40px -10px rgba(255, 194, 125, 0.4)',
        'inner-warm': 'inset 0 2px 4px 0 rgba(255, 194, 125, 0.1)',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #ffc27d 0%, #ffb05c 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
