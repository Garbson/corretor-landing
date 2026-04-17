/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#FFFDF0',
          100: '#FEF8D0',
          200: '#FBEEA0',
          300: '#F5D97A',
          400: '#ECC84E',
          500: '#D4AF37',
          600: '#B8921E',
          700: '#92702A',
          800: '#7A5A1A',
          900: '#5C4210',
          950: '#3D2B08',
        },
        accent: {
          50:  '#FFF8F0',
          100: '#FEECD0',
          200: '#FDD5A0',
          300: '#FAB96E',
          400: '#F79A3C',
          500: '#E07B1A',
          600: '#C06010',
          700: '#9A4A0C',
          800: '#7A3808',
          900: '#5A2804',
          950: '#3D1A02',
        },
        ocean: {
          light: '#38bdf8',
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
        },
        sand: {
          light: '#fef3c7',
          DEFAULT: '#fde68a',
          dark: '#fcd34d',
        },
        coral: {
          light: '#fca5a5',
          DEFAULT: '#f87171',
          dark: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        logo: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'gradient': 'gradient 3s ease infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backgroundSize: {
        '200': '200% 200%',
        '300': '300% 300%',
      }
    },
  },
  plugins: [],
}