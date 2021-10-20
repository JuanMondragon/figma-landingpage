module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {

    backgroundPosition:{
      'top-4':'center bottom .5rem'

    },
      height: theme => ({
        "screen/2": "50vh",

      }),
      
      backgroundImage:{
        'hero':"url('/images/img2.jpg')",
        'customer':"url('/images/img1.jpg')",

      },
      fontFamily :{
        montse: "'Montserrat', sans-serif",
        new:"'Courier New', serif",
      },
      textColor: {
        
        'highlight':'#444444',
        'white':'#F5F6F6',
      },
      colors:{
        'transparent':'transparent',
        'primary':'#4a4e69',
        'second':'#9a8c98',
        'contrast':'#f2e9e4', 
        'footer':'#22223b',
        'button':'#303030'
      }
    },
  },
    
  variants: {
    extend: {},
  },
  plugins: [],
}
