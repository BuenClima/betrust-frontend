import type { Meta, StoryObj } from '@storybook/react'

import { MultiSelect } from './MultiSelect'

const meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['setValue']
    }
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'array'
      }
    },
    options: {
      control: {
        type: 'array'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    helperText: {
      control: {
        type: 'text'
      }
    },
    error: {
      control: {
        type: 'boolean'
      }
    },
    disableCreateOption: {
      control: {
        type: 'boolean'
      }
    }
  }
} satisfies Meta<typeof MultiSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: [],
    options: [
      { name: 'Option 1', id: 'option1' },
      { name: 'Option 2', id: 'option2' },
      { name: 'Option 3', id: 'option3' }
    ],
    placeholder: 'Select an option',
    helperText: 'This is a helper text',
    error: false,
    disableCreateOption: false,
    setValue: () => {}
  }
}

export const Error: Story = {
  args: {
    value: [],
    options: [
      { name: 'Option 1', id: 'option1' },
      { name: 'Option 2', id: 'option2' },
      { name: 'Option 3', id: 'option3' }
    ],
    placeholder: 'Select an option',
    helperText: 'This is a helper text',
    error: true,
    disableCreateOption: false,
    setValue: () => {}
  }
}
