import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'js/[name].js'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});