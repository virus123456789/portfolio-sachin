module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '550px',
      'md': '768px',
      'lg': '1110px',
    },
    extend: {
      borderWidth: {
        '1':'1px'
      },
      fontSize: {
        '10xl':'12.5rem'
      },
      spacing: {
        '667': '667px',
      }

    },
  },
  plugins: [],
}
