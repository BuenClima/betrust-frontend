import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'
import { resizeScreenSize } from '@/setupTests'

import AppBar from './AppBar'

/**
 * @description AppBar unit tests
 */
describe('AppBar', async () => {
  /**
   * @description renders with a toolbar and content
   */
  it('renders with a toolbar and content', async () => {
    render(
      <AppProvider>
        <AppBar />
      </AppProvider>
    )

    const toolbar = screen.getByTestId('toolbar')

    await waitFor(() => {
      expect(toolbar).toBeInTheDocument()
    })
  })

  /**
   * @description renders with desktop viewport
   */
  it('renders with desktop viewport', async () => {
    render(
      <AppProvider>
        <AppBar />
      </AppProvider>
    )

    const toolbar = screen.getByTestId('toolbar')
    const logoMd = screen.getByTestId('logo-md')
    const logoNameMd = screen.getByTestId('logo-name-md')
    const linkToTipsters = screen.getByTestId('menu-tipsters-button')
    const linkToTips = screen.getByTestId('menu-tips-button')

    await waitFor(() => {
      expect(toolbar).toBeInTheDocument()

      expect(logoMd).toBeInTheDocument()

      expect(logoNameMd).toBeInTheDocument()
      expect(logoNameMd).toHaveTextContent('BETRUST')

      expect(linkToTipsters).toBeInTheDocument()
      expect(linkToTips).toBeInTheDocument()

      expect(linkToTipsters).toHaveTextContent('Tipsters')
      expect(linkToTips).toHaveTextContent('Tips')
    })
  })
  /**
   * @description renders with desktop viewport
   */
  it('renders with mobile viewport', async () => {
    resizeScreenSize(390, 844)
    render(
      <AppProvider>
        <AppBar />
      </AppProvider>
    )

    const toolbar = screen.getByTestId('toolbar')
    const logoXs = screen.getByTestId('logo-xs')
    const logoNameXs = screen.getByTestId('logo-name-xs')
    const appMenu = screen.getByTestId('menu')

    await waitFor(() => {
      expect(toolbar).toBeInTheDocument()

      expect(logoXs).toBeInTheDocument()

      expect(logoNameXs).toBeInTheDocument()
      expect(logoNameXs).toHaveTextContent('BETRUST')

      expect(appMenu).toBeInTheDocument()
    })

    await act(async () => {
      await userEvent.click(appMenu).then(() => {
        const linkToTipsters = screen.getByTestId('xs-menu-tipsters-button')
        const linkToTips = screen.getByTestId('xs-menu-tips-button')

        expect(linkToTipsters).toBeInTheDocument()
        expect(linkToTips).toBeInTheDocument()

        expect(linkToTipsters).toHaveTextContent('Tipsters')
        expect(linkToTips).toHaveTextContent('Tips')
      })
    })
  })

  /**
   * @description renders with desktop viewport
   */
  it('on menu settings click it should open the menu settings', async () => {
    render(
      <AppProvider>
        <AppBar />
      </AppProvider>
    )

    const menuUserButton = screen.getByTestId('menu-user-button')
    await act(async () => {
      await userEvent.click(menuUserButton).then(() => {
        const menuAppBar = screen.getByTestId('menu-user')
        const linkToAccount = screen.getByTestId('menu-user-account')
        const linkToLogout = screen.getByTestId('menu-user-logout')

        expect(menuAppBar).toBeInTheDocument()

        expect(linkToAccount).toBeInTheDocument()
        expect(linkToLogout).toBeInTheDocument()

        expect(linkToAccount).toHaveTextContent('Account')
        expect(linkToLogout).toHaveTextContent('Logout')
      })
    })
  })
})
