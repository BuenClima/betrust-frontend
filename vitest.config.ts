import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react() as any],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.unit.test.tsx', 'src/**/*.unit.test.ts'],
    exclude: ['src/**/*.stories.tsx'],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      provider: 'istanbul',
      reportOnFailure: true
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
})
