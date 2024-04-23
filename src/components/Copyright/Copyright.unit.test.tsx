import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Copyright from './Copyright'

/**
 * @description Copyright unit tests
 */
describe('Copyright', async () => {
  /**
   * @description renders a Copyright
   */
  it('renders a Copyright', async () => {
    render(<Copyright />)
    expect(screen.getByTestId('copyright')).toBeVisible()
    expect(screen.getByTestId('copyright')).toHaveTextContent(
      `Copyright © BETRUST ${new Date().getFullYear()}.`
    )
  })
})
