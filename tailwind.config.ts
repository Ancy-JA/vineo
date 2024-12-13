
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
        'custom-gradient': ' linear-gradient(174.81deg, rgba(249, 246, 239, 0) -171.89%, rgba(247, 138, 121, 0.82) 15.79%, #F78A79 53.19%, #F78A79 95.25%);',
        'custom-gradient1': 'linear-gradient(174.8deg, rgba(249, 249, 249, 0) -171.86%, rgba(244, 244, 244, 0.1) -30.43%, rgba(255, 255, 255, 0.61) 56.34%, #FFFFFF 119.41%)',
        'card-gradient': 'linear-gradient(174.81deg, rgba(249, 246, 239, 0) -171.89%, rgba(247, 138, 121, 0.82) 15.79%, #F78A79 53.19%, #F78A79 95.25%)',

        'footer-gradient': 'linear-gradient(176.41deg, #FEFDFC 25.27%, #E0DBD2 50.73%, #E0DBD2 89.52%)',

        'bgshade': 'linear-gradient(100.27deg, #F3EFEA 19.85%, #E1DCD3 195.67%)',

        'login-gradient': `linear-gradient(
          180deg,
          rgba(227, 227, 226, 0) 40%,
          rgba(227, 227, 226, 0.9) 68.5%, 
          rgba(227, 227, 226, 0.5) 68.5%, 
          rgba(227, 227, 226, 0.5) 76%, 
          rgba(227, 227, 226, 2) 76%, 
          rgba(227, 227, 226, 1) 83.5%, 
          rgba(227, 227, 226, 0.5) 83.5%, 
          rgba(227, 227, 226, 0.5) 90%, 
          rgba(227, 227, 226, 1) 90%
        )`,

        'sidebar-gradient': 'linear-gradient(90.84deg, rgba(255, 255, 255, 0.05) 9.17%, rgba(255, 255, 255, 0.11) 40.14%, rgba(255, 255, 255, 0) 73.54%, #FFFFFF 151.02%)',
        'selectedOptiongradient': 'linear-gradient(174.81deg, rgba(249, 246, 239, 0) -171.89%, rgba(247, 138, 121, 0.15) 15.79%, rgba(255, 210, 203, 0.29) 67%, rgba(247, 138, 121, 0.46) 100.7%)',
        'unselectedOptiongradient': 'linear-gradient(174.04deg, #FBF9F6 -9.19%, #FFFFFF 18.02%, #FBF9F6 46.92%, #FFFFFF 69.43%, #FBF9F6 91.85%)',
        'blurgradient': 'linear-gradient(90.59deg, rgba(255, 255, 255, 0) 0.12%, rgba(180, 180, 180, 0.17) 31.44%, rgba(255, 255, 255, 0) 60.4%, rgba(141, 141, 141, 0.21) 78.19%, rgba(255, 255, 255, 0) 102.28%)',

      },
      backdropBlur: {
        // Add custom blur values
        'xs': '0.125rem', // Unselected option blur
        'lg': '1.8075rem', // Selected option blur

      },

      boxShadow: {
        'all-sides-2xl': '0 0 1.8rem 0.625rem rgba(0, 0, 0, 0.079)',
        'two-sides-xl': '0 -0.3rem 0.5rem rgba(0, 0, 0, 0.1), 0 0.3rem 2.5rem rgba(0, 0, 0, 0.1)',
        'all-sides-xl': '0 0 1.5rem 0.2rem rgba(0, 0, 0, 0.079)',
        'optionCardShadow': '0px 12px 30px 0px #00000040',


      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Custom font family
        domine: ['Domine', 'serif']
      },
      colors: {
        customPink: '#F78A79',
        darkPink: '#E5535D',
        hoverPink: '#D4695B',
        customGray: '#394A59',
        dotGray: '#555',  // Custom color for pagination dots
        dotActive: '#F78A79', // Custom color for active pagination dots
        whiteBorder: '#FFFFFF0D',
        cancelbackground: '#F4D3CE',
        substext: '#FF0000',
        cardcolour: '#F8F8F8',
        description: '#18191A',
        pluscolor: ' #82858C',
        borderColor: '#958974',
        cardBlack: '#384A59',
        borderBottom: '#A9AAAA80',
        topButtonbackground: '#E0DBD2',
        qnColor: '#303E63',
        optionHead: '#232323',
        option: '#000000',

      },

      screens: {
        xsm: '400px',  // Define an extra small breakpoint
      },
      backgroundSize: {
        'custom-sm': '100%',
        'custom-md': '80%',
        'custom-lg': '80%',
        'custom-xl': '60%',
      },
      backgroundPosition: {
        'custom-sm': 'center',
        'custom-md': 'center',
        'custom-lg': 'center',
        'custom-xl': 'left center', // Adjusts for larger screens if needed
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
        '.landing-button-base': {
          width: '90%',
          maxWidth: '320px',
          borderRadius: '12px',
          padding: '0.5rem 0',
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
