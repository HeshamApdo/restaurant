import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        moveAround: {
          "0%": {transform: "scale(.75)"},
          // "50%": {transform: "rotate(45deg)"},
          "100%": {transform: "scale(1)"},
        },
      },
      animation: {
        moveAround : "moveAround 2s infinite"
      }
    },
  },
  plugins: [],
}
export default config
