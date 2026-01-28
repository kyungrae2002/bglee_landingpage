/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bglee Brand Colors - Warm, Trusting, Child-friendly palette
        // Based on brand logo analysis and Mary-Tim reference

        // Primary Colors (Warm, Nurturing)
        primary: {
          50: '#fef9f3',
          100: '#fdf1e6',
          200: '#fbe3cc',
          300: '#f8d0ab',
          400: '#f5a868',
          500: '#f49454',  // Main brand warm orange/peach
          600: '#e8843a',
          700: '#d66f2a',
          800: '#b85818',
          900: '#8a3f0a',
        },

        // Secondary Colors (Soft Green - Trust, Growth)
        secondary: {
          50: '#f5faf7',
          100: '#eaf4f0',
          200: '#d3e8df',
          300: '#abd5bc',
          400: '#7cc27d',  // Soft sage green
          500: '#5ba95d',
          600: '#4a8f4f',
          700: '#3b7043',
          800: '#2d5435',
          900: '#1f3828',
        },

        // Accent Colors (Warm Neutral)
        accent: {
          50: '#fdfbf7',
          100: '#faf5eb',
          200: '#f5e6d3',  // Soft beige
          300: '#e8d5c4',
          400: '#dbbf9e',
          500: '#cfa876',
          600: '#b8885f',
          700: '#a06949',
          800: '#88533b',
          900: '#6d3e2d',
        },

        // Neutral Colors
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#d0d0d0',
          400: '#a0a0a0',
          500: '#808080',
          600: '#606060',
          700: '#404040',
          800: '#212121',
          900: '#0a0a0a',
        },
      },

      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['Pretendard', 'sans-serif'],
      },

      fontSize: {
        // Enhanced typography scale for better hierarchy
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
        '6xl': ['60px', { lineHeight: '68px' }],
      },

      spacing: {
        // Additional spacing utilities
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
      },

      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      },

      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.10)',
        'xl': '0 12px 32px rgba(0, 0, 0, 0.12)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
