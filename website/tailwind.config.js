/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,md,mdx,ts,tsx,vite}"],
  theme: {
    extend: {
      screens: {
        '3xl': '2500px',
      },
    },
  },
  plugins: [],
}

