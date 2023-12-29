import type { Meta, StoryObj } from '@storybook/react'

import { FilteredList } from './FilteredList'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
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
  }
} satisfies Meta<typeof FilteredList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'tipster',
    filter: 'filterTipsters'
  }
}
