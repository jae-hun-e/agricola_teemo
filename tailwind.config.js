/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        fScreen: "1280px",
      },
      backgroundColor: {
        demo: "#D9D9D9",
        demo2: "#828282",
        hover: "#e18d74",
        lobby1: "#cfb542",
        lobby2: "#bba027",
      },
    },
  },
  plugins: [],
};
