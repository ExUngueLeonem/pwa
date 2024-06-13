import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },
      manifest: {
      name: 'react-vite-pwa-sample',
      short_name: 'RVPS',
      description: 'react progressive application template',
      theme_color: '#414157',

      display: "fullscreen",
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})