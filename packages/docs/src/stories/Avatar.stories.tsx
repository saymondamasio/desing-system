import { Avatar } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/saymondamasio.png',
    alt: 'Saymon Damásio',
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
