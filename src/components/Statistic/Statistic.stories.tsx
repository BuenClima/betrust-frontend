import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Statistic } from './Statistic'

const meta = {
  title: 'Components/Statistic',
  component: Statistic,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
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
} satisfies Meta<typeof Statistic>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '2.03',
    label: 'Avg Odds'
  }
}
