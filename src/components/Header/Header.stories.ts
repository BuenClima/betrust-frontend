import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  title: 'Components/Header',
  // @ts-expect-error Invalid PropTypes
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['tipsters', 'tips', 'user']
      }
    },
    self: {
      control: {
        type: 'boolean'
      }
    }
  }
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'tipsters',
    self: false
  }
}
