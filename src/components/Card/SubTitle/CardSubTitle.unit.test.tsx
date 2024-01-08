import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import CardSubTitle from './CardSubTitle'

/**
 * @description CardSubTitle unit tests
 */
describe('CardSubTitle', async () => {
  /**
   * @description renders a tip card subtitle
   */
  it('renders a tip card subtitle', async () => {
    render(
      <AppProvider>
        <CardSubTitle type="tip" subtitle="Hello" />
      </AppProvider>
    )

    const cardTipSubtitle = screen.getByTestId('card-tip-subtitle')

    await waitFor(() => {
      expect(cardTipSubtitle).toBeInTheDocument()
      expect(cardTipSubtitle).toHaveTextContent('Hello')
    })
  })
  /**
   * @description renders a tipster card subtitle
   */
  it('renders a tipster card subtitle', async () => {
    render(
      <AppProvider>
        <CardSubTitle type="tipster" subtitle="Hello" />
      </AppProvider>
    )

    const cardTipSubtitle = screen.getByTestId('card-tipster-subtitle')

    await waitFor(() => {
      expect(cardTipSubtitle).toBeInTheDocument()
      expect(cardTipSubtitle).toHaveTextContent('Hello')
    })
  })
})
