import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shellApp',
      remotes: {
        forgotPasswordApp: 'http://localhost:3006/assets/remoteEntry.js',
        helpApp: 'http://localhost:3007/assets/remoteEntry.js',
        registerApp: 'http://localhost:3008/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
  server: {
    port: 3005
  },
  build: {
    target: 'esnext'
  }
})
