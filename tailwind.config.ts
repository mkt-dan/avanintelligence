/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f9f7f4',
          100: '#f3ede8',
          200: '#e6d9d0',
          300: '#dac5b8',
          400: '#cdb1a0',
          500: '#c19d88',
          600: '#b58970',
          700: '#a87558',
          800: '#9c6140',
          900: '#8f4d28',
        },
        neon: {
          cyan: '#00d9ff',
          purple: '#d946ef',
          pink: '#ec4899',
          blue: '#3b82f6',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f3f4f6',
            a: {
              color: '#00d9ff',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
