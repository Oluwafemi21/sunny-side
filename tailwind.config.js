module.exports = {
  purge:{
    enabled:true,
    content:['index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        softred:'hsl(7, 99%, 70%)',
        ylw:'hsl(51, 100%, 49%)',
        graphics:'hsl(167, 40%, 24%)',
        photography:'hsl(198, 62%, 26%)',
        ds_blue:'hsl(212, 27%, 19%)',
        gb:'hsl(210, 4%, 67%)',
        footer:'hsl(167, 44%,70%)',
        pink_bg:'hsl(7, 99%, 70%, 0.04)',
        dgb:'hsl(213, 9%, 39%)'
      },
      fontFamily:{
        font1:['Barlow','sans-serif'],
        font2:['Fraunces','sans-serif'],
      },
      backgroundImage:{
        'hero-img':"url('./public/images/desktop/image-header.jpg')",
        'hero-img-mobile':"./url('public/images/mobile/image-header.jpg')",
      },
      zIndex:{
        '-10':'-10',
      },
      bottom:{
        '0.5':'0.0625rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
