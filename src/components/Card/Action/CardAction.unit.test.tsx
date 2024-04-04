import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import CardAction from './CardAction'

/**
 * @description CardAction unit tests
 */
describe('CardAction', async () => {
  /**
   * @description renders a tip card action
   */
  it('renders a tip card action', async () => {
    render(
      <AppProvider>
        <CardAction type="tip" status="active" />
      </AppProvider>
    )

    const cardTipAction = screen.getByTestId('card-tip-action')

    await waitFor(() => {
      expect(cardTipAction).toBeInTheDocument()
      expect(cardTipAction).toHaveTextContent('active')
    })
  })
})
