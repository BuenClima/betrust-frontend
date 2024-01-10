import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Footer from './Footer'

/**
 * @description Filters unit tests
 */
describe('Filters', async () => {
  /**
   * @description renders a Filters for a list of tips with a tip filter
   */
  it('renders a Filters for a list of tips with a tip filter', async () => {
    render(
      <AppProvider>
        <Footer />
      </AppProvider>
    )

    const date = screen.getByText(`${new Date().getFullYear()} @ Mr.Tipster`)

    await waitFor(() => {
      expect(date).toBeInTheDocument()
    })
  })
})
