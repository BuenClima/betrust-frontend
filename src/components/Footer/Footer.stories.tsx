/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Footer } from './Footer'

const meta = {
  title: 'Components/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
