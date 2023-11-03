import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    outDir: 'build', // make sure this directory matches the one specified in your deployment script
  },
})
