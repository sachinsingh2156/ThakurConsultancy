import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL: https://sachinsingh2156.github.io/ThakurConsultancy/
// Custom domain (www.thakurconsultancy.com): set VITE_BASE_PATH=/ in the workflow
const base = process.env.VITE_BASE_PATH || '/ThakurConsultancy/'

export default defineConfig({
  plugins: [react()],
  base,
})
