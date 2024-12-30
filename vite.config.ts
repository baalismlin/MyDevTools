import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // build: {
  //   sourcemap: true,
  //   rollupOptions: {
  //     input: {
  //       background: resolve(__dirname, 'src/background/background.ts'),
  //       content: resolve(__dirname, 'src/background/content.ts'),
  //       main: resolve(__dirname, 'index.html'),
  //     },
  //     output: {
  //       entryFileNames: '[name].js',
  //       chunkFileNames: '[name].js',
  //       assetFileNames: '[name].[ext]',
  //     },
  //   },
  // },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
