import type { Meta, StoryObj } from '@storybook/react'

import { ImageUpload } from './ImageUpload'

const meta = {
  title: 'Components/ImageUpload',
  component: ImageUpload,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['children']
    }
  },
  tags: ['autodocs'],
  argTypes: {
    tooltip: {
      control: {
        type: 'text'
      }
    },
    self: {
      control: {
        type: 'boolean'
      }
    },
    iconButtonSx: {
      control: {
        type: 'object'
      }
    }
  }
} satisfies Meta<typeof ImageUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tooltip: 'Upload Image',
    self: false,
    iconButtonSx: {
      color: 'primary.main'
    },
    children: 'Upload Image'
  }
}
