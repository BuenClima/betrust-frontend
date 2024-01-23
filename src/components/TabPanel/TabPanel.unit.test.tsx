import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import TabPanel from './TabPanel'

/**
 * @description TabPanel unit tests
 */
describe('TabPanel', async () => {
  /**
   * @description renders a TabPanel
   */
  it('renders a TabPanel', async () => {
    render(
      <AppProvider>
        <TabPanel index={0} value={0}>
          <div>Tab 1</div>
        </TabPanel>
      </AppProvider>
    )

    const tabPanel = screen.getByRole('tabpanel')
    expect(tabPanel).toBeInTheDocument()
    expect(tabPanel).toHaveTextContent('Tab 1')
    expect(tabPanel).toHaveProperty('hidden', false)
    expect(tabPanel).toHaveProperty('id', 'tabpanel-0')
  })
})
