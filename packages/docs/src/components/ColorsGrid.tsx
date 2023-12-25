import { ColorPalette, ColorItem } from '@storybook/blocks'
import { colors } from '@damasio-ui/tokens'

export function ColorsGrid() {
  return (
    <ColorPalette>
      {Object.entries(colors).map(([key, value]) => {
        const colors =
          typeof value === 'object'
            ? value
            : {
                [key]: value,
              }

        return (
          <ColorItem key={key} subtitle={key} title={key} colors={colors} />
        )
      })}
    </ColorPalette>
  )
}
