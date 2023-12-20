// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        length_converter: resolve(__dirname, 'length_converter.html'),
        weight_converter: resolve(__dirname, 'weight_converter.html'),
        temperature_converter: resolve(__dirname, 'temperature_converter.html'),
        coin_converter: resolve(__dirname, 'coin_converter.html'),
      },
    },
  },
})