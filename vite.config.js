import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src',
  base: '/',
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
        assetFileNames: 'assets/[name].[hash][extname]',
        entryFileNames: 'js/[name].[hash].js',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});