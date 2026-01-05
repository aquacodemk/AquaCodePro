import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/AquaCodePro/', 
  server: {
    port: 5174,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.jpg', 'favicon.ico'],
      manifest: {
        name: 'AQUA CODE PRO',
        short_name: 'AQUA CODE PRO',
        description: 'Ватерполо Тренинг Апликација',
        theme_color: '#0891b2',
        background_color: '#020617',
        display: 'standalone',
        icons: [
          {
            src: 'logo.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'logo.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      }
    })
  ]
});