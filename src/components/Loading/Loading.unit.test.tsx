import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, expect, it } from 'vitest'

import setupStore from '@/app/store'

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
      <Provider
        store={setupStore({ loading: { isLoading: true, message: 'Loading message' } })}
      >
        <Loading />
      </Provider>
    )
    const circularProgressLoading = screen.getByTestId('circular-progress-loading')
    await waitFor(() => expect(circularProgressLoading).toBeInTheDocument())
  })
})
