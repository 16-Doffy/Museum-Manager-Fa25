import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src/visitor-portal',
  build: {
    outDir: '../dist/visitor-portal',
  },
});