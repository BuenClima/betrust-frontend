import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Statistic from './Statistic'

/**
 * @description Statistic unit tests
 */
describe('Statistic', async () => {
  /**
   * @description renders a Statistic
   */
  it('renders a Statistic', async () => {
    const value = '2.03'
    const label = 'Avg Odds'
    render(
      <AppProvider>
        <Statistic value={value} label={label} />
      </AppProvider>
    )

    expect(screen.getByText(value)).toBeVisible()
    expect(screen.getByText(label)).toBeVisible()
  })
})
