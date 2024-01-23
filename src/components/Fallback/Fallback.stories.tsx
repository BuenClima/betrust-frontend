import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Fallback } from './Fallback'

const meta = {
  title: 'Components/Fallback',
  component: Fallback,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    )
  ]
} satisfies Meta<typeof Fallback>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
