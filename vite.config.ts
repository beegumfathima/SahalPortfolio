
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Clean, Vercel-stable config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // simple and Vercel-compatible alias
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: './', // crucial for Vercel static deploys
})