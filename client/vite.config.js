import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getThemeVariables } from 'antd/dist/theme'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname , './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#699429'
        }
      }
    }
  },
  server: {
    host: 'localhost',
    https: false,
    hmr: {
      clientPort: 443
    }
  }
})
