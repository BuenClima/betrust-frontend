import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import PieChart from './Pie'

/**
 * @description PieChart unit tests
 */
describe('PieChart', async () => {
  /**
   * @description renders a PieChart
   */
  it('renders a PieChart', async () => {
    const centerLabel = 'center label'
    render(
      <AppProvider>
        <PieChart centerLabel={centerLabel} />
      </AppProvider>
    )

    expect(screen.getByText(centerLabel)).toBeVisible()
  })
})
