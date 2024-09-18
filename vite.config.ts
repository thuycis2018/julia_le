import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // jsdom simulates a browser-like environment
    globals: true,        // allows using global functions like `describe`, `it`, etc.
    setupFiles: './vitest.setup.ts',  // optional: to configure any setup for the tests
  },
})
