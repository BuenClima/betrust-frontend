import { render, screen } from '@testing-library/react'
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
        <Tips />
      </AppProvider>
    )
    expect(screen.getByText('History (100)')).toBeVisible()
    expect(screen.getByText('Filters')).toBeInTheDocument()
  })
})
