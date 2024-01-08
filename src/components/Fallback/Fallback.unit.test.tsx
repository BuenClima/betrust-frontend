import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Fallback from './Fallback'

/**
 * @description Fallback unit tests
 */
describe('Fallback', async () => {
  /**
   * @description renders a Fallback
   */
  it('renders a Fallback', async () => {
    render(
      <AppProvider>
        <Fallback />
      </AppProvider>
    )
    const circularProgressFallback = screen.getByTestId('circular-progress-fallback')
    await waitFor(() => expect(circularProgressFallback).toBeInTheDocument())
  })
})
