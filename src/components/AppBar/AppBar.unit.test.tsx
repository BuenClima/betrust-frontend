import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

import AppProvider from '@/providers/AppProvider'

import AppBar from './AppBar'

describe('AppBar', () => {
  it('renders', () => {
    render(
      <AppProvider>
        <AppBar></AppBar>
      </AppProvider>
    )
  })
})
