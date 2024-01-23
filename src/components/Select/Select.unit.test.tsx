import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import AppProvider from '@/providers/AppProvider'
import { SelectValueProps } from '@/types'

import Select from './Select'

/**
 * @description Select unit tests
 */
describe('Select', async () => {
  /**
   * @description renders a Select
   */
  it('renders a Select', async () => {
    const options = [
      { name: 'Option 1', id: 'option-1' },
      { name: 'Option 2', id: 'option-2' },
      { name: 'Option 3', id: 'option-3' }
    ]

    const value: SelectValueProps | null = null

    const setValue = vi.fn()
    render(
      <AppProvider>
        <Select
          options={options}
          value={value}
          setValue={setValue}
          data-testid="select"
          placeholder="Placeholder"
          helperText="Choose multiple options"
        />
      </AppProvider>
    )

    const textbox = screen.getByTestId('select')
    const placeholder = screen.getByPlaceholderText('Placeholder')
    const helperText = screen.getByText('Choose multiple options')

    expect(textbox).toBeInTheDocument()
    expect(placeholder).toBeVisible()
    expect(helperText).toBeVisible()

    await userEvent.type(textbox, 'Option')

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
      expect(screen.getByText('Option 3')).toBeInTheDocument()
    })

    await userEvent.click(screen.getByText('Option 1'))

    await waitFor(() => {
      expect(setValue).toHaveBeenCalled()
      expect(setValue).toHaveBeenCalledWith({ name: 'Option 1', id: 'option-1' })
    })
  })
})
