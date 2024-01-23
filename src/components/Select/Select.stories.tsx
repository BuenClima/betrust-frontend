import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Select } from './Select'

const meta = {
  title: 'Components/Select',
  component: Select,
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
    disabled: {
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
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: null,
    options: [
      { name: 'Option 1', id: 'option1' },
      { name: 'Option 2', id: 'option2' },
      { name: 'Option 3', id: 'option3' }
    ],
    placeholder: 'Select an option',
    helperText: 'This is a helper text',
    error: false,
    disabled: false,
    setValue: () => {}
  }
}

export const Error: Story = {
  args: {
    value: null,
    options: [
      { name: 'Option 1', id: 'option1' },
      { name: 'Option 2', id: 'option2' },
      { name: 'Option 3', id: 'option3' }
    ],
    placeholder: 'Select an option',
    helperText: 'This is a helper text',
    error: true,
    disabled: false,
    setValue: () => {}
  }
}

export const Disabled: Story = {
  args: {
    value: null,
    options: [
      { name: 'Option 1', id: 'option1' },
      { name: 'Option 2', id: 'option2' },
      { name: 'Option 3', id: 'option3' }
    ],
    placeholder: 'Select an option',
    helperText: 'This is a helper text',
    error: false,
    disabled: true,
    setValue: () => {}
  }
}
