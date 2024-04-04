import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Stats from './Stats'

/**
 * @description Stats unit tests
 */
describe('Stats', async () => {
  /**
   * @description renders a Stats
   */
  it('renders a Stats', async () => {
    render(
      <AppProvider>
        <Stats />
      </AppProvider>
    )

    expect(screen.getByText('Summary')).toBeVisible()
    expect(screen.getByText('Picks')).toBeVisible()
    expect(screen.getByText('Charts')).toBeVisible()
    expect(screen.getByText('Sport Ratio')).toBeVisible()
  })
})
