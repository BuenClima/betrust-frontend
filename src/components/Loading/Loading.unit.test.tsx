import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Loading from './Loading'

/**
 * @description Loading unit tests
 */
describe('Loading', async () => {
  /**
   * @description renders a Loading
   */
  it('renders a Loading', async () => {
    render(
      <AppProvider
        preloadedState={{ loading: { isLoading: true, message: 'Loading message' } }}
      >
        <Loading />
      </AppProvider>
    )
    const circularProgressLoading = screen.getByTestId('circular-progress-loading')
    await waitFor(() => expect(circularProgressLoading).toBeInTheDocument())
  })
})
