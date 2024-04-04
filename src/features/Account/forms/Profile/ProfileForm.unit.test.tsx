import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import ProfileForm from './ProfileForm'

/**
 * @description ProfileForm unit tests
 */
describe('ProfileForm', async () => {
  /**
   * @description renders a ProfileForm
   */
  it('renders a ProfileForm', async () => {
    render(
      <AppProvider>
        <ProfileForm />
      </AppProvider>
    )
    expect(screen.getByPlaceholderText('Name')).toBeVisible()
    expect(screen.getByPlaceholderText('Email')).toBeVisible()
    expect(screen.getByPlaceholderText('Description')).toBeVisible()
  })
})
