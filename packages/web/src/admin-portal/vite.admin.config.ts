import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src/admin-portal',
  build: {
    outDir: '../../dist/admin-portal',
  },
});