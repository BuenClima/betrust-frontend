import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { AccountHeader } from './AccountHeader'

const meta = {
  title: 'Account/Components/Header',
  component: AccountHeader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    self: {
      control: {
        type: 'boolean'
      }
    },
    tipster: {
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
} satisfies Meta<typeof AccountHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    self: true,
    tipster: true
  }
}
