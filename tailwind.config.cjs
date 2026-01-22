/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        // primary: {
        //   50: '#FFF5F2',
        //   100: '#FFF1EE',
        //   200: '#FFE4DE',
        //   300: '#FFD5CC',
        //   400: '#FFBCAD',
        //   500: '#FE795D',
        //   600: '#EF562F',
        //   700: '#EB4F27',
        //   800: '#CC4522',
        //   900: '#A5371B'
        // }
        
        primary: {
          50: "#F4FDFF", 
          100: "#E8FCFF", 
          200: "#D0F8FE", 
          300: "#ABEDFC", 
          400: "#79DFF9", 
          500: "#46CCEF", 
          600: "#26ACD3", 
          700: "#1C8BAF", 
          800: "#19708F", 
          900: "#1A5B75" 
        },
	},
    }
  }
};

module.exports = config;