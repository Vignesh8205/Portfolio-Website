import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    sourcemap: false, // ✅ disable source map to prevent 404 on .tsx
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}); 
