/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main-color": "#bc5c03",
        "web-green": "#3e9d43",
        "web-blue": "#0e6bc0",
        "high-light-gray": "#f0f0f0",
        "footer-background": "#353434",
      },
      colors: {
        "main-color": "#bc5c03",
        "web-green": "#3e9d43",
        "web-blue": "#0e6bc0",
        "high-light-gray": "#f0f0f0",
      },
    },
  },
  plugins: [],
};
