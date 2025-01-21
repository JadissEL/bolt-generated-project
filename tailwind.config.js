export default {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            primary: '#FF6B35',
            secondary: '#004E89',
            accent: '#FFD166',
            background: '#F7F7F7',
            text: '#333333'
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            arabic: ['Noto Sans Arabic', 'sans-serif']
          }
        },
      },
      plugins: [],
    }
