import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 0, 
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});