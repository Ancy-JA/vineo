import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure all relevant files are scanned
  ],
  theme: {
    extend: {
      backgroundImage: {
        'glass-bottle': 'url(\'/glass-bottle.png\')', // Background image configuration
      },
      backgroundSize: {
        '39rem': '39rem', // Custom background size
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Custom font family
      },
      colors: {
        customPink: '#F78A79',
        customGray: '#394A59',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.transform-gpu': {
          transform: 'translate3d(0, 0, 0)',
        },
        '.scroll-translate': {
          transition: 'transform 0.3s ease-out',
        },
        '.hover-scale-up': {
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
        '.scrollbar-hide': {
          'scrollbar-width': 'none', // For Firefox
          '-ms-overflow-style': 'none', // For Internet Explorer and Edge
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', // For Chrome, Safari, and Opera
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin', // Firefox
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '8px', // Chrome, Safari, Opera
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          background: '#f5f5f5',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          background: '#555',
          'border-radius': '10px',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb:hover': {
          background: '#333',
        },
        '.scroll-visible': {
          'overflow-y': 'hidden',
          '&:hover': {
            'overflow-y': 'auto',
            'scrollbar-width': 'thin', // For Firefox
          },
          '&:hover::-webkit-scrollbar': {
            width: '8px',
          },
          '&:hover::-webkit-scrollbar-thumb': {
            background: '#555',
            'border-radius': '10px',
          },
          '&:hover::-webkit-scrollbar-thumb:hover': {
            background: '#333',
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
