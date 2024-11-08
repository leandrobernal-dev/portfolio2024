/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    animation: {
      shimmer: "shimmer 2s linear infinite",
    },
    keyframes: {
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
    },
    extend: {
      colors: {
        accent: "#22d3ee",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        md: "1000px",
      },
    },
  },
  plugins: [],
};
