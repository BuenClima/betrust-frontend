import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { TipsterStatistics } from './TipsterStatistics'

const meta = {
  title: 'Components/TipsterStatistic',
  component: TipsterStatistics,
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
} satisfies Meta<typeof TipsterStatistics>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
