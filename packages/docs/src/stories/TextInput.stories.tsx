import { Box, Text, TextInput } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextInput> = {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" className="flex flex-col gap-1">
        <Text size="sm">Username</Text>
        <Story />
      </Box>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TextInput>

export const Primary: Story = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
