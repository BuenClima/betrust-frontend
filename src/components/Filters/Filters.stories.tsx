/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Filters } from './Filters'

const meta = {
  title: 'Components/Filters',
  component: Filters as any,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    filter: {
      control: {
        type: 'select',
        options: ['filterTips', 'filterTipsters']
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
} satisfies Meta<typeof Filters>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    filter: 'filterTipsters'
  }
}
