import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jsresume/', // 👈 Add this line
  plugins: [react()],
})
