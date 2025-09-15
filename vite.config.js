import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // optionally other settings if you have them, e.g. base, resolve, etc.
})
