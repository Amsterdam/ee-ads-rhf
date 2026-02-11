import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      // point the package name to the package source during tests
      '@amsterdam/ee-ads-rhf': path.resolve(
        __dirname,
        '../packages/ee-ads-rhf/src',
      ),
      // ensure single react-hook-form instance
      'react-hook-form': path.resolve(
        __dirname,
        '../node_modules/react-hook-form',
      ),
    },
    // optionally dedupe common libs:
    dedupe: ['react', 'react-dom', 'react-hook-form'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/vitest-setup.ts'], // your setup file
  },
});
