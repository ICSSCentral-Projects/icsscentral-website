import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const FIGMA_ASSET_PREFIX = 'figma:asset/'
const FIGMA_VIRTUAL_PREFIX = '\0virtual:figma-asset:'

const figmaAssetFallbackPlugin = {
  name: 'figma-asset-fallback',
  resolveId(id: string) {
    if (id.startsWith(FIGMA_ASSET_PREFIX)) {
      const assetName = id.slice(FIGMA_ASSET_PREFIX.length)
      return `${FIGMA_VIRTUAL_PREFIX}${assetName}`
    }

    return null
  },
  load(id: string) {
    if (!id.startsWith(FIGMA_VIRTUAL_PREFIX)) {
      return null
    }

    const assetName = id.slice(FIGMA_VIRTUAL_PREFIX.length)
    const label = assetName.replace(/\.[a-z0-9]+$/i, '')
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><rect width="1200" height="675" fill="#f3f4f6"/><rect x="24" y="24" width="1152" height="627" fill="#ffffff" stroke="#d1d5db" stroke-width="2"/><text x="600" y="320" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="28" fill="#374151">Figma asset not found</text><text x="600" y="364" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" fill="#6b7280">${label}</text></svg>`

    return `export default "data:image/svg+xml,${encodeURIComponent(svg)}";`
  },
}

export default defineConfig({
  plugins: [
    figmaAssetFallbackPlugin,
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
