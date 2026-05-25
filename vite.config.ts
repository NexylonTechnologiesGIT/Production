import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir:    'dist',
    assetsDir: 'assets',
    target:    'es2020',
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Animation library — large, rarely changes
          if (id.includes('framer-motion'))  return 'motion'
          // React core
          if (id.includes('react-dom'))      return 'react-dom'
          if (id.includes('react-router'))   return 'router'
          // Everything else from node_modules
          if (id.includes('node_modules'))   return 'vendor'
        },
      },
    },

    // Warn when any chunk exceeds 500 kB (Lighthouse recommends ≤ 300 kB)
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
  },

  server: {
    port: 3000,
    open: true,
  },
})
