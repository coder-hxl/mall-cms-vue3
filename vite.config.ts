const path = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ElementPlus 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathResolve = (dirPath: any) => path.resolve(process.cwd(), dirPath)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
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
        // coderwhy: http://152.136.185.210:5000
        // coderhxl: http://8.210.98.225:9000
        target: 'http://localhost:9000',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    }
  }
})
