// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // Importa VitePWA

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ // Agrega el plugin VitePWA aquí
      registerType: 'autoUpdate', // O 'prompt', dependiendo de cómo quieras que se actualice el SW
      injectRegister: 'auto', // Para que el plugin inyecte el código de registro
      workbox: {
        // Precachea solo el "esqueleto" de la app (código y estilos), no las imágenes:
        // antes cada visita nueva descargaba ~16 MB de imágenes de todas las páginas.
        globPatterns: ['**/*.{js,css,html,ico,svg}'],
        // Las imágenes se guardan en caché recién cuando el visitante las ve
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'imagenes',
              expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }
            }
          }
        ]
      },
      manifest: {
        // Configuración del manifiesto de la aplicación
        name: 'Storti-Faggiano | Organización de Seguros', // Nombre completo de tu aplicación
        short_name: 'Storti-Faggiano',     // Nombre corto para la pantalla de inicio
        description: 'Más de 25 años de trayectoria brindando respaldo.', // Descripción de la PWA
        background_color: '#ffffff', // Color de fondo al cargar
        theme_color: '#70b9c1',
        display: 'standalone',   // Cómo se muestra (fullscreen, standalone, minimal-ui, browser)
        scope: '/',              // Alcance de la PWA
        start_url: '/',          // URL de inicio
        icons: [
          // Aquí defines los íconos de tu PWA. Deben estar en la carpeta 'public'.
          {
            src: '/sf-icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/sf-icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/sf-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Para íconos adaptativos en Android
          }
        ]
      }
    })
  ],
  // ¡IMPORTANTE! Añade esta línea para que Vite maneje los archivos .glb y .gltf como assets
  assetsInclude: ['**/*.glb', '**/*.gltf'], 
});