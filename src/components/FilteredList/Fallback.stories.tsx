import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { FilteredList } from './FilteredList'

const meta = {
  title: 'Components/FilteredList',
  // @ts-expect-error Invalid PropTypes
  component: FilteredList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['tip', 'tipster']
      }
    },
    filter: {
      control: {
        type: 'select',
        options: ['filterTips', 'filterTipsters']
      }
    },
    owner: {
      control: {
        type: 'boolean'
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
} satisfies Meta<typeof FilteredList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'tipster',
    filter: 'filterTipsters'
  }
}
