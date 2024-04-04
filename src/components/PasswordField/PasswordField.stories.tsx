/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { PasswordField } from './PasswordField'

const meta = {
  title: 'Components/PasswordField',
  component: PasswordField,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['onChange']
    }
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
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
    label: {
      control: {
        type: 'text'
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
} satisfies Meta<typeof PasswordField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '12345',
    placeholder: 'Select an option',
    helperText: 'This is a helper text',
    error: false,
    label: 'Password',
    onChange: () => {}
  }
}
export const Error: Story = {
  args: {
    value: '12345',
    placeholder: 'Select an option',
    helperText: 'This is a helper text',
    error: true,
    label: 'Password',
    onChange: () => {}
  }
}
