import { Text } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque id facere repellat natus sit, velit vel veritatis consequuntur debitis praesentium omnis asperiores, repudiandae fuga cumque provident repellendus officiis.',
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
