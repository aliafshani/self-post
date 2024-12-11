/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    fontFamily: {
      "vazir": ["vazir"],
      "vazir-light": ["vazir-light"],
    }, extend: {},
  },
  plugins: [],
}
