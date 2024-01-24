import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Footer from './Footer'

/**
 * @description Footer unit tests
 */
describe('Footer', async () => {
  /**
   * @description renders a Footer for a list of tips with a tip filter
   */
  it('renders a Footer for a list of tips with a tip filter', async () => {
    render(
      <AppProvider>
        <Footer />
      </AppProvider>
    )

    const date = screen.getByText(`${new Date().getFullYear()} @ BeTrust`)

    await waitFor(() => {
      expect(date).toBeInTheDocument()
    })
  })
})
