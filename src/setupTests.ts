/// <reference types="@testing-library/jest-dom" />

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
