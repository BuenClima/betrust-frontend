import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import TipsterStatistics from './TipsterStatistics'

/**
 * @description TipsterStatistics unit tests
 */
describe('TipsterStatistics', async () => {
  /**
   * @description renders a TipsterStatistics
   */
  it('renders a TipsterStatistics', async () => {
    render(
      <AppProvider>
        <TipsterStatistics />
      </AppProvider>
    )

    expect(screen.getByText('Picks')).toBeVisible()
    expect(screen.getByText('Yield')).toBeVisible()
    expect(screen.getByText('Profit(Uds)')).toBeVisible()
    expect(screen.getByText('Win Rate')).toBeVisible()
    expect(screen.getByText('Avg Stake')).toBeVisible()
    expect(screen.getByText('Avg Odds')).toBeVisible()
    expect(screen.getByText('Rating')).toBeVisible()
  })
})
