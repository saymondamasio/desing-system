import { Box, Text, Checkbox } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" className="flex gap-2">
        <Story />
        <Text size="sm">Accept terms</Text>
      </Box>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  args: {},
}
