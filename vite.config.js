import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/Controle-Album2026/',
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
}))
