import { Avatar } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/saymondamasio.png',
    alt: 'Saymon Damásio',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'Source of the image',
      control: {
        type: 'text',
      },
    },
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
