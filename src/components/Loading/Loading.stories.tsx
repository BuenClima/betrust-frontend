import type { Meta, StoryObj } from '@storybook/react'

import AppProvider from '@/providers/AppProvider'

import { Loading } from './Loading'

const meta = {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppProvider
        preloadedState={{ loading: { isLoading: true, message: 'Loading message' } }}
      >
        <Story />
      </AppProvider>
    )
  ]
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
