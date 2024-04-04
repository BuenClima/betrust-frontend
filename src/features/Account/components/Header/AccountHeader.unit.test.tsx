import { act, render, screen } from '@testing-library/react'
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import AccountHeader from './AccountHeader'

/**
 * @description AccountHeader unit tests
 */
describe('AccountHeader', async () => {
  /**
   * @description renders a AccountHeader for a guest
   */
  it('renders a AccountHeader for a guest', async () => {
    render(
      <AppProvider>
        <AccountHeader self={false} tipster={false} />
      </AppProvider>
    )
    expect(screen.getByText('Name')).toBeVisible()
    expect(screen.getByText('Description')).toBeVisible()

    const avatar = screen.getByTestId('avatar')
    expect(avatar).toBeVisible()

    await act(async () => {
      await userEvent.click(avatar, {
        pointerEventsCheck: PointerEventsCheckLevel.Never
      })
    })

    const cover = screen.queryByTestId('edit-cover')
    expect(cover).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Create tip' })).not.toBeInTheDocument()
  })

  /**
   * @description renders a AccountHeader a self account
   */
  it('renders a AccountHeader a self account', async () => {
    render(
      <AppProvider>
        <AccountHeader self={true} tipster={false} />
      </AppProvider>
    )
    expect(screen.getByText('Name')).toBeVisible()
    expect(screen.getByText('Description')).toBeVisible()

    const avatar = screen.getByTestId('avatar')
    expect(avatar).toBeVisible()

    await act(async () => {
      await userEvent.click(avatar, {
        pointerEventsCheck: PointerEventsCheckLevel.Never
      })
    })

    const cover = screen.queryByTestId('edit-cover')
    expect(cover).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Create tip' })).not.toBeInTheDocument()
  })

  /**
   * @description renders a AccountHeader a tipster self account
   */
  it('renders a AccountHeader a tipster self account', async () => {
    render(
      <AppProvider>
        <AccountHeader self={true} tipster={true} />
      </AppProvider>
    )
    expect(screen.getByText('Name')).toBeVisible()
    expect(screen.getByText('Description')).toBeVisible()

    const avatar = screen.getByTestId('avatar')
    expect(avatar).toBeVisible()

    await act(async () => {
      await userEvent.click(avatar, {
        pointerEventsCheck: PointerEventsCheckLevel.Never
      })
    })

    const cover = screen.queryByTestId('edit-cover')
    expect(cover).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Create tip' })).toBeInTheDocument()
  })
})
