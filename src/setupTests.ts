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
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
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
