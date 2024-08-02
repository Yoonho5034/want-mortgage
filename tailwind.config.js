/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: "699px" }, // sm보다 작은 사이즈 추가
        notMobile: { min: "700px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        100: "24rem",
        128: "32rem", // 약 512px
        160: "40rem", // 약 640px
        180: "48rem",
      },
      height: {
        100: "24rem",
        128: "32rem",
        160: "40rem",
      },
      fontSize: {
        xxs: ".5rem", // 기존 Tailwind 설정
      },
    },
  },
  plugins: [],
};
