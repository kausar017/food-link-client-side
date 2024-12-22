/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Mamba UI প্লাগইন এখানে যুক্ত করুন
    require('mamba-ui')  // Mamba UI এর প্লাগইন
  ],
}
