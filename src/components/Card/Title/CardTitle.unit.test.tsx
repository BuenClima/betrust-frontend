import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import CardTitle from './CardTitle'

/**
 * @description CardTitle unit tests
 */
describe('CardTitle', async () => {
  /**
   * @description renders a tip card title
   */
  it('renders a tip card title', async () => {
    const callback = vi.fn()
    render(
      <AppProvider>
        <CardTitle
          type="tip"
          title="Hello"
          tipster="TipsterName"
          handleTipsterCallback={callback}
        />
      </AppProvider>
    )

    const cardTiptitle = screen.getByTestId('card-tip-title')

    await waitFor(() => {
      expect(cardTiptitle).toBeInTheDocument()
      expect(cardTiptitle).toHaveTextContent('Hello')
      expect(cardTiptitle).toHaveTextContent('TipsterName')
    })

    const cardTipButton = screen.getByTestId('card-tip-button')

    await userEvent.click(cardTipButton).then(() => {
      expect(callback).toHaveBeenCalledOnce()
    })
  })
  /**
   * @description renders a tipster card title
   */
  it('renders a tipster card title', async () => {
    render(
      <AppProvider>
        <CardTitle type="tipster" title="Hello" />
      </AppProvider>
    )

    const cardTiptitle = screen.getByTestId('card-tipster-title')

    await waitFor(() => {
      expect(cardTiptitle).toBeInTheDocument()
      expect(cardTiptitle).toHaveTextContent('Hello')
    })
  })
})
