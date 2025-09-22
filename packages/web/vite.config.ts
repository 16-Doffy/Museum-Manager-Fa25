import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../../shared/src'),
      '@ui': path.resolve(__dirname, '../../../ui/src'),
      '@utils': path.resolve(__dirname, '../../../utils/src'),
    },
  },
});
