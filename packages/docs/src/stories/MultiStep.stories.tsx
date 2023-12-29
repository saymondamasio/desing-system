import { Box, MultiStep } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MultiStep> = {
  title: 'Form/MultiStep',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => (
      <Box as="label" className="flex flex-col gap-1">
        <Story />
      </Box>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof MultiStep>

export const Primary: Story = {
  args: {},
}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
