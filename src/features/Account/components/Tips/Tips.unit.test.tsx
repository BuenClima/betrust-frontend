import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Tips from './Tips'

/**
 * @description Tips unit tests
 */
describe('Tips', async () => {
  /**
   * @description renders a Tips
   */
  it('renders a Tips', async () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={[{ pathname: '/account' }]}>
          <Tips />
        </MemoryRouter>
      </AppProvider>
    )
    expect(screen.getByText('History (100)')).toBeVisible()
    expect(screen.getByText('Filters')).toBeInTheDocument()
  })
})
