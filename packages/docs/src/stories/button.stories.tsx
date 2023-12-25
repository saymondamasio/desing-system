import { Button } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Enviar',
  },
}

export const Big: Story = {
  args: {
    ...Primary.args,
    variant: 'big',
  },
}
