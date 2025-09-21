import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src/museum-portal',
  build: {
    outDir: '../../dist/museum-portal', 
  },
});