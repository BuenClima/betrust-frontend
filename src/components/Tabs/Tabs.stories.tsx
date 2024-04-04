/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Tabs } from './Tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: {
        type: 'array'
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
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', component: <div>Tab1</div> },
      { label: 'Tab 2', component: <div>Tab2</div> }
    ]
  }
}
