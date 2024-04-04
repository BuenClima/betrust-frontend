import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import PasswordField from './PasswordField'

/**
 * @description PasswordField unit tests
 */
describe('PasswordField', async () => {
  /**
   * @description renders a PasswordField
   */
  it('renders a PasswordField', async () => {
    const value = '12345'

    const onChange = vi.fn()

    render(
      <AppProvider>
        <PasswordField
          value={value}
          onChange={onChange}
          data-testid="passwordfield"
          placeholder="Placeholder"
          helperText="This is a helper text"
          error={false}
          label="Password"
        />
      </AppProvider>
    )

    const textbox = screen.getByTestId('passwordfield')
    const placeholder = screen.getByPlaceholderText('Placeholder')
    const helperText = screen.getByText('This is a helper text')
    const label = screen.getByLabelText('Password')

    expect(textbox).toBeInTheDocument()
    expect(placeholder).toBeVisible()
    expect(helperText).toBeVisible()
    expect(label).toBeVisible()

    const visibilityOffButton = screen.getByTestId('password-invisible-button')

    expect(visibilityOffButton).toBeInTheDocument()

    expect(textbox).not.toHaveTextContent(value)

    await act(async () => {
      await userEvent.click(visibilityOffButton)
    })
    const visibilityButton = screen.getByTestId('password-visible-button')

    expect(visibilityButton).toBeInTheDocument()
  })
})
