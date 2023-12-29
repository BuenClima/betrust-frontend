import type { Meta, StoryObj } from '@storybook/react'

import { Fallback } from './Fallback'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Fallback',
  component: Fallback,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Fallback>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
