/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Header } from './Header'

const meta = {
  title: 'Components/Header',
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
  },
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    )
  ]
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'tipsters',
    self: false
  }
}
