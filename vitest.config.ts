import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.unit.test.tsx', 'src/**/*.unit.test.ts']
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
})
