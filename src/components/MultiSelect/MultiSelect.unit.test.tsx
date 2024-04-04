import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { describe, expect, it, vi } from 'vitest'

import AppProvider from '@/providers/AppProvider'
import { SelectValueProps } from '@/types'

import MultiSelect from './MultiSelect'

/**
 * @description MultiSelect unit tests
 */
describe('MultiSelect', async () => {
  /**
   * @description renders a MultiSelect
   */
  it('renders a MultiSelect', async () => {
    const options = [
      { name: 'Option 1', id: 'option-1' },
      { name: 'Option 2', id: 'option-2' },
      { name: 'Option 3', id: 'option-3' }
    ]

    const value: SelectValueProps[] = []

    const setValue = vi.fn()
    render(
      <AppProvider>
        <MultiSelect
          options={options}
          value={value}
          setValue={setValue}
          data-testid="multiselect"
          placeholder="Placeholder"
          helperText="Choose multiple options"
        />
      </AppProvider>
    )

    const textbox = screen.getByTestId('multiselect')
    const placeholder = screen.getByPlaceholderText('Placeholder')
    const helperText = screen.getByText('Choose multiple options')

    expect(textbox).toBeInTheDocument()
    expect(placeholder).toBeVisible()
    expect(helperText).toBeVisible()

    await act(async () => {
      await userEvent.type(textbox, 'Option')
    })

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
      expect(screen.getByText('Option 3')).toBeInTheDocument()
    })
    await act(async () => {
      await userEvent.click(screen.getByText('Option 1'))
    })
    await waitFor(() => {
      expect(setValue).toHaveBeenCalled()
      expect(setValue).toHaveBeenCalledWith([{ name: 'Option 1', id: 'option-1' }])
    })
  })
})
