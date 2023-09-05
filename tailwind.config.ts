import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1D4ED8"
      },
      fontFamily: {
        "exo": ['"Exo 2"', 'sans']
      }
    },
  },
  plugins: [],
}
export default config
