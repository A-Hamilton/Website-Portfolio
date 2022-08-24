/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,png}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
        
        'xl': '2560px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        'theme-blue': '#00B3EB',
        'theme-darkblue': '#000726',
      },
      textColor: {
        'theme-blue': '#00B3EB',
        'theme-darkblue': '#000726',
      },
      borderColor: {
        'theme-blue': '#00B3EB',
        'theme-darkblue': '#000726',
      },
      backgroundColor: {
        'theme-blue': '#00B3EB',
        'theme-darkblue': '#000726',
      },
    },
  },
  plugins: [],
}
