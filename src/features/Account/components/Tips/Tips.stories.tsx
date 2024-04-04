import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Tips } from './Tips'

const meta = {
  title: 'Account/Components/Header',
  component: Tips,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    )
  ]
} satisfies Meta<typeof Tips>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
