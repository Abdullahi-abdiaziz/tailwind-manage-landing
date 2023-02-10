/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"]
    // These options are passed through directly to PurgeCSS
  },
 content: ["./src/**/*.{html,js}"],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      'body': ['"Be Vietnam Pro"'],
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight:  'hsl(12, 88%, 69%)',
        brightRedSubLight:  'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}
