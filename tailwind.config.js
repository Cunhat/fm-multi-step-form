/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "mobile-background": "url('/images/bg-sidebar-mobile.svg')",  
        "desktop-background": "url('/images/bg-sidebar-desktop.svg')"  

      },
      fontFamily: {
        "ubuntu-bold": ["var(--font-ubuntu-bold)"],
        "ubuntu-medium": ["var(--font-ubuntu-medium)"],
        "ubuntu-regular": ["var(--font-ubuntu-regular)"],

      },
      colors: {
        background: "#EFF5FF",
        border: "#D6D9E6",
        custom: {
          blue: "#022959",
          grey: {
            100: "#F8F9FF",
            300: "#D6D9E6",
            500: "#9699AA",
          },
          lightBlue: "#ABBCFF",
          orange: "#FFAF7E",
          pink: "#F9818E",
          purple: "#483EFF",
          red: "#EE374A",
          skyBlue: "#BEE2FD"
          
        }
      }
    },
  },
  plugins: [],
}
