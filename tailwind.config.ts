import type { Config } from 'tailwindcss';

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
    },
  },
  plugins: [],
};

export default config;
