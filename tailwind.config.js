/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#1e40af",
          muted: "rgba(59,130,246,0.37)",
          hover: "rgba(59,130,246,0.53)",
        },
        surface: {
          dark: "#0c0513",
          navbar: "#1b1a2ea9",
          navbarSolid: "#181a27",
          footer: "rgb(10,4,22)",
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
