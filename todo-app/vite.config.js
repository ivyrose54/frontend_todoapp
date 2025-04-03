import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Change the port to 5174
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Django backend
        changeOrigin: true,
      },
    },
  },
});