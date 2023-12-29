import { Box, Text, Textarea } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" className="flex flex-col gap-1">
        <Text size="sm">Observations</Text>
        <Story />
      </Box>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Primary: Story = {
  args: {
    placeholder: 'Type your observation',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
