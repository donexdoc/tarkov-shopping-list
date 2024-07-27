import react from '@vitejs/plugin-react-swc'
import { readFileSync } from 'fs'
import path from 'path'
import { defineConfig } from 'vite'

const packageJson = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf8' })
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
})
