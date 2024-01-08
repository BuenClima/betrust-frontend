/// <reference types="@testing-library/jest-dom" />

import mediaQuery from 'css-mediaquery'
import nodeFetch, { Request, Response } from 'node-fetch'
Object.assign(global, {
  fetch: nodeFetch,
  Request,
  Response
})

import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

function createMatchMedia(width: number, height: number) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width, height }),
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true
    }
  }
}

export function resizeScreenSize(width: number, height: number) {
  window.matchMedia = createMatchMedia(width, height)
}
