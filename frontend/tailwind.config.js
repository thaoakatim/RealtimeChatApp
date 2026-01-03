/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-bg": "#1f2937",
        primary: "#2563eb",
        border: "#d1d5db",
      }
    },
  },
  plugins: [],
};
