module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        blue: {
          default: '#294993',
          light: '#00CEFF'
        },
        orange: {
          default: '#fdad27'
        },
        gray: '#CBCBCB'
      },
      opacity: {
        '90': '.9'
      },
      fontFamily: {
        sans: ['Telegraf', '-apple-system', 'BlinkMacSystemFont'],
        serif: ['Periodico Text TRIAL', 'Georgia', 'Cambria'],
      },
      fontSize: {
        '7xl': '5rem',
      },
      spacing: {
        '14': '3.5rem',
        '28': '7rem'
      },
      lineHeight: {
        'extra-tight': '1.15',
      },
      minHeight: {
        'halfscreen': '50vh',
      },
    }
  },
  corePlugins: {
    container: false
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    margin: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    padding: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    scale: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
  }
}