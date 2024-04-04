/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { AppBar } from './AppBar'

const meta = {
  title: 'Components/AppBar',
  component: AppBar,
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
} satisfies Meta<typeof AppBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
