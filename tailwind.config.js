/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          imp: "#c770f0",
          main: "#cd5ff8",
          hover: "#6d20c5",
          btn: "#623686",
          dark: "#1b1a2e",
          border: "#8a49a8",
        },
      },
      fontFamily: {
        mono: ['"PT Mono"', "monospace"],
      },
      backgroundImage: {
        "section-gradient":
          "linear-gradient(to bottom left, rgba(17,16,16,0.582), rgba(12,8,24,0.904))",
        "body-gradient":
          "linear-gradient(to left, rgb(27 20 41), rgb(20 15 35))",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        like: {
          "0%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        wave: "wave 2.1s infinite",
        like: "like 0.85s forwards",
      },
    },
  },
  plugins: [],
};
