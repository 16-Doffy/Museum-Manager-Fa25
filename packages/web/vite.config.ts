// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   root: 'src/admin-portal',
//   build: {
//     outDir: '../dist/admin-portal',
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Có thể thay đổi nếu bạn muốn
    open: true, // Tự động mở trình duyệt khi chạy
  },
  build: {
    outDir: 'dist', // Đường dẫn đến thư mục build
  },
});