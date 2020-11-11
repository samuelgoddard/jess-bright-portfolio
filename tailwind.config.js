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
        serif: ['Sainte Colombe', 'Georgia', 'Cambria'],
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