/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-sm': '390px',   
        'custom-xsm': '200px',   
        'custom-lsm': '640px',
        'custom-md': '930px', 
      },
      fontFamily: {
        Orbitron: ['var(--font-Orbitron)'],
      },
    },
  },
  plugins: [],
}