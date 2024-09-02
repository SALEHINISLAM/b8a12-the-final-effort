/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      fontFamily:{
        playWrite:["Playwrite CU", "cursive"],
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [
    require('daisyui'),
  ],
}