import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
            return `love-roulette/assets/${extType}/[name]-[hash][extname]`;
          }
          return `love-roulette/assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'love-roulette/assets/[name]-[hash].js',
        entryFileNames: 'love-roulette/assets/[name]-[hash].js',
      },
    },
  },
})
