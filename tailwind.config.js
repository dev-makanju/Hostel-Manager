/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '500px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'white':'#fff',
        'site-color': '#0E0E0E',
        'variant1': '#C97B2C',
        'variant2': '#ff49db',
        'variant3': '#ff7849',
      },
      fontFamily: {
        'gilroy': 'gilroy-bold'
      },
      backgroundImage: {
        'screen': "url('/screen.svg')",
        "reddd": "#f222ff",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}