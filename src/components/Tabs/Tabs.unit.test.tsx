import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import Tabs from './Tabs'

/**
 * @description Tabs unit tests
 */
describe('Tabs', async () => {
  /**
   * @description renders a Tabs
   */
  it('renders a Tabs', async () => {
    const tabs = [
      { label: 'Tab 1', component: <div>Tab1</div> },
      { label: 'Tab 2', component: <div>Tab2</div> }
    ]
    render(
      <AppProvider>
        <Tabs tabs={tabs} />
      </AppProvider>
    )

    const tab1 = screen.getByText('Tab 1')
    const tab2 = screen.getByText('Tab 2')

    let tab1Content: HTMLElement | null = screen.getByText('Tab1')
    let tab2Content = screen.queryByText('Tab2')

    expect(tab1).toBeInTheDocument()
    expect(tab2).toBeInTheDocument()

    expect(tab1Content).toBeVisible()
    expect(tab2Content).not.toBeInTheDocument()

    await userEvent.click(tab2)

    tab1Content = screen.queryByText('Tab1')
    tab2Content = screen.getByText('Tab2')

    expect(tab1Content).not.toBeInTheDocument()
    expect(tab2Content).toBeVisible()
  })
})
