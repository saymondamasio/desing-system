import { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@damasio-ui/tokens'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      fontFamily: fonts,
      lineHeight: lineHeights,
      borderRadius: radii,
      space,
    },
  },
  plugins: [],
} satisfies Config
