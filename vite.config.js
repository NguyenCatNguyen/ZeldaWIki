import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production'
    ? '/ZeldaWIki/'  // Match your GitHub repo name exactly
    : '/',           // Root path for dev: '/ZeldaWIki',
})
