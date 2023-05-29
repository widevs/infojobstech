/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}', // Tremor module
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        primary: '#1972A3',
        primaryDark: '#126492',
        primaryLight: '#5CA4CD',
        primaryTransparent: 'rgba(22,125,183,0.7)',
        accent: '#FF6340',
        accentDark: '#E05C3E',
        accentLight: '#FF9279',
        accentTransparent: 'rgba(255,99,71,0.7)',
        grayBrand: '#999999',
        grayBrandLight: '#B8B8B8',
        // ...
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
