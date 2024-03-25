const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sidebarTexture: 'linear-gradient(90deg, rgba(6,11,38,0.94) 0%, rgba(26,31,55,0) 100%)',
        sidebarTitleTexture: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(117,122,140,0) 100%)',
        sidebarLineTexture: 'linear-gradient(90deg, rgba(224,225,226,0) 0%, rgba(224,225,226,1) 50%, rgba(224,225,226,0.15) 100%)'
      }
    },
  },
  plugins: [],
})
