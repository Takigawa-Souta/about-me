import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  appType: 'spa',
  plugins: [react()],
  base: '/about-me/',
  build: {
    outDir: 'dist',
  },
})
