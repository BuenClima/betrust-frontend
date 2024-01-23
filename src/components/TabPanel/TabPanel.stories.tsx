import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { TabPanel } from './TabPanel'

const meta = {
  title: 'Components/TabPanel',
  component: TabPanel,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['setValue']
    }
  },
  tags: ['autodocs'],
  argTypes: {
    index: {
      control: {
        type: 'number'
      }
    },
    value: {
      control: {
        type: 'number'
      }
    },
    children: {
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
} satisfies Meta<typeof TabPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    index: 0,
    value: 0,
    children: [
      <div key={1}>Tab 1</div>,
      <div key={2}>Tab 2</div>,
      <div key={3}>Tab 3</div>
    ]
  }
}
