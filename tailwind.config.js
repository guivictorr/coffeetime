/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      background: '#fafafa',
      base: {
        card: '#f3f2f2',
        input: '#ededed',
        button: '#e6e5e5',
        hover: '#d7d5d5',
        label: '#8d8686',
        text: '#574f4d',
        subtitle: '#403937',
        title: '#272221',
      },
      purple: {
        dark: '#4b2995',
        DEFAULT: '#8047f8',
        light: '#ebe5f9',
      },
      yellow: {
        dark: '#C47F17',
        DEFAULT: '#DBAC2C',
        light: '#F1E9C9',
      },
    },
  },
  plugins: [],
};
