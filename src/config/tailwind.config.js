/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#564A40',
          950: '#1A1310', // NEW — deep dark for max-contrast text / richest dark sections
          900: '#463C34',
          800: '#564A40',
          700: '#645749',
          600: '#76685A',
        },
        cloud: {
          DEFAULT: '#E9E1D2',
          100: '#F3EEE4',
          200: '#D6CBB8',
          50: '#FAFAF8', // NEW — near-white card surface that visibly lifts off cloud
        },
        flame: {
          DEFAULT: '#F15A25',
          light: '#F88A57',
          dark: '#B23B0C',
        },
        mint: {
          DEFAULT: '#2FB888',
          dark: '#0F9E6E',
        },
        slate: {
          ink: '#2C2722',
          soft: '#5C544B',
          mid: '#8C8078', // NEW — cool mid-tone for de-emphasised, non-interactive chrome
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(86,74,64,0.05), 0 12px 40px -12px rgba(86,74,64,0.18)',
        // CHANGED — was a flame-coloured glow (read as accent, not lift). Now a
        // neutral, deeper elevation so cards rise on hover instead of glowing.
        cardHover: '0 2px 4px rgba(86,74,64,0.06), 0 20px 48px -12px rgba(86,74,64,0.22)',
        // STRENGTHENED — the CTA button is now the ONLY flame-shadowed element,
        // which is what makes it the single loudest thing on the page.
        cta: '0 8px 28px -4px rgba(241,90,37,0.60)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.12)', // NEW — glass top-edge highlight
      },
      backgroundImage: {
        'transform-gradient': 'linear-gradient(120deg, #F15A25 0%, #F89A4C 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
