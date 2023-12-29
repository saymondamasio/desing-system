import { Heading } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom title',
  },
}

export default meta

type Story = StoryObj<typeof Heading>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h3',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading by default will be `h2`, but you can change tag with `as` props',
      },
    },
  },
}
