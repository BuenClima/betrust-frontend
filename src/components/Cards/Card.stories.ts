import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
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
    extended: {
      control: {
        type: 'boolean'
      }
    },
    owner: {
      control: {
        type: 'boolean'
      }
    }
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Tipster: Story = {
  args: {
    type: 'tipster',
    extended: false
  }
}

export const Tip: Story = {
  args: {
    type: 'tip',
    extended: false
  }
}

export const OwnedTip: Story = {
  args: {
    type: 'tip',
    extended: false,
    owner: true
  }
}
