import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import SignInForm from './SignInForm'

/**
 * @description SignInForm unit tests
 */
describe('SignInForm', async () => {
  /**
   * @description renders a SignInForm
   */
  it('renders a SignInForm', async () => {
    render(
      <AppProvider>
        <MemoryRouter>
          <SignInForm />
        </MemoryRouter>
      </AppProvider>
    )
    expect(screen.getByPlaceholderText('Email')).toBeVisible()
    expect(screen.getByPlaceholderText('Password')).toBeVisible()

    const button = screen.getByRole('button', { name: 'Sign In' })
    expect(button).toBeVisible()
  })

  /**
   * @description submits a SignInForm with invalid data
   */
  it('submits a SignInForm with invalid data', async () => {
    render(
      <AppProvider>
        <MemoryRouter>
          <SignInForm />
        </MemoryRouter>
      </AppProvider>
    )

    const button = screen.getByRole('button', { name: 'Sign In' })

    await userEvent.click(button)

    expect(screen.getByText('Email is required')).toBeVisible()
    expect(screen.getByText('Password is required')).toBeVisible()
  })

  /**
   * @description submits a SignInForm with valid data
   */
  it('submits a SignInForm with valid data', async () => {
    render(
      <AppProvider>
        <MemoryRouter>
          <SignInForm />
        </MemoryRouter>
      </AppProvider>
    )

    const email = screen.getByPlaceholderText('Email')
    await userEvent.type(email, 'email@example.com')
    expect(email).toHaveValue('email@example.com')

    const password = screen.getByPlaceholderText('Password')
    await userEvent.type(password, 'password')
    expect(password).toHaveValue('password')

    const button = screen.getByRole('button', { name: 'Sign In' })

    await userEvent.click(button)

    expect(screen.queryByText('Email is required')).toBeNull()
    expect(screen.queryByText('Password is required')).toBeNull()
  })
})
