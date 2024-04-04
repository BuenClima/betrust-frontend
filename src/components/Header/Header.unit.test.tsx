import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Header from './Header'

/**
 * @description Header unit tests
 */
describe('Header', async () => {
  /**
   * @description renders a Header for a list of tips
   */
  it('renders a Header for a list of tips', async () => {
    render(
      <AppProvider>
        <Header type="tips" self={false} />
      </AppProvider>
    )

    const tipsHeader = screen.getByTestId('list-header')

    await waitFor(() => {
      expect(tipsHeader).toBeInTheDocument()
    })
  })

  /**
   * @description renders a Header for a list of tipsters
   */
  it('renders a Header for a list of tipsters', async () => {
    render(
      <AppProvider>
        <Header type="tipsters" self={false} />
      </AppProvider>
    )

    const tipsHeader = screen.getByTestId('list-header')

    await waitFor(() => {
      expect(tipsHeader).toBeInTheDocument()
    })
  })

  /**
   * @description renders a Header for a user
   */
  it('renders a Header for a user', async () => {
    render(
      <AppProvider>
        <Header type="user" self={false} />
      </AppProvider>
    )

    const accountHeader = screen.getByTestId('account-header')

    await waitFor(() => {
      expect(accountHeader).toBeInTheDocument()
    })
  })
})
