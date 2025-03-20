/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sentinel: {
          primary: '#0A1F44',    // Midnight Blue
          secondary: '#D72638',   // Cyber Red
          gray: '#4A4A4A',       // Stealth Gray
          white: '#F5F5F5',      // Tactical White
          cyan: '#00A6A6',       // Digital Cyan
          // Additional complementary colors
          navy: '#1C3D7D',       // Deeper blue for gradients
          crimson: '#B21E2E',    // Darker red for hover states
          teal: '#008B8B',       // Alternative accent
          purple: '#4A2B87',     // Royal purple for premium features
          gold: '#FFD700',       // For achievements/badges
          // Gradient stops
          dark: {
            '900': '#050D1C',    // Darkest background
            '800': '#0A1F44',    // Primary dark
            '700': '#142F66',    // Lighter variation
          }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#F5F5F5',
            a: {
              color: '#00A6A6',
              '&:hover': {
                color: '#008B8B',
              },
            },
            strong: {
              color: '#F5F5F5',
            },
            code: {
              color: '#F5F5F5',
            },
          },
        },
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};