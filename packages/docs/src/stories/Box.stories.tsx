import { Box, Text } from '@damasio-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Box> = {
  title: 'Surfaces/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          doloremque id facere repellat natus sit, velit vel veritatis
          consequuntur debitis ipsa praesentium omnis asperiores, repudiandae
          fuga cumque provident repellendus officiis.
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Box>

export const Primary: Story = {}
