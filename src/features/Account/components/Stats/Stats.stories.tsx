/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Stats } from './Stats'

const meta = {
  title: 'Account/Components/Stats',
  component: Stats,
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
} satisfies Meta<typeof Stats>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
