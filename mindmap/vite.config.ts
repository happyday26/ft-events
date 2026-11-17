/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  optimizeDeps: {
    include: ['simple-mind-map/dist/simpleMindMap.umd.min'],
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
