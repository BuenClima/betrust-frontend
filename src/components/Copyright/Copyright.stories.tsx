/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Copyright } from './Copyright'

const meta = {
  title: 'Components/Copyright',
  component: Copyright as any,
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
} satisfies Meta<typeof Copyright>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
