import { defineConfig } from 'vite'
import solid from 'solid-start/vite'
import solidSvg from 'vite-plugin-solid-svg'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [solid(), solidSvg()],
})
