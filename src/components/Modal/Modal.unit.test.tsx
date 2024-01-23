import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { describe, expect, it } from 'vitest'

import setupStore from '@/app/store'

import Modal from './Modal'

/**
 * @description Modal unit tests
 */
describe('Modal', async () => {
  /**
   * @description renders a Modal
   */
  it('renders a Modal', async () => {
    render(
      <Provider store={setupStore({ modal: { show: true, type: 'null' } })}>
        <Modal />
      </Provider>
    )

    const modal = screen.getByTestId('modal')
    const closeButton = screen.getByTestId('close-button')
    expect(modal).toBeVisible()
    expect(closeButton).toBeVisible()

    await userEvent.click(closeButton)
  })
})
