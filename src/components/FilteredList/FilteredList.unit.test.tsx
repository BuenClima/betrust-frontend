import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import FilteredList from './FilteredList'

/**
 * @description FilteredList unit tests
 */
describe('FilteredList', async () => {
  /**
   * @description renders a FilteredList for a list of tips with a tip filter
   */
  it('renders a FilteredList for a list of tips with a tip filter', async () => {
    render(
      <AppProvider>
        <FilteredList type="tip" filter="filterTips" />
      </AppProvider>
    )

    const filteredList = screen.getByTestId('filtered-list')
    const filters = screen.getByTestId('filters')

    await waitFor(() => {
      expect(filteredList).toBeInTheDocument()
      expect(filters).toBeInTheDocument()
    })

    const tipCard = screen.queryAllByTestId('card-tip-title')
    const tipsterCard = screen.queryByTestId('card-tipster-content')

    await waitFor(() => {
      expect(tipCard[0]).toBeInTheDocument()
      expect(tipsterCard).not.toBeInTheDocument()
    })
  })

  /**
   * @description renders a FilteredList for a list of tipsters with a tipster filter
   */
  it('renders a FilteredList for a list of tipsters with a tipster filter', async () => {
    render(
      <AppProvider>
        <FilteredList type="tipster" filter="filterTipsters" />
      </AppProvider>
    )

    const filteredList = screen.getByTestId('filtered-list')
    const filters = screen.getByTestId('filters')

    await waitFor(() => {
      expect(filteredList).toBeInTheDocument()
      expect(filters).toBeInTheDocument()
    })

    const tipCard = screen.queryByTestId('card-tip-title')
    const tipsterCard = screen.queryAllByTestId('card-tipster-content')

    await waitFor(() => {
      expect(tipCard).not.toBeInTheDocument()
      expect(tipsterCard[0]).toBeInTheDocument()
    })
  })
})
