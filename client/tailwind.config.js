/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bitter' : ['Bitter', "san-serif"]
      },
      backgroundImage: {
        'HomeImg' : "url('assets/HomeImg.png')"
      }
    },
  },
  plugins: [],
}
