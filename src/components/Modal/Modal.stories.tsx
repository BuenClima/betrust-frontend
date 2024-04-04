/* istanbul ignore file -- @preserve */
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import setupStore from '@/app/store'

import { Modal } from './Modal'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <Provider store={setupStore({ modal: { show: true, type: 'null' } })}>
        <Story />
      </Provider>
    )
  ]
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
