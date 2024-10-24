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
        hoverPink:  '#D4695B',
        customGray: '#394A59',
        dotGray: '#555',  // Custom color for pagination dots
        dotActive: '#F78A79', // Custom color for active pagination dots
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
        // New utility to make scrollbar ends rounded by default
        '.scrollbar-rounded': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar-thumb': {
            'border-radius': '10px',
          },
        },
        // Custom Swiper Pagination styles
        '.swiper-pagination-bullet': {
          width: '6px !important', // Smaller size for the dots
          height: '6px !important',
          backgroundColor: '#B0B0B0 !important', // Custom color (can be dotGray)
          opacity: '0.5 !important',
          transition: 'opacity 0.3s ease !important',
        },
        '.swiper-pagination-bullet-active': {
          backgroundColor: '#87CEEB!important', // Custom active dot color (can be dotActive)
          opacity: '1 !important',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
