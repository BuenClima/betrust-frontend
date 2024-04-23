import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Account from './Account'

/**
 * @description Account unit tests
 */
describe('Account', async () => {
  /**
   * @description renders a Account page for self user
   */
  it('renders a Account page for self user', async () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={[{ pathname: '/account' }]}>
          <Account self={true} />
        </MemoryRouter>
      </AppProvider>
    )
    expect(screen.getByTestId('tab-profile')).toBeVisible()
    expect(screen.queryByTestId('tab-stats')).not.toBeInTheDocument()
    expect(screen.queryByTestId('tab-tips')).not.toBeInTheDocument()

    expect(screen.queryByTestId('edit-cover')).toBeVisible()
  })
  /**
   * @description renders a Account page for a guest user visiting a tipster
   */
  it('renders a Account page for a guest user visiting a tipster', async () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={[{ pathname: '/tipsters/1' }]}>
          <Account self={false} />
        </MemoryRouter>
      </AppProvider>
    )
    expect(screen.queryByText('tab-profile')).not.toBeInTheDocument()
    expect(screen.getByTestId('tab-stats')).toBeVisible()
    expect(screen.getByTestId('tab-tips')).toBeVisible()

    expect(screen.queryByTestId('edit-cover')).not.toBeInTheDocument()
  })
})
