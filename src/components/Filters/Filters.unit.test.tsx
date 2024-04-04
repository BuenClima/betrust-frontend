import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import Layout from '@/layouts/Layout'
import AppProvider from '@/providers/AppProvider'

import Filters from './Filters'

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
        <Filters filter="filterTips" />
      </AppProvider>
    )

    const filters = screen.getByTestId('filters')
    const filtersButton = screen.getByTestId('filters-button')
    const sortButton = screen.getByTestId('sort-button')

    await waitFor(() => {
      expect(filters).toBeInTheDocument()
      expect(filtersButton).toBeInTheDocument()
      expect(sortButton).toBeInTheDocument()
    })
  })

  /**
   * @description renders a sort menu when clicking on sorting button
   */
  it('renders a sort menu when clicking on sorting button', async () => {
    render(
      <AppProvider>
        <Layout>
          <Filters filter="filterTips" />
        </Layout>
      </AppProvider>
    )

    const sortButton = screen.getByTestId('sort-button')
    await act(async () => {
      await userEvent.click(sortButton)
    })
    await waitFor(() => {
      const filterTitle = screen.getByTestId('sort-title')
      expect(filterTitle).toBeInTheDocument()
      expect(filterTitle).toHaveTextContent('Sort')
    })
  })

  /**
   * @description renders a filters menu when clicking on filters button
   */
  it('renders a filters menu when clicking on filters button', async () => {
    render(
      <AppProvider>
        <Layout>
          <Filters filter="filterTips" />
        </Layout>
      </AppProvider>
    )

    const filtersButton = screen.getByTestId('filters-button')
    await act(async () => {
      await userEvent.click(filtersButton)
    })
    await waitFor(() => {
      const filterTitle = screen.getByTestId('filter-title')
      expect(filterTitle).toBeInTheDocument()
      expect(filterTitle).toHaveTextContent('Filters')
    })
  })
})
