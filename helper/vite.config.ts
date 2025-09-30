import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/helper/', // <-- добавь эту строку
  plugins: [react(), tailwindcss()],
})
