import { Config } from 'tailwindcss'
import { theme } from './src/theme'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
} satisfies Config
