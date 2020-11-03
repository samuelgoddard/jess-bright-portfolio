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
        } ,
        gray: '#CBCBCB'
      },
      fontFamily: {
        sans: ['Telegraf', '-apple-system', 'BlinkMacSystemFont'],
        serif: ['Sainte Colombe', 'Georgia', 'Cambria'],
      },
    }
  },
  corePlugins: {
    container: false
  }
}