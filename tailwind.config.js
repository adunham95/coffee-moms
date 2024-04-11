/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {colors: {
      'brand': {
        '50': '#f8f0fa', 
        '100': '#efe1f2', 
        '200': '#d8b8e0', 
        '300': '#be91cc', 
        '400': '#9052a8', 
        '500': '#632382', 
        '600': '#551c75', 
        '700': '#411361', 
        '800': '#300d4f', 
        '900': '#20073b', 
        '950': '#120326'
    },
    'brand-bg': {
      '50': '#fffefc', 
      '100': '#fffefc', 
      '200': '#fcfaf2', 
      '300': '#fcf8ed', 
      '400': '#faf1e1', 
      '500': '#f7e8d3', 
      '600': '#dec7ab', 
      '700': '#ba9a77', 
      '800': '#946d4b', 
      '900': '#70482b', 
      '950': '#472612',
      '1000': '#140601'
  }
    }},
  },
  plugins: [],
}

