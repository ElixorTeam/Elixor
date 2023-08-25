import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solid from '@astrojs/solid-js'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    solid(),
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  experimental: {
    assets: true
  }
})
