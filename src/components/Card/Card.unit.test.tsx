import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import Layout from '@/layouts/Layout'
import AppProvider from '@/providers/AppProvider'

import Card from './Card'

/**
 * @description Card unit tests
 */
describe('Card', async () => {
  /**
   * @description renders a tip card
   */
  it('renders a tip card', async () => {
    render(
      <AppProvider>
        <Card type="tip" extended={false} />
      </AppProvider>
    )

    const card = screen.getByTestId('card')
    const cardHeader = screen.getByTestId('card-header')
    const cardAvatar = screen.getByTestId('card-avatar')
    const cardTipTile = screen.getByTestId('card-tip-title')
    const cardTipSubtitle = screen.getByTestId('card-tip-subtitle')
    const cardTipContent = screen.getByTestId('card-tip-content')
    const cardTipAction = screen.getByTestId('card-tip-action')

    await waitFor(() => {
      expect(card).toBeInTheDocument()

      expect(cardHeader).toBeInTheDocument()

      expect(cardAvatar).toBeInTheDocument()

      expect(cardTipTile).toBeInTheDocument()

      expect(cardTipSubtitle).toBeInTheDocument()

      expect(cardTipContent).toBeInTheDocument()

      expect(cardTipAction).toBeInTheDocument()
    })
  })

  /**
   * @description renders a tipster card
   */
  it('renders a tipster card', async () => {
    render(
      <AppProvider>
        <Card type="tipster" extended={false} />
      </AppProvider>
    )

    const card = screen.getByTestId('card')
    const cardHeader = screen.getByTestId('card-header')
    const cardAvatar = screen.getByTestId('card-avatar')
    const cardTipsterContent = screen.getByTestId('card-tipster-content')
    const cardTipsterContentAction = screen.getByTestId('card-tipster-content-actions')
    const cardTipsterContentCollpaseButton = screen.getByTestId(
      'card-tipster-content-collapse-button'
    )
    const cardTipsterSubtitle = screen.getByTestId('card-tipster-subtitle')
    const cardTipsterTitle = screen.getByTestId('card-tipster-title')

    await waitFor(() => {
      expect(card).toBeInTheDocument()

      expect(cardHeader).toBeInTheDocument()

      expect(cardAvatar).toBeInTheDocument()

      expect(cardTipsterContent).toBeInTheDocument()

      expect(cardTipsterContentAction).toBeInTheDocument()

      expect(cardTipsterContentCollpaseButton).toBeInTheDocument()

      expect(cardTipsterSubtitle).toBeInTheDocument()

      expect(cardTipsterTitle).toBeInTheDocument()
    })
  })
  /**
   * @description renders a tipster card extended
   */
  it('renders a tipster card extended', async () => {
    render(
      <AppProvider>
        <Layout>
          <Card type="tipster" extended={true} />
        </Layout>
      </AppProvider>
    )

    const card = screen.getByTestId('card')
    const cardHeader = screen.getByTestId('card-header')
    const cardAvatar = screen.getByTestId('card-avatar')
    const cardTipsterContent = screen.getByTestId('card-tipster-content')
    const cardTipsterContentAction = screen.getByTestId('card-tipster-content-actions')
    const cardTipsterContentCollpaseButton = screen.getByTestId(
      'card-tipster-content-collapse-button'
    )
    const cardTipsterSubtitle = screen.getByTestId('card-tipster-subtitle')
    const cardTipsterTitle = screen.getByTestId('card-tipster-title')

    await waitFor(() => {
      expect(card).toBeInTheDocument()

      expect(cardHeader).toBeInTheDocument()

      expect(cardAvatar).toBeInTheDocument()

      expect(cardTipsterContent).toBeInTheDocument()

      expect(cardTipsterContentAction).toBeInTheDocument()

      expect(cardTipsterContentCollpaseButton).toBeInTheDocument()

      expect(cardTipsterSubtitle).toBeInTheDocument()

      expect(cardTipsterTitle).toBeInTheDocument()
    })

    await act(async () => {
      await userEvent.click(card).then(async () => {
        const modal = screen.getByTestId('modal')
        await waitFor(() => {
          expect(modal).toBeInTheDocument()
        })
      })
    })
  })
})
