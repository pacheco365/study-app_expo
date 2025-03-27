/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#f7cf07',
        secondary: '#1f4a15',
        dark: {
          100: '#9eed8c',
          200: '#61cf48',
          300: '#408a2f'
        },
        light: {
          100: '#fae164',
          200: '#fcdc3d',
          300: '#f7da45'
        },
        green_lighter: {
          100: '#3de83a',
          200: '#35b816',
          300: '#3a8a28'
        }
      }
    },
  },
  plugins: [],
}