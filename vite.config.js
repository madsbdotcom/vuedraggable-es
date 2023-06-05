import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const isDev = process.env.NODE_ENV !== 'production'

const baseConfig = {
  plugins: [vue()],
  resolve: {
    conditions: ['import', 'require', 'browser'],
  },
  build: {
    minify: true,
    lib: {
      entry: fileURLToPath(new URL('./src/vuedraggable.js', import.meta.url)),
      name: 'vuedraggable-es',
      formats: ['es'],
      fileName: (format) => `vuedraggable-es.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        // "sortablejs",
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(baseConfig)
