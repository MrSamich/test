module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'backgroundc' : '#684BB1',
      },
       
      fontFamily: {
        'open4' : ['Open Sans'],
        'poppin6' : ['Poppins'],
      },
      borderRadius: {
        'border1' : '1.25rem',
      },

      height: {
        'height1' : '1.188rem',
      },

      lineHeight:{
        'lineh1' : '2.25rem',
        'lineh2' : '1.125rem'
      },

      padding: {
        'padding1' : '4.313rem',
        'padding2' : '3.75rem',
      },

      width: {
        'width1' : '7.5rem',
        'width2' : '1.688rem',
      },
      zIndex: {
        '-10' : '-10',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
