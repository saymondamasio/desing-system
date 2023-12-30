import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@damasio-ui/tokens'

export const theme = {
  colors,
  fontSize: fontSizes,
  fontWeight: fontWeights,
  fontFamily: fonts,
  lineHeight: lineHeights,
  borderRadius: radii,
  space,

  keyframes: {
    slideIn: {
      from: { transform: 'translateY(-100%)' },
      to: { transform: 'translateY(0)' },
    },
    slideOut: {
      from: { transform: 'translateY(0)' },
      to: { transform: 'translateY(-100%)' },
    },
  },

  animation: {
    slideIn: 'slideIn 0.2s ease-out',
    slideOut: 'slideOut 0.2s ease-out',
  },
}
