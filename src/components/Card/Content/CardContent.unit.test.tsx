import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import CardContent from './CardContent'

/**
 * @description CardContent unit tests
 */
describe('CardContent', async () => {
  /**
   * @description renders a non extended tip card content
   */
  it('renders a non extended tip card content', async () => {
    render(
      <AppProvider>
        <CardContent type="tip" extended={false} />
      </AppProvider>
    )

    const cardTipContent = screen.getByTestId('card-tip-content')
    const cardTipContentTitle = screen.getByTestId('card-tip-content-title')
    const cardTipContentSubtitle = screen.getByTestId('card-tip-content-subtitle')
    const cardTipContentExtendedInfo = screen.queryByTestId(
      'card-tip-content-extended-info'
    )

    await waitFor(() => {
      expect(cardTipContent).toBeInTheDocument()
      expect(cardTipContentTitle).toBeInTheDocument()
      expect(cardTipContentSubtitle).toBeInTheDocument()
      expect(cardTipContentExtendedInfo).not.toBeInTheDocument()
    })
  })

  /**
   * @description renders an extended tip card content
   */
  it('renders an extended tip card content', async () => {
    render(
      <AppProvider>
        <CardContent type="tip" extended={true} />
      </AppProvider>
    )

    const cardTipContent = screen.getByTestId('card-tip-content')
    const cardTipContentTitle = screen.getByTestId('card-tip-content-title')
    const cardTipContentSubtitle = screen.getByTestId('card-tip-content-subtitle')
    const cardTipContentExtendedInfo = screen.queryByTestId(
      'card-tip-content-extended-info'
    )

    await waitFor(() => {
      expect(cardTipContent).toBeInTheDocument()
      expect(cardTipContentTitle).toBeInTheDocument()
      expect(cardTipContentSubtitle).toBeInTheDocument()
      expect(cardTipContentExtendedInfo).toBeInTheDocument()
    })
  })
  /**
   * @description renders an extended tip card content
   */
  it('renders tipster card content', async () => {
    render(
      <AppProvider>
        <CardContent type="tipster" extended={false} />
      </AppProvider>
    )

    const cardTipContent = screen.getByTestId('card-tipster-content')
    const cardTipsterContent = screen.getByTestId('card-tipster-content')
    const cardTipsterContentAction = screen.getByTestId('card-tipster-content-actions')
    const cardTipsterContentCollpaseButton = screen.getByTestId(
      'card-tipster-content-collapse-button'
    )

    await waitFor(() => {
      expect(cardTipContent).toBeInTheDocument()
      expect(cardTipsterContent).toBeInTheDocument()
      expect(cardTipsterContentAction).toBeInTheDocument()
      expect(cardTipsterContentCollpaseButton).toBeInTheDocument()
    })
  })
})
