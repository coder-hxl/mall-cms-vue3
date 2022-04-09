import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// ElementPlus按需导入样式
import ElementPlus from 'unplugin-element-plus/vite'

const pathResolve = (dirPath: any) => path.resolve(process.cwd(), dirPath)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ElementPlus()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      }
    ]
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    }
  }
})
