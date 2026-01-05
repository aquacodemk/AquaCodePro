import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/AquaCodePro/',
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'AQUA CODE PRO',
        short_name: 'AQUA CODE PRO',
        theme_color: '#0891b2',
        background_color: '#020617',
        display: 'standalone',
        icons: []
      }
    })
  ]
});