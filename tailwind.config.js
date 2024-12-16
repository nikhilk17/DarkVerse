/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
        another: ['AnotherFont', 'serif'], // Replace 'MyCustomFont' with your font name
      },
    },
  },
  plugins: [],
}