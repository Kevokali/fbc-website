/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Trust - Deep Blue / Navy
        'deep-blue': '#1B3A57',
        'navy': '#0F2537',
        'navy-light': '#2A4A6B',
        
        // Growth - Emerald / Green
        'emerald': '#2A9D8F',
        'emerald-dark': '#1E7A6F',
        'emerald-light': '#3DB8A8',
        
        // Clarity - Soft Gray / White
        'light-grey': '#F5F5F5',
        'soft-grey': '#E8E8E8',
        'grey-medium': '#D0D0D0',
        'white': '#FFFFFF',
        
        // Text colors
        'text-primary': '#333333',
        'text-secondary': '#666666',
        
        // Accent - Gold
        'gold': '#D4AF37',
        'gold-light': '#E5C158',
        'gold-dark': '#B8941F',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
