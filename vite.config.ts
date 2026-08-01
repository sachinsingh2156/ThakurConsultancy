import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (www.thakurconsultancy.com) serves from site root
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
