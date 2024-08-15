/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { transform: 'translateY(150%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        appear: 'appear 1s ease',
      },
    },
  },
  plugins: [],
}
