/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html','*', './src/pages/*.{html,js,jsx,md,mdx,ts,tsx,vite}',"./src/**/*.{html,js,jsx,md,mdx,ts,tsx,vite}"],
  theme: {
    extend: {
      screens: {
        '3xl': '2500px',
      },
    },
  },
  plugins: [],
}

