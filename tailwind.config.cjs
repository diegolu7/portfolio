/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#08111F',
          secondary: '#101C2E',
          card: '#0D1826',
          cardHover: '#122234',
        },
        primary: {
          DEFAULT: '#17A8E5',
          light: '#54D6FF',
        },
        text: {
          light: '#F4F8FC',
          muted: '#9BAABD',
          dim: '#7C8CA0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 6px rgba(0,0,0,0.25)',
        md: '0 4px 12px rgba(0,0,0,0.35)',
        lg: '0 8px 24px rgba(0,0,0,0.45)',
        cian: '0 0 24px rgba(23,168,229,0.25)',
        cardHover: '0 8px 24px rgba(23,168,229,0.15)',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        marquee: 'marquee 45s linear infinite',
      },
    },
  },
  plugins: [],
};