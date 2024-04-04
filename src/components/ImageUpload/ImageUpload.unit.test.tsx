import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import ImageUpload from './ImageUpload'

/**
 * @description ImageUpload unit tests
 */
describe('ImageUpload', async () => {
  /**
   * @description renders a ImageUpload
   */
  it('renders a ImageUpload', async () => {
    render(
      <AppProvider>
        <ImageUpload htmlFor="me">
          <p>ImageUpload</p>
        </ImageUpload>
      </AppProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('ImageUpload')).toBeTruthy()
    })

    const imageUpload = screen.getByTestId('image-upload')

    await waitFor(() => {
      expect(imageUpload).toBeInTheDocument()
    })
    await act(async () => {
      await userEvent.upload(
        imageUpload.querySelector('input') as HTMLElement,
        new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })
      )
    })
  })
})
