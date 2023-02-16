import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      manifest: {
        icons: [
            {
              "src": "/public/maskable_icon.png",
              "sizes": "196x196",
              "type": "image/png",
              "purpose": "any maskable"
            },
            {
              "src": "/public/logo192.png",
              "type": "image/png",
              "sizes": "192x192"
            },
        ]
      }
     })
  
  
  ]
})

