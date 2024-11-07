const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.neutral[800],
        secondary: colors.neutral[300],
        focus: colors.amber[600]
      },
      opacity: {
        'primary-opacity': 0.3,
        'secondary-opacity': 0.2,
        'focus-opacity': 0.5
      },
      backdropBlur: {
        primary: '12px'
      }
    }
  },
  plugins: []
}

