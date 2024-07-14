/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'pink-primary': '#e574bc',
        'cyan-primary': '#7fdeff',
      },
      boxShadow: {
        'glow': '7px 0 20px rgba(127, 222, 255, 0.3), -7px 0 20px rgba(229, 116, 188, 0.4)',
        'hover-glow': '10px 0 50px rgba(127, 222, 255, 0.4), -10px 0 50px rgba(229, 116, 188, 0.6)',
        'border-shadow': `0 0 .1rem #fff, 0 0 .1rem #fff, 0 0 2rem rgba(229, 116, 188, 0.2), 0 0 0.8rem rgba(229, 116, 188, 0.2), 0 0 1rem rgba(229, 116, 188, 0.2), inset 0 0 2rem rgba(229, 116, 188, 0.2);`
      },
      animation: {
        'color-pulse': `
          100% {
            border-color: rgba(127, 222, 255, 0.3);
          }
          
          0% {
            border-color: rgba(229, 116, 188, 0.4);
          }
        `
      }
    },
  },
  plugins: [],
};
