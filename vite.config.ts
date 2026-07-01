import type { PluginOption } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: 'ignore-chrome-devtools-probe',
      configureServer(server) {
        server.middlewares.use('/.well-known/appspecific/com.chrome.devtools.json', (_req, res) => {
          res.writeHead(404).end()
        })
      },
    },
  ] as PluginOption[],
  base: '/',
  ssgOptions: {
    dirStyle: 'nested',
  },
})
