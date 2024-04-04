/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import setupStore from '@/app/store'

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
      <Provider
        store={setupStore({ loading: { isLoading: true, message: 'Loading message' } })}
      >
        <Story />
      </Provider>
    )
  ]
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
