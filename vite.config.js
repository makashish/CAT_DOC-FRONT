import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // proxy to Flask backend
    },
  },
  build: {
    outDir: 'dist', // ensures Render knows where to find output
  },
});