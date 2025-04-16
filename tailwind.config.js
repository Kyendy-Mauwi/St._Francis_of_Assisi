/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: { primary: {
            DEFAULT: '#572105',
            50: '#fef2ee',
            100: '#fde4d8',
            200: '#fac3af',
            300: '#f69c7b',
            400: '#ef6d45',
            500: '#e54a1f',
            600: '#d13412',
            700: '#823007',
            800: '#8b2a0e',
            900: '#7a250f',
          },
          secondary: {
            DEFAULT: '#823007',
            50: '#fdf3ef',
            100: '#fbe5d9',
            200: '#f7c7b3',
            300: '#f2a182',
            400: '#ea6e4c',
            500: '#e04a26',
            600: '#cc351b',
            700: '#572105',
            800: '#5c1d0a',
            900: '#4f1a0c',
          },
        },	
      },
    },
    plugins: [],
  };
  